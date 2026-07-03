# Changelog

Todos los cambios notables de este proyecto se documentan en este archivo.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/)
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

## [Unreleased]

### Added

### Changed

### Deprecated

### Removed

### Fixed

### Security

## [1.1.1] - 2026-07-02

### Added

- Tests de integración de endpoints (`tests/api.test.js`) con **mongodb-memory-server**:
  CRUD de usuarios y guitarras contra una MongoDB en memoria (16 tests en total).
- `jest.config.js` con `testTimeout` amplio para la descarga del binario de `mongod`.

### Security

- Resueltas las 8 vulnerabilidades reportadas por `npm audit` (express, mongoose,
  path-to-regexp, qs, body-parser, picomatch) vía `npm audit fix` — 0 vulnerabilidades.

## [1.1.0] - 2026-07-02

### Added

- Suite de tests con **Jest** y **Supertest** (`tests/`): validación de modelos y healthcheck.
- **ESLint** (flat config) y **Prettier** con scripts `lint`, `lint:fix`, `format`, `format:check`.
- Workflow de CI real (`.github/workflows/ci.yml`): lint + formato + tests en Node 18/20/22.
- Endpoint de healthcheck `GET /` que responde `{ "status": "ok" }`.
- Convenciones documentadas con contenido real: `testing`, `quality-tooling`, `deploy`, `database`.
- Glosario del proyecto poblado.

### Changed

- La app Express se extrae a `app.js` (exportable y testeable); `index.js` solo conecta a la BD y arranca.
- README con sección de scripts y estructura del proyecto actualizada.

### Fixed

- Escape innecesario (`\@`) en el regex de validación de email del modelo `Usuario`.

## [1.0.0] - 2026-07-02

### Added

- API REST con Node.js, Express y Mongoose sobre MongoDB.
- CRUD completo de **Usuarios** (`/api/usuarios`) y **Guitarras** (`/api/guitarras`).
- Relación 1:N Usuario → Guitarra con `populate` de guitarras por usuario.
- Validaciones de esquema (longitud, rangos, unicidad, formato de email).
- Documentación del proyecto en `docs/` (arquitectura, convenciones, decisiones, producto).
- Archivos de gobernanza: `CONTRIBUTING`, `CODE_OF_CONDUCT`, `SECURITY`, `LICENSE` (MIT).
- Plantillas de issues/PR, `dependabot.yml` y workflow de CI de ejemplo en `.github/`.
- `.env.example` con las variables `PORT` y `MONGODB_URI`.

<!--
Enlaces de comparación entre versiones:
[Unreleased]: https://github.com/brayandiazc/musicstore-api-node/compare/v1.1.1...HEAD
[1.1.1]: https://github.com/brayandiazc/musicstore-api-node/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/brayandiazc/musicstore-api-node/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/brayandiazc/musicstore-api-node/releases/tag/v1.0.0
-->
