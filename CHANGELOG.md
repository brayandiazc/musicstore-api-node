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
[Unreleased]: https://github.com/brayandiazc/musicstore-api-node/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/brayandiazc/musicstore-api-node/releases/tag/v1.0.0
-->
