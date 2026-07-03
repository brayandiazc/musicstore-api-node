# Workflows de CI/CD

Esta carpeta contiene los workflows de [GitHub Actions](https://docs.github.com/actions)
del proyecto.

## Workflow activo

- [`ci.yml`](ci.yml) — ejecuta `npm run lint`, `npm run format:check` y `npm test`
  en cada push/PR a `main` y `develop`, sobre Node 18/20/22.

## Workflows recomendados

| Workflow                    | Propósito                                      |
| --------------------------- | ---------------------------------------------- |
| `ci.yml`                    | Lint, tests y build en cada push/PR.           |
| `labeler.yml`               | Auto-etiquetado de PRs (usa `../labeler.yml`). |
| `dependabot-auto-merge.yml` | Auto-merge de PRs de Dependabot (parches).     |
| `deploy.yml`                | Despliegue (depende de tu infraestructura).    |

## Secrets

Define en **Settings → Secrets and variables → Actions** los secretos que
necesiten tus workflows (claves de deploy, tokens, etc.). Ver
[`../../docs/conventions/secrets.md`](../../docs/conventions/secrets.md).
