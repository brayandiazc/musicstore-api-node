# Convenciones de testing

> Cómo escribimos y ejecutamos tests en musicstore-api-node.
> **Última actualización**: 2026-07-02

## Stack

- **Framework de tests**: [Jest](https://jestjs.io/).
- **Tests HTTP**: [Supertest](https://github.com/ladjs/supertest) contra la app Express (`app.js`).
- **Base de datos en tests**: [mongodb-memory-server](https://github.com/typegoose/mongodb-memory-server) (MongoDB en memoria).
- **Cobertura**: Jest (`--coverage`).

## Organización

- Los tests viven en `tests/` con sufijo `.test.js`.
- La app Express se exporta desde `app.js` (sin `listen` ni conexión a BD) para
  poder testearla de forma aislada; `index.js` sólo conecta a MongoDB y arranca.

| Tipo        | Qué cubre                                              | Archivo                |
| ----------- | ------------------------------------------------------ | ---------------------- |
| Unitarios   | Validaciones de los esquemas Mongoose (`validateSync`) | `tests/models.test.js` |
| App/HTTP    | Healthcheck y manejo de rutas (sin BD)                 | `tests/app.test.js`    |
| Integración | CRUD de endpoints contra MongoDB en memoria            | `tests/api.test.js`    |

> Las validaciones de modelo se prueban con `validateSync()`, que ejecuta los
> validadores del esquema **sin conexión a la base de datos** → rápidos y offline.
> Los tests de integración (`api.test.js`) levantan un MongoDB en memoria con
> `mongodb-memory-server` y ejercitan el flujo completo routes → controllers →
> models → BD. Cada test limpia las colecciones (`afterEach`) para ser
> independiente. La primera ejecución descarga el binario de `mongod` (por eso el
> `testTimeout` amplio en `jest.config.js`).

## Reglas

- Todo cambio funcional se acompaña de tests.
- Estructura **Arrange-Act-Assert** (AAA): preparar, ejecutar, verificar.
- Un test verifica **una** cosa; nombres descriptivos del comportamiento esperado.
- Los tests deben ser deterministas (sin dependencia de red, reloj o orden).

## Comandos útiles

```bash
npm test              # Ejecutar todos los tests
npm run test:coverage # Con reporte de cobertura
npm run test:watch    # Modo watch
```

## Referencias

- [Jest](https://jestjs.io/docs/getting-started) · [Supertest](https://github.com/ladjs/supertest)
