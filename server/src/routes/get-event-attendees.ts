import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { prisma } from "../utils/prisma";

export async function getEventAttendees(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .get('/events/:eventId/attendees', {
      schema: {
        summary: 'Busca os participantes de um evento.',
        tags: ['events'],
        params: z.object({
          eventId: z.string().uuid(),
        }),
        querystring: z.object({
          query: z.string().nullish(),
          pageIndex: z.string().nullish().default('0').transform(Number),
        }),
        response: {
          200: z.object({
            attendees: z.array(
              z.object({
                id: z.number(),
                name: z.string(),
                email: z.string().email(),
                createdAt: z.date(),
                checkedInAt: z.date().nullable(),
              })
            ),
            total: z.number(),
          }),
        },
      }
    }, async (request, reply) => {
      const { eventId } = request.params
      const { pageIndex, query } = request.query

      const [attendees, total] = await Promise.all([
        prisma.attendee.findMany({
          select: {
            id: true,
            name: true,
            email: true,
            CreatedAt: true,
            checkIn: {
              select: {
                createdAt: true,
              }
            }
          },
          where: query ? {
            eventId,
            name: {
              contains: query,
            }
          } : {
            eventId,
          },
          orderBy: {
            CreatedAt: 'desc'
          }
        }),
        prisma.attendee.count({
          where: query ? {
            eventId,
            name: {
              contains: query,
            }
          } : {
            eventId,
          },
        })
      ])

      return reply.send({ 
        attendees: attendees.map(attendee => {
          return {
            id: attendee.id,
            name: attendee.name,
            email: attendee.email,
            createdAt: attendee.CreatedAt,
            checkedInAt: attendee.checkIn?.createdAt ?? null,
          }
        }),
        total,
      })
    })
}