const Usuario = require("../models/Usuario");
const asyncHandler = require("../middleware/asyncHandler");
const AppError = require("../utils/AppError");

// Obtener todos los usuarios con sus guitarras
exports.getUsuarios = asyncHandler(async (req, res) => {
  const usuarios = await Usuario.find().populate("guitarras", "nombre precio");
  res.json(usuarios);
});

// Obtener un usuario por ID con sus guitarras
exports.getUsuarioById = asyncHandler(async (req, res) => {
  const usuario = await Usuario.findById(req.params.id).populate(
    "guitarras",
    "nombre precio"
  );
  if (!usuario) {
    throw new AppError("Usuario no encontrado", 404);
  }
  res.json(usuario);
});

// Crear un nuevo usuario
exports.createUsuario = asyncHandler(async (req, res) => {
  const usuario = new Usuario(req.body);
  const nuevoUsuario = await usuario.save();
  res.status(201).json(nuevoUsuario);
});

// Actualizar un usuario
exports.updateUsuario = asyncHandler(async (req, res) => {
  const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!usuario) {
    throw new AppError("Usuario no encontrado", 404);
  }
  res.json(usuario);
});

// Eliminar un usuario
exports.deleteUsuario = asyncHandler(async (req, res) => {
  const usuarioEliminado = await Usuario.findByIdAndDelete(req.params.id);
  if (!usuarioEliminado) {
    throw new AppError("Usuario no encontrado", 404);
  }
  res.json({ message: "Usuario eliminado" });
});
