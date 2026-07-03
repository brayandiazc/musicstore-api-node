module.exports = {
  testEnvironment: "node",
  // La primera ejecución de mongodb-memory-server descarga el binario de mongod,
  // por lo que damos un timeout amplio.
  testTimeout: 60000,
};
