const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const request = require("supertest");
const app = require("../app");

// Tests de integración de los endpoints CRUD contra una instancia de MongoDB
// en memoria. Ejercitan routes → controllers → models → base de datos real.

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

afterEach(async () => {
  // Deja la base limpia entre tests para que sean independientes.
  const { collections } = mongoose.connection;
  for (const key of Object.keys(collections)) {
    await collections[key].deleteMany({});
  }
});

describe("Endpoints de Usuarios", () => {
  it("POST /api/usuarios crea un usuario y lo devuelve", async () => {
    const res = await request(app)
      .post("/api/usuarios")
      .send({ nombre: "Juan Perez", email: "juan@example.com", edad: 25 });

    expect(res.status).toBe(201);
    expect(res.body._id).toBeDefined();
    expect(res.body.nombre).toBe("Juan Perez");
    expect(res.body.activo).toBe(true);
  });

  it("POST /api/usuarios responde 400 con datos inválidos", async () => {
    const res = await request(app)
      .post("/api/usuarios")
      .send({ nombre: " X", email: "no-es-email" });

    expect(res.status).toBe(400);
    expect(res.body.message).toBeDefined();
  });

  it("GET /api/usuarios lista los usuarios creados", async () => {
    await request(app)
      .post("/api/usuarios")
      .send({ nombre: "Ana Lopez", email: "ana@example.com" });

    const res = await request(app).get("/api/usuarios");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body).toHaveLength(1);
    expect(res.body[0].email).toBe("ana@example.com");
  });

  it("GET /api/usuarios/:id responde 404 si no existe", async () => {
    const id = new mongoose.Types.ObjectId().toString();
    const res = await request(app).get(`/api/usuarios/${id}`);
    expect(res.status).toBe(404);
  });
});

describe("Endpoints de Guitarras", () => {
  // Crea un usuario propietario y devuelve su id.
  const crearUsuario = async () => {
    const res = await request(app)
      .post("/api/usuarios")
      .send({ nombre: "Dueño Guitarra", email: "dueno@example.com" });
    return res.body._id;
  };

  it("POST /api/guitarras crea una guitarra asociada a un usuario", async () => {
    const usuarioId = await crearUsuario();

    const res = await request(app).post("/api/guitarras").send({
      nombre: "Gibson Les Paul",
      precio: 1500,
      marca: "Gibson",
      stock: 3,
      usuario: usuarioId,
    });

    expect(res.status).toBe(201);
    expect(res.body.nombre).toBe("Gibson Les Paul");
    expect(res.body.usuario).toBe(usuarioId);
  });

  it("POST /api/guitarras responde 400 si falta el usuario propietario", async () => {
    const res = await request(app)
      .post("/api/guitarras")
      .send({ nombre: "Sin dueño", precio: 500 });

    expect(res.status).toBe(400);
  });

  it("DELETE /api/guitarras/:id elimina y luego responde 404", async () => {
    const usuarioId = await crearUsuario();
    const creada = await request(app)
      .post("/api/guitarras")
      .send({ nombre: "Fender Strato", precio: 900, usuario: usuarioId });

    const id = creada.body._id;

    const del = await request(app).delete(`/api/guitarras/${id}`);
    expect(del.status).toBe(200);

    const again = await request(app).get(`/api/guitarras/${id}`);
    expect(again.status).toBe(404);
  });
});
