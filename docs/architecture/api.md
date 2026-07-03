# Referencia de API

> Endpoints y convenciones de la API REST de **musicstore-api-node**.
>
> **Última actualización**: 2026-07-02

## Convenciones generales

- **URL base (desarrollo)**: `http://localhost:3000`
- **Formato**: JSON (`Content-Type: application/json`).
- **Fechas**: ISO 8601 (`YYYY-MM-DDTHH:mm:ssZ`).
- **Sin versionado ni autenticación** por ahora (ver [`auth.md`](auth.md)).

## Manejo de errores

Las respuestas de error devuelven un objeto con `message`:

```json
{ "message": "Guitarra no encontrada" }
```

| Código HTTP | Cuándo                                           |
| ----------- | ------------------------------------------------ |
| 200         | Consulta o actualización exitosa                 |
| 201         | Recurso creado                                   |
| 400         | Datos inválidos al crear (validación de esquema) |
| 404         | Recurso no encontrado por ID                     |
| 500         | Error interno (fallo de consulta / conexión)     |

## Endpoints

### Guitarras — `/api/guitarras`

```http
GET    /api/guitarras        # Listar todas las guitarras
GET    /api/guitarras/:id    # Obtener una guitarra por ID
POST   /api/guitarras        # Crear una guitarra
PUT    /api/guitarras/:id    # Actualizar una guitarra
DELETE /api/guitarras/:id    # Eliminar una guitarra
```

**Ejemplo — crear:**

```http
POST /api/guitarras
Content-Type: application/json

{
  "nombre": "Gibson Les Paul",
  "precio": 1500,
  "marca": "Gibson",
  "stock": 3,
  "usuario": "<ID del usuario>"
}
```

**Respuesta (201):**

```json
{
  "_id": "652f...",
  "nombre": "Gibson Les Paul",
  "precio": 1500,
  "marca": "Gibson",
  "stock": 3,
  "usuario": "652e...",
  "createdAt": "2026-07-02T00:00:00.000Z",
  "updatedAt": "2026-07-02T00:00:00.000Z"
}
```

### Usuarios — `/api/usuarios`

```http
GET    /api/usuarios         # Listar usuarios (con sus guitarras pobladas)
GET    /api/usuarios/:id     # Obtener un usuario por ID (con guitarras)
POST   /api/usuarios         # Crear un usuario
PUT    /api/usuarios/:id     # Actualizar un usuario
DELETE /api/usuarios/:id     # Eliminar un usuario
```

Las respuestas de `GET` de usuarios incluyen las guitarras asociadas mediante
`populate("guitarras", "nombre precio")`.

**Ejemplo — crear:**

```http
POST /api/usuarios
Content-Type: application/json

{
  "nombre": "Juan Perez",
  "email": "juan@example.com",
  "edad": 25,
  "activo": true
}
```

## Changelog de la API

- **v1.0.0** — CRUD de usuarios y guitarras con relación 1:N.
