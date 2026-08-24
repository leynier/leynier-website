---
title: Alera
subtitle: Entorno de desarrollo nativo basado en worktrees para ejecutar y coordinar múltiples agentes de programación por CLI
image: /assets/images/projects/alera.webp
url: https://alera.build
tags: ["Flutter", "Rust", "Ghostty"]
highlighted: true
order: 3
---

**Alera** es un entorno de desarrollo agéntico nativo para macOS, Windows y Linux. Ejecuta agentes de programación por CLI en terminales reales y aísla su trabajo mediante worktrees de Git, permitiendo que varias tareas avancen en paralelo sin mezclar cambios.

## Lo que Construí

Diseñé y desarrollé Alera como un entorno completo para el desarrollo de software asistido por agentes. Combina sesiones de terminal persistentes, seguimiento de actividad y cuotas, herramientas de control de versiones y pull requests, exploración de archivos, previsualizaciones, monitoreo de recursos, orquestación y dictado con IA.

Las interfaces de escritorio y móvil utilizan **Flutter**, mientras que **Rust** gestiona terminales, procesos, Git, el runtime host y las integraciones nativas. El terminal usa el VTE de Ghostty, y la plataforma incluye además un servicio cloud con Axum y PostgreSQL, un Cloudflare Worker e infraestructura de producción.

## Por qué es Importante

Alera ofrece un espacio práctico para coordinar múltiples sesiones autónomas manteniendo cada tarea aislada, observable y revisable. Su arquitectura combina una interfaz multiplataforma cuidada con el rendimiento nativo que requieren los terminales y las herramientas de desarrollo.
