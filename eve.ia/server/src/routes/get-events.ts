import { FastifyInstance } from "fastify";
import { z } from "zod"


export async function getEvent(app:FastifyInstance) {
    app.get('/events/:eventId', {
        schema: {
            params: z.object({
                eventId: z.string().uuid(),
            })
        }
    }, (request, reply) =>{
    
    })
}