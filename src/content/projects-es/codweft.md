---
title: Codweft
subtitle: Agentes de IA integrados con GitHub para flujos revisables y auditables en issues y pull requests
image: /assets/images/projects/codweft.webp
url: https://codweft.com
tags: ["Next.js", "Convex", "GitHub Actions"]
highlighted: true
order: 4
---

**Codweft** lleva los flujos de programación con IA directamente a GitHub. Los usuarios pueden mencionar `@codweft` en un issue o pull request para solicitar una implementación, revisión, corrección o resolución de conflictos sin abandonar su flujo habitual de colaboración.

## Arquitectura y Seguridad

Los trabajos se ejecutan mediante ramas temporales y workflows reutilizables de **GitHub Actions**, sin exigir tokens de acceso personal ni cuentas bot en los repositorios de destino. La identidad se vincula mediante OIDC y los runners aislados reciben credenciales limitadas y de corta duración en lugar de claves sin procesar.

Construí la aplicación con **Next.js**, React, Bun, Convex, Convex Auth, Octokit, Tailwind CSS, Vitest y Playwright. La plataforma correlaciona cada trabajo con su repositorio, commit, workflow e intento para mantener los resultados trazables y limpiar las ramas temporales de forma segura.

## Resultado

Codweft convierte el desarrollo asistido por IA en un proceso revisable y auditable dentro de GitHub. Los cambios siguen pasando por issues, ramas, verificaciones y pull requests en lugar de eludir los controles que los equipos ya utilizan.
