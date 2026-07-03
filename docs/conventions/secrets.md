# Convenciones de secretos y credenciales

> Cómo gestionamos secretos en musicstore-api-node.
> **Última actualización**: 2026-07-02

## Filosofía

- Los secretos **nunca** se commitean en texto plano.
- Separación clara entre **configuración** (no sensible) y **secretos** (sensible).

## Dónde vive cada cosa

| Tipo                         | Dónde                                     |
| ---------------------------- | ----------------------------------------- |
| Secretos de aplicación       | `.env` local (`MONGODB_URI`)              |
| Variables de infraestructura | Variables de entorno del hosting (Render) |
| Secretos de CI/CD            | Secrets del proveedor (GitHub Actions)    |

## Reglas

- El archivo `.env` está en `.gitignore`; solo se versiona `.env.example` (sin valores).
- Comparte secretos con nuevos colaboradores **fuera de banda** (nunca por git, email plano ni chat público).
- Rota credenciales periódicamente (sugerido cada 90 días) y de inmediato ante sospecha de fuga.
- Si un secreto se commitea por error: **rota el secreto primero**, luego limpia la historia.

## Ejemplos

```bash
# Copiar la plantilla de variables
cp .env.example .env
# Completar valores reales (que nunca se suben)
```

## Comandos útiles

```bash
# Verificar que .env NUNCA está versionado (la salida debe estar vacía)
git ls-files | grep -x .env

# Confirmar que .env está ignorado
git check-ignore .env
```

## Referencias

- [SECURITY.md](../../SECURITY.md) — política de seguridad.
- [`.env.example`](../../.env.example) — contrato de variables (sin valores reales).
