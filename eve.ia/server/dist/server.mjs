import {
  checkIn
} from "./chunk-LMTUMBO3.mjs";
import {
  createEvent
} from "./chunk-MRQ6AK5W.mjs";
import "./chunk-WLQRP7LJ.mjs";
import {
  getEventAttendees
} from "./chunk-NR44QODF.mjs";
import {
  getEvent
} from "./chunk-6JLO26S5.mjs";
import {
  getAttendeeBadge
} from "./chunk-ZVBM4GAP.mjs";
import {
  registerForEvent
} from "./chunk-27R2HCMM.mjs";
import "./chunk-3GD2DGT4.mjs";
import {
  errorHandler
} from "./chunk-VWHWC7AE.mjs";
import "./chunk-JRO4E4TH.mjs";

// src/server.ts
import fastify from "fastify";
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from "fastify-type-provider-zod";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import { fastifyCors } from "@fastify/cors";
var app = fastify().withTypeProvider();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "Evecheck",
      description: "API for EveCheck application",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUI, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent), app.register(registerForEvent), app.register(getEvent), app.register(getAttendeeBadge), app.register(checkIn), app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running in localhost:3333");
});
export {
  app
};
