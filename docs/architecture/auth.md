# Autenticación y Autorización

> Cómo se autentican y autorizan los usuarios en **musicstore-api-node**.
> Para las reglas transversales ver [`../conventions/authentication.md`](../conventions/authentication.md).
>
> **Última actualización**: 2026-07-02

## Estado actual

> ⚠️ **La API no implementa autenticación ni autorización todavía.** Todos los
> endpoints de `/api/usuarios` y `/api/guitarras` son públicos. La entidad
> `Usuario` modela al **propietario** de las guitarras, no a un usuario
> autenticado del sistema (no hay contraseña, sesión ni token).

No expongas esta API a Internet sin añadir una capa de autenticación primero.

## Modelo de identidad (actual)

| Concepto | Descripción                                                          |
| -------- | ------------------------------------------------------------------- |
| Usuario  | Propietario de guitarras. Campos: `nombre`, `email`, `edad`, `activo` |
| Sesión   | No existe                                                            |
| Roles    | No existen                                                           |

## Plan / pendiente

Cuando se implemente la autenticación (ver [`../product/roadmap.md`](../product/roadmap.md)),
documentar aquí:

- Método de autenticación (JWT / sesión / OAuth).
- Hashing de contraseñas (bcrypt / argon2).
- Middleware de protección de rutas y modelo de autorización (RBAC).
- Flujos de registro, login, renovación y recuperación de cuenta.

## Consideraciones de seguridad

Ver [SECURITY.md](../../SECURITY.md) para la política completa y
[`../conventions/secrets.md`](../conventions/secrets.md) para el manejo de credenciales.
