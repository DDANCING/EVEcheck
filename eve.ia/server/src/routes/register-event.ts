import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from  "zod";
import { prisma } from "../utils/prisma";
import { error } from "console";

export async function registerForEvent(app: FastifyInstance) {
    app
    .withTypeProvider<ZodTypeProvider>()
    .post('/events/:eventId/attendees', {
        schema: {
            body: z.object({
              name: z.string().min(4),
              email: z.string().email(),
            }),
            params: z.object({
                eventId: z.string().uuid(),
            }),
            response: {
                201: z.object({
                    attendeeId: z.number(),
                })
            }
        }
    }, async (request, reply) => {
      const {eventId} = request.params;
      const {name, email} = request.body;

      const attendeeFromEmail = await prisma.attendee.findUnique({
        where: {
            eventId_email: {
                eventId,
                email
            }
        }
      })

      if (attendeeFromEmail !== null) {
        throw new Error('esse email já esta registrado nesse evento');
      }

      const [event, amountOfAtAttendeesForEvent] = await Promise.all([
        prisma.event.findUnique({
            where: {id: eventId
            }
        }),

        prisma.attendee.count({
                where: {
                    eventId,
                }
              })
            ]);
              
    
      if (event?.maximumAttendees && amountOfAtAttendeesForEvent > event?.maximumAttendees ) {
          throw new Error ("Este evento nao tem mais vagas disponiveis");
      }

      const attendee = await prisma.attendee.create({
        data: {
          name,
          email,
          eventId,
      }
    })
    return reply.status(201).send({attendeeId: attendee.id});
})

}