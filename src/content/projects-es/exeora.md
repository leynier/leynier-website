---
title: Exeora
subtitle: Ejecución remota segura para agentes de IA en tus propias máquinas
image: /assets/images/projects/exeora.webp
url: https://exeora.dev
tags: ["Rust", "TypeScript", "Cloudflare"]
highlighted: true
order: 5
---

**Exeora** conecta clientes de IA compatibles con MCP con proyectos ubicados en una computadora local, servidor, máquina virtual o equipo de compilación. Su CLI nativa abre una conexión WebSocket saliente hacia un gateway alojado en Cloudflare, sin requerir puertos entrantes y manteniendo el código en la máquina original.

## Seguridad desde el Diseño

Diseñé Exeora alrededor de accesos limitados por proyecto y credenciales OAuth. Los agentes reciben herramientas controladas para archivos, búsquedas, edición y comandos, con aislamiento de rutas, políticas configurables, aprobaciones opcionales, revocación y auditoría basada únicamente en metadatos.

La capa nativa está escrita en **Rust**, mientras que el plano de control y las aplicaciones web utilizan TypeScript, Bun, Cloudflare Workers y contratos de protocolo generados. La autorización limitada y temporal permite la ejecución remota sin exponer una credencial general de la máquina.

## Resultado

Exeora permite usar clientes de IA en la nube con máquinas que no pueden o no deben exponer servicios entrantes. El código permanece local y el agente recibe únicamente las capacidades concedidas al proyecto.
