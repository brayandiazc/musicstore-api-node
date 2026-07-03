const Usuario = require("../models/Usuario");
const Guitarra = require("../models/Guitarra");

// Estos tests usan validateSync() de Mongoose: ejecutan los validadores del
// esquema sin necesitar conexión a la base de datos. Son deterministas y offline.

describe("Modelo Usuario", () => {
  it("es válido con los campos requeridos correctos", () => {
    const usuario = new Usuario({
      nombre: "Juan Perez",
      email: "juan@example.com",
    });
    const error = usuario.validateSync();
    expect(error).toBeUndefined();
  });

  it("falla si falta el nombre y el email", () => {
    const usuario = new Usuario({});
    const error = usuario.validateSync();
    expect(error).toBeDefined();
    expect(error.errors.nombre).toBeDefined();
    expect(error.errors.email).toBeDefined();
  });

  it("falla con un email de formato inválido", () => {
    const usuario = new Usuario({ nombre: "Juan", email: "no-es-un-email" });
    const error = usuario.validateSync();
    expect(error.errors.email).toBeDefined();
  });

  it("falla con edad menor a 18", () => {
    const usuario = new Usuario({
      nombre: "Ana",
      email: "ana@example.com",
      edad: 15,
    });
    const error = usuario.validateSync();
    expect(error.errors.edad).toBeDefined();
  });
});

describe("Modelo Guitarra", () => {
  const usuarioId = "652e000000000000000000aa";

  it("es válida con los campos requeridos correctos", () => {
    const guitarra = new Guitarra({
      nombre: "Gibson Les Paul",
      precio: 1500,
      stock: 3,
      usuario: usuarioId,
    });
    const error = guitarra.validateSync();
    expect(error).toBeUndefined();
  });

  it("falla si el precio está por debajo del mínimo", () => {
    const guitarra = new Guitarra({
      nombre: "Barata",
      precio: 50,
      usuario: usuarioId,
    });
    const error = guitarra.validateSync();
    expect(error.errors.precio).toBeDefined();
  });

  it("falla si no tiene usuario propietario", () => {
    const guitarra = new Guitarra({ nombre: "Sin dueño", precio: 500 });
    const error = guitarra.validateSync();
    expect(error.errors.usuario).toBeDefined();
  });
});
