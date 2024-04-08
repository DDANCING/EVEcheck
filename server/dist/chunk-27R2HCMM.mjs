import {
  prisma
} from "./chunk-3GD2DGT4.mjs";
import {
  BadRequest
} from "./chunk-JRO4E4TH.mjs";

// src/routes/register-event.ts
import { z } from "zod";
async function registerForEvent(app) {
  app.withTypeProvider().post("/events/:eventId/attendees", {
    schema: {
      summary: "Adiciona um participante ao evento",
      tags: ["check-ins"],
      body: z.object({
        name: z.string().min(4),
        email: z.string().email()
      }),
      params: z.object({
        eventId: z.string().uuid()
      }),
      response: {
        201: z.object({
          attendeeId: z.number()
        })
      }
    }
  }, async (request, reply) => {
    const { eventId } = request.params;
    const { name, email } = request.body;
    const attendeeFromEmail = await prisma.attendee.findUnique({
      where: {
        eventId_email: {
          eventId,
          email
        }
      }
    });
    if (attendeeFromEmail !== null) {
      throw new BadRequest("esse email j\xE1 esta registrado nesse evento");
    }
    const [event, amountOfAtAttendeesForEvent] = await Promise.all([
      prisma.event.findUnique({
        where: {
          id: eventId
        }
      }),
      prisma.attendee.count({
        where: {
          eventId
        }
      })
    ]);
    if (event?.maximumAttendees && amountOfAtAttendeesForEvent > event?.maximumAttendees) {
      throw new BadRequest("Este evento nao tem mais vagas disponiveis");
    }
    const attendee = await prisma.attendee.create({
      data: {
        name,
        email,
        eventId
      }
    });
    return reply.status(201).send({ attendeeId: attendee.id });
  });
}

export {
  registerForEvent
};
