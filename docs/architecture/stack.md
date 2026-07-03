# Stack Tecnológico

> Fuente de verdad de las tecnologías y versiones del proyecto.
> **Última actualización**: 2026-07-02

## Backend

| Categoría           | Tecnología | Versión | Por qué                                                             |
| ------------------- | ---------- | ------- | ------------------------------------------------------------------- |
| Runtime             | Node.js    | >= 14   | Ecosistema maduro para APIs REST y amplia disponibilidad de hosting |
| Framework           | Express    | ^4.21.1 | Minimalista, estándar de facto para APIs REST en Node.js            |
| ORM / capa de datos | Mongoose   | ^8.7.3  | Modela esquemas y validaciones sobre MongoDB de forma declarativa   |
| CORS                | cors       | ^2.8.5  | Habilita el consumo de la API desde clientes en otros orígenes      |
| Configuración       | dotenv     | ^16.4.5 | Carga variables de entorno desde `.env`                             |

## Base de Datos

| Categoría | Tecnología | Versión | Por qué                                                               |
| --------- | ---------- | ------- | --------------------------------------------------------------------- |
| Principal | MongoDB    | Atlas   | Base documental que encaja con el modelado por documentos de Mongoose |

## DevOps & Herramientas

| Categoría   | Tecnología                                                           |
| ----------- | -------------------------------------------------------------------- |
| Dev         | nodemon (^3.1.7) — recarga en caliente en desarrollo                 |
| CI/CD       | GitHub Actions (`.github/workflows/ci.yml`) — lint + formato + tests |
| Testing     | Jest (^30) + Supertest (^7)                                          |
| Lint/Format | ESLint (^10) + Prettier (^3)                                         |

## Justificación de elecciones

| Tecnología elegida | Alternativa descartada | Razón                                                        |
| ------------------ | ---------------------- | ------------------------------------------------------------ |
| MongoDB + Mongoose | SQL + ORM relacional   | Modelo documental flexible y validaciones a nivel de esquema |
| Express            | Framework full-stack   | Se busca una API REST liviana, sin capa de vistas            |

## Versiones mínimas soportadas

- Node.js >= 14
- npm >= 6
- MongoDB (Atlas o instancia local compatible)
