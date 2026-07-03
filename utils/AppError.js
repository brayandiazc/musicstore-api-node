// Error de aplicación con un código HTTP asociado. Permite que los controladores
// señalen fallos esperados (p. ej. "no encontrado") sin acoplarse a `res`.
class AppError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.name = "AppError";
    this.statusCode = statusCode;
  }
}

module.exports = AppError;
