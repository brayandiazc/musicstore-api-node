# musicstore-api-node — Modelo de Negocio

> Marco: **Lean Canvas**. Describe por qué existe el proyecto y cómo genera valor.
> **Última actualización**: 2026-07-02

> ℹ️ **Proyecto educativo / de portafolio.** No es un producto comercial: su
> valor es demostrar el diseño de una API REST con Node.js, Express y MongoDB
> siguiendo el patrón MVC. Este canvas se mantiene con fines didácticos.

## 1. Problema

- Quien aprende backend necesita un ejemplo claro y completo de una API REST con relaciones.
- Faltan ejemplos con validaciones, estructura MVC y documentación de calidad en español.
- **Alternativas actuales**: tutoriales dispersos, repositorios sin documentación.

## 2. Segmentos de cliente

| Segmento            | Descripción                               | Notas              |
| ------------------- | ----------------------------------------- | ------------------ |
| Estudiantes de Node | Aprenden Express + Mongoose               | Público principal  |
| Docentes / mentores | Buscan un caso base para enseñar CRUD/MVC | Reutilizan el repo |

## 3. Propuesta de valor única

- Un ejemplo **completo y documentado** de API REST con relación 1:N, listo para clonar y estudiar.
- **Concepto de alto nivel**: "un proyecto de referencia para aprender APIs con Node.js".

## 4. Solución (el producto)

| Módulo / Capacidad    | Qué resuelve                                  |
| --------------------- | --------------------------------------------- |
| CRUD de Usuarios      | Gestión de propietarios con validaciones      |
| CRUD de Guitarras     | Gestión de catálogo con dueño obligatorio     |
| Relación 1:N          | Muestra referencias y `populate` en Mongoose  |
| Documentación `docs/` | Enseña a documentar arquitectura y decisiones |

## 5. Canales

- GitHub (código abierto), enlazado desde portafolio y material de enseñanza.

## 6. Modelo de ingresos

- No aplica. Proyecto open source bajo licencia MIT.

## 7. Estructura de costos

- Sólo infraestructura opcional de despliegue (hosting Node + MongoDB Attlas free tier).

## 8. Métricas clave

- Stars/forks y claridad de la documentación como señal de utilidad didáctica.

## 9. Ventaja competitiva

- Documentación estructurada (arquitectura, convenciones, ADRs) poco común en repos de ejemplo.

## Decisiones pendientes

- [ ] Añadir autenticación como siguiente hito educativo (ver [`roadmap.md`](roadmap.md)).
