# Convenciones de base de datos

> Reglas y estándares de modelado de datos en musicstore-api-node.
> Para el modelo de datos concreto del proyecto ver
> [`../architecture/database.md`](../architecture/database.md).
> **Última actualización**: 2026-07-02

## Stack

- **Motor**: MongoDB.
- **Capa de acceso / ODM**: Mongoose.
- **Migraciones**: no se usan; Mongoose sincroniza esquemas e índices al arrancar.

## Reglas de modelado

- **Identificadores**: se usa el `_id` (ObjectId) que genera MongoDB; las
  referencias entre documentos se guardan como `ObjectId` con `ref`.
- **Nombres**: modelos en `PascalCase` singular (`Usuario`, `Guitarra`); campos
  en `camelCase`, en español (coherente con el dominio del proyecto).
- **Timestamps**: todos los esquemas usan `{ timestamps: true }` → `createdAt` y `updatedAt`.
- **Validación en el esquema**: las reglas (requerido, longitud, rango, unicidad,
  formato) viven en el esquema Mongoose, no en los controladores.
- **Relaciones**: se modelan por referencia (`ObjectId` + `ref`) y se resuelven
  con `populate`. Los campos de relación obligatorios llevan `required`.

## Tipos preferidos

| Caso             | Tipo Mongoose                              |
| ---------------- | ------------------------------------------ |
| Texto            | `String` (con `minlength`/`maxlength`)     |
| Email            | `String` con `match` y `unique`            |
| Números / dinero | `Number` (con `min`/`max`)                 |
| Booleano         | `Boolean` con `default`                    |
| Fecha            | `Date` (con `default: Date.now` si aplica) |
| Referencia       | `ObjectId` con `ref`                       |

## Índices y unicidad

- Declarar `unique: true` en los campos que deben ser únicos (`Usuario.email`,
  `Guitarra.nombre`) — Mongoose crea el índice correspondiente.
- Revisar el impacto de un `unique` sobre datos existentes antes de desplegarlo.

## Ejemplo

```js
const guitarraSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 50,
    },
    precio: { type: Number, required: true, min: 100, max: 10000 },
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
    },
  },
  { timestamps: true }
);
```

## Referencias

- [Mongoose — Schemas](https://mongoosejs.com/docs/guide.html) · [Validation](https://mongoosejs.com/docs/validation.html)
