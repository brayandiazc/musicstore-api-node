const Guitarra = require("../models/Guitarra");
const asyncHandler = require("../middleware/asyncHandler");
const AppError = require("../utils/AppError");

// Obtener todas las guitarras
exports.getGuitarras = asyncHandler(async (req, res) => {
  const guitarras = await Guitarra.find();
  res.json(guitarras);
});

// Obtener una guitarra por ID
exports.getGuitarraById = asyncHandler(async (req, res) => {
  const guitarra = await Guitarra.findById(req.params.id);
  if (!guitarra) {
    throw new AppError("Guitarra no encontrada", 404);
  }
  res.json(guitarra);
});

// Crear una nueva guitarra
exports.createGuitarra = asyncHandler(async (req, res) => {
  const guitarra = new Guitarra(req.body);
  const nuevaGuitarra = await guitarra.save();
  res.status(201).json(nuevaGuitarra);
});

// Actualizar una guitarra
exports.updateGuitarra = asyncHandler(async (req, res) => {
  const guitarra = await Guitarra.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!guitarra) {
    throw new AppError("Guitarra no encontrada", 404);
  }
  res.json(guitarra);
});

// Eliminar una guitarra
exports.deleteGuitarra = asyncHandler(async (req, res) => {
  const guitarraEliminada = await Guitarra.findByIdAndDelete(req.params.id);
  if (!guitarraEliminada) {
    throw new AppError("Guitarra no encontrada", 404);
  }
  res.json({ message: "Guitarra eliminada" });
});
