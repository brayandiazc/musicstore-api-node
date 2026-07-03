const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Healthcheck / raíz: útil para monitoreo y para verificar que la API responde
app.get("/", (req, res) => {
  res.json({
    name: "musicstore-api-node",
    status: "ok",
    endpoints: ["/api/guitarras", "/api/usuarios"],
  });
});

// Rutas
app.use("/api/guitarras", require("./routes/guitarra"));
app.use("/api/usuarios", require("./routes/usuario"));

// 404 para rutas no definidas (responde JSON, coherente con el resto de la API)
app.use((req, res) => {
  res.status(404).json({ message: "Ruta no encontrada" });
});

// Manejo centralizado de errores: debe registrarse al final, tras las rutas.
app.use(require("./middleware/errorHandler"));

module.exports = app;
