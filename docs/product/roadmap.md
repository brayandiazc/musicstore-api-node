# Roadmap — musicstore-api-node

> Estado y dirección del producto. Documento vivo.
> **Última actualización**: 2026-07-02

## Leyenda

- ✅ Hecho
- 🚧 En curso
- 📋 Planificado
- ⏸️ Diferido

## Visión

Ser un proyecto de referencia claro y bien documentado para aprender a construir
APIs REST con Node.js, Express y MongoDB, incorporando progresivamente buenas
prácticas (validación, autenticación, testing, despliegue).

## Estado actual

CRUD funcional de Usuarios y Guitarras con relación 1:N y validaciones de
esquema. Sin autenticación ni tests automatizados todavía.

## Por versión / fase

### v1.0 — API CRUD documentada ✅

- ✅ CRUD de Usuarios y Guitarras.
- ✅ Relación 1:N con `populate`.
- ✅ Documentación `docs/` y gobernanza del repositorio.

### v1.1 — Calidad 🚧

- ✅ Suite de tests con Jest + Supertest (ver [`../conventions/testing.md`](../conventions/testing.md)).
- ✅ Linter y formateo automatizados con ESLint + Prettier (ver [`../conventions/quality-tooling.md`](../conventions/quality-tooling.md)).
- ✅ CI en GitHub Actions (lint + formato + tests).
- ✅ Tests de endpoints con base de datos (`mongodb-memory-server`).
- 📋 Manejo de errores centralizado y validación consistente (400 vs 500).

### v2.0 — Autenticación 📋

- 📋 Registro/login con hashing de contraseñas y JWT.
- 📋 Protección de rutas y autorización por propietario.

## Backlog / ideas sin agendar

- Paginación y filtrado en los listados.
- Documentación interactiva (OpenAPI/Swagger).
- Despliegue con CI/CD (ver [`../conventions/deploy.md`](../conventions/deploy.md)).

## Fuera de alcance

- Interfaz de usuario (frontend): este repositorio es sólo la API.

## Cómo se actualiza este documento

- Revisar al cerrar cada versión/fase.
- Las decisiones que cambian el rumbo se registran como ADRs en [`../decisions/`](../decisions/README.md).
