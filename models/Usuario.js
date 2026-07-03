const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema(
  {
    // Nombre del usuario, obligatorio, con longitud mínima y máxima
    nombre: {
      type: String,
      required: [true, "El nombre es obligatorio"],
      minlength: [3, "El nombre debe tener al menos 3 caracteres"],
      maxlength: [50, "El nombre no puede exceder los 50 caracteres"],
    },
    // Email único y obligatorio con validación de formato
    email: {
      type: String,
      required: [true, "El email es obligatorio"],
      unique: true,
      match: [/.+@.+\..+/, "El email debe tener un formato válido"],
    },
    // Edad del usuario, opcional, debe ser mayor o igual a 18
    edad: {
      type: Number,
      min: [18, "La edad mínima es 18 años"],
      max: [100, "La edad máxima es 100 años"],
    },
    // Fecha de registro, con valor predeterminado de la fecha actual
    fechaRegistro: {
      type: Date,
      default: Date.now,
    },
    // Guitarras asociadas al usuario, referencias al modelo Guitarra
    guitarras: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Guitarra",
      },
    ],
    // Estado del usuario, indica si está activo o inactivo
    activo: {
      type: Boolean,
      default: true,
    },
  },
  {
    // Añade campos de timestamps (createdAt y updatedAt)
    timestamps: true,
  }
);

const Usuario = mongoose.model("Usuario", usuarioSchema);
module.exports = Usuario;
