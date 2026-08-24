---
title: Free Completions
subtitle: Un gateway compatible con OpenAI para cuotas y créditos de múltiples proveedores de IA
image: /assets/images/projects/free-completions.webp
url: https://freecompletions.com
tags: ["FastAPI", "Next.js", "Redis"]
highlighted: true
order: 6
---

**Free Completions** es un gateway compatible con la API de OpenAI que distribuye solicitudes entre modelos configurados de proveedores como Groq, Cerebras, Google AI Studio, OpenRouter, Cloudflare Workers AI y Vercel AI Gateway.

## Enrutamiento Inteligente

En lugar de utilizar un simple turno rotativo, el gateway evalúa el contexto del prompt, las capacidades solicitadas, los límites del proveedor, el uso actual y los fallos recientes. Esto permite combinar cuotas y créditos manteniendo el contrato esperado por los clientes compatibles con OpenAI.

Construí la API con **FastAPI**, Pydantic, Redis y el SDK de OpenAI. Un panel en **Next.js** añade inicio de sesión mediante GitHub, credenciales propias de proveedores, claves del gateway, registros de uso y controles de suscripción con Stripe. Los despliegues alojados utilizan autenticación por tenant y credenciales cifradas.

## Resultado

El proyecto ofrece un único endpoint estable sobre un catálogo cambiante de proveedores y modelos, centralizando la tolerancia a fallos y la gestión de cuotas en lugar de repetirlas en cada cliente.
