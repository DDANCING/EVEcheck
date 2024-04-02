import fastify from "fastify";

const app = fastify()

app.get("/", () => { 
  return "salve salve balao"
})

app.listen({port : 3333}).then(() => {
  console.log("http server running in localhost:3333")
})