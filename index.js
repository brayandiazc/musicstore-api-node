require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 3000;

// Conexión a la base de datos
connectDB();

// Función para mostrar las URLs como enlaces en la consola
const showApiLinks = (port) => {
  console.log(`\nAPI disponible en las siguientes rutas:`);
  console.log(`- Healthcheck (GET): http://localhost:${port}/`);
  console.log(`- Guitarras (GET): http://localhost:${port}/api/guitarras`);
  console.log(`- Guitarras (POST): http://localhost:${port}/api/guitarras`);
  console.log(`- Guitarras (PUT): http://localhost:${port}/api/guitarras/:id`);
  console.log(
    `- Guitarras (DELETE): http://localhost:${port}/api/guitarras/:id`
  );
  console.log(`- Usuarios (GET): http://localhost:${port}/api/usuarios`);
  console.log(`- Usuarios (POST): http://localhost:${port}/api/usuarios`);
  console.log(`- Usuarios (PUT): http://localhost:${port}/api/usuarios/:id`);
  console.log(`- Usuarios (DELETE): http://localhost:${port}/api/usuarios/:id`);
};

// Iniciar el servidor y mostrar las rutas
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
  showApiLinks(PORT);
});
