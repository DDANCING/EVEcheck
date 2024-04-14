import fastify from "fastify";
import { serializerCompiler, validatorCompiler, jsonSchemaTransform, ZodTypeProvider } from "fastify-type-provider-zod";
import { createEvent } from "./routes/create-event";
import { registerForEvent } from "./routes/register-event";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import { getEvent } from "./routes/get-events";
import { getAttendeeBadge } from "./routes/getAteendee";
import { checkIn } from "./routes/chekin";
import { getEventAttendees } from "./routes/get-event-attendees";
import { errorHandler } from "./utils/error-handler";
import { fastifyCors } from "@fastify/cors";

export const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
  origin: "*",
})

app.register(fastifySwagger, {
  swagger: {
    consumes: ['application/json'],
    produces: ['application/json'],
    info: {
      title: 'Evecheck',
      description: 'API for EveCheck application',
      version: '1.0.0'
    }, 
     
  },
  transform: jsonSchemaTransform
})
app.register(fastifySwaggerUI, {
  routePrefix: "/docs",
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createEvent),
app.register(registerForEvent),
app.register(getEvent),
app.register(getAttendeeBadge),
app.register(checkIn),
app.register(getEventAttendees)

app.setErrorHandler(errorHandler) 

app.listen({ port: 3333, host: '0.0.0.0' }).then(() => {
  console.log("HTTP server running in localhost:3333/docs");
});