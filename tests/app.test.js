const request = require("supertest");
const app = require("../app");

// Tests de la app Express que no dependen de la base de datos: sólo se ejercita
// el healthcheck y el manejo de rutas inexistentes.

describe("App Express", () => {
  it("GET / responde 200 con el estado de la API", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.body.status).toBe("ok");
    expect(res.body.name).toBe("musicstore-api-node");
    expect(Array.isArray(res.body.endpoints)).toBe(true);
  });

  it("responde 404 en una ruta inexistente", async () => {
    const res = await request(app).get("/ruta-que-no-existe");
    expect(res.status).toBe(404);
  });
});
