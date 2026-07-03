# Convenciones de despliegue

> Operaciones de producción de musicstore-api-node. Fuente de verdad de cómo se
> despliega, se hace rollback y se opera el sistema.
> **Última actualización**: 2026-07-02

## Stack de infraestructura

- **Hosting / cómputo**: [Render](https://render.com) (Web Service Node) — alternativa: Railway.
- **Base de datos**: MongoDB Atlas (cluster gestionado; el free tier M0 basta para empezar).
- **DNS / TLS**: gestionados por Render (certificado automático).
- **CI**: GitHub Actions (`.github/workflows/ci.yml`) — lint + tests antes del deploy.

> Al ser una API sin paso de build, el "despliegue" es simplemente arrancar
> `npm start` con las variables de entorno correctas.

## Ambientes

| Ambiente   | Rama   | Deploy                             |
| ---------- | ------ | ---------------------------------- |
| Desarrollo | local  | `npm run dev` (nodemon)            |
| Producción | `main` | Automático en Render al hacer push |

## Variables de entorno en producción

Configúralas en el panel de Render (nunca en el repositorio). Ver [`secrets.md`](secrets.md).

| Variable      | Descripción                         |
| ------------- | ----------------------------------- |
| `PORT`        | Render la inyecta automáticamente   |
| `MONGODB_URI` | Cadena de conexión de MongoDB Atlas |

## Reglas

- Solo se despliega a producción desde `main`.
- El deploy debe quedar verde en CI (lint + tests) antes de publicarse.
- Los secretos se gestionan según [`secrets.md`](secrets.md), nunca en el código.
- Verificar el health check tras cada deploy.

## Procedimiento de deploy

```bash
# 1. Merge a main (CI en verde)
git checkout main && git merge <rama> && git push origin main

# 2. Render detecta el push y ejecuta:
#    Build command:  npm ci
#    Start command:  npm start

# 3. Verificar health check
curl https://<tu-app>.onrender.com/
# => { "name": "musicstore-api-node", "status": "ok", ... }
```

## Rollback

- Desde el panel de Render: **Deploys → seleccionar un deploy previo → "Redeploy"**.
- O revertir el commit en `main` (`git revert`) y volver a pushear.

## Health checks y monitoreo

- Endpoint de salud: `GET /` — responde `200` con `{ "status": "ok" }`.
- Configura el _Health Check Path_ de Render en `/`.
- Monitoreo de errores: pendiente (candidatos: Sentry, logs de Render).

## Referencias

- [Render — Deploy a Node app](https://render.com/docs/deploy-node-express-app)
- [MongoDB Atlas](https://www.mongodb.com/docs/atlas/)
