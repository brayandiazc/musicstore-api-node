# Convenciones de autenticación y autorización

> Reglas transversales de autenticación y autorización en musicstore-api-node.
> Para cómo funciona la auth en este proyecto ver
> [`../architecture/auth.md`](../architecture/auth.md).
> **Última actualización**: 2026-07-02

> ℹ️ **Aún no implementado.** Este documento define los estándares a seguir
> **cuando** se añada autenticación (hito v2.0 del [roadmap](../product/roadmap.md)).
> Hoy la API no autentica.

## Stack (previsto)

- **Autenticación**: JWT (candidato: `jsonwebtoken`).
- **Autorización**: middleware por propietario del recurso; RBAC si crecen los roles.
- **Hashing de contraseñas**: bcrypt o argon2.

## Reglas

- La autorización se valida **siempre en el servidor**, en cada request.
- Nunca confiar en checks de cliente para decisiones de seguridad.
- Las contraseñas se almacenan hasheadas con un algoritmo robusto y salt.
- Los tokens/sesiones se rotan en cada login y tienen expiración.
- Los flujos OAuth/SSO se validan server-side (email y UID).

## Modelo

- **Usuario**: [campos clave de identidad].
- **Sesión / token**: [cómo se representa].
- **Roles / permisos**: [esquema RBAC/ABAC].

## Ejemplos

```text
# Pseudocódigo de verificación de autorización
if not current_user.can?(:accion, recurso)
  rechazar(403)
```

## Referencias

- [`../architecture/auth.md`](../architecture/auth.md)
- [SECURITY.md](../../SECURITY.md)
