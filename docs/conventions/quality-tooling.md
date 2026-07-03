# Convenciones de calidad y tooling

> Linters, formato, análisis estático y git hooks de musicstore-api-node.
> **Última actualización**: 2026-07-02

## Stack

- **Linter**: ESLint (flat config en `eslint.config.js`, sobre `@eslint/js` recommended).
- **Formateador**: Prettier (`.prettierrc.json`); `eslint-config-prettier` evita conflictos de reglas.
- **Auditoría de dependencias**: `npm audit`.
- **Orquestador de git hooks**: no configurado aún (candidato: Husky + lint-staged).

## Git hooks

Estrategia sugerida: hooks baratos y rápidos en `pre-commit`, los más costosos en
`pre-push`. CI ejecuta todo de nuevo en el servidor.

### pre-commit (en cada commit)

- `npm run lint` sobre los archivos cambiados.
- `npm run format` (o `format:check`).

### pre-push (al subir)

- `npm run lint` completo.
- `npm test`.
- `npm audit`.

> Mientras no haya orquestador de hooks, estos checks los ejecuta CI
> (`.github/workflows/ci.yml`) en cada push/PR.

## Reglas

- El código debe pasar linter y formato antes del merge.
- Los checks de calidad son **bloqueantes** en CI.

## Comandos útiles

```bash
npm run lint          # Reporta problemas de ESLint
npm run lint:fix      # Corrige lo autocorregible
npm run format        # Formatea con Prettier (escribe)
npm run format:check  # Verifica formato sin escribir (usado en CI)
npm audit             # Auditoría de dependencias
```

## Referencias

- [ESLint](https://eslint.org/docs/latest/) · [Prettier](https://prettier.io/docs/en/)
