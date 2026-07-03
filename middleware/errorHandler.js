// Middleware centralizado de manejo de errores. Traduce los errores conocidos
// (validación de Mongoose, IDs inválidos, índices únicos) a códigos HTTP
// consistentes y responde siempre con la forma `{ message }`.
//
// El 4º parámetro `_next` es obligatorio para que Express reconozca esta función
// como manejador de errores (arity 4), aunque no se use.
const errorHandler = (err, req, res, _next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Error interno del servidor";

  if (err.name === "ValidationError") {
    // Error de validación de esquema Mongoose → 400
    statusCode = 400;
    message = Object.values(err.errors)
      .map((e) => e.message)
      .join(", ");
  } else if (err.name === "CastError") {
    // ID o valor con formato inválido → 400
    statusCode = 400;
    message = `Valor inválido para el campo '${err.path}'`;
  } else if (err.code === 11000) {
    // Violación de índice único → 409
    statusCode = 409;
    const campos = Object.keys(err.keyValue || {}).join(", ");
    message = `Ya existe un registro con ese valor único${
      campos ? ` (${campos})` : ""
    }`;
  }

  // Los errores 5xx son inesperados: se registran para diagnóstico.
  if (statusCode >= 500) {
    console.error(err);
  }

  res.status(statusCode).json({ message });
};

module.exports = errorHandler;
