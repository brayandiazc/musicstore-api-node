// Envuelve un controlador async y reenvía cualquier error rechazado a `next()`,
// para que lo trate el middleware centralizado de errores. Evita repetir
// try/catch en cada controlador.
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

module.exports = asyncHandler;
