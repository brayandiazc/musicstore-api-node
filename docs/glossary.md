# Glosario

Vocabulario compartido del dominio y del proyecto. Mantén las definiciones cortas
y sin ambigüedad para que todo el equipo use los términos de la misma forma.

| Término      | Definición                                                                          |
| ------------ | ----------------------------------------------------------------------------------- |
| Controlador  | Módulo en `controllers/` con la lógica de negocio de un recurso (el CRUD).          |
| Guitarra     | Entidad del catálogo; pertenece a un único `Usuario` (`usuario` obligatorio).       |
| Modelo       | Esquema Mongoose en `models/` que define campos, validaciones y relaciones.         |
| MVC          | Patrón Model-View-Controller; aquí: `routes` → `controllers` → `models`.            |
| ObjectId     | Identificador de MongoDB usado como `_id` y en las referencias entre documentos.    |
| populate     | Mecanismo de Mongoose que resuelve una referencia `ObjectId` con el documento real. |
| Ruta (route) | Definición en `routes/` que mapea un verbo HTTP + path a un método del controlador. |
| Usuario      | Entidad que representa al **propietario** de guitarras (no un usuario autenticado). |

> Convención: ordena los términos alfabéticamente y enlaza al documento donde se
> detalla cada concepto cuando aplique.
