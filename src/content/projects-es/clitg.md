---
title: clitg
subtitle: CLI orientada a agentes para operar cuentas de usuario de Telegram de forma segura
image: /assets/images/projects/clitg.webp
url: https://github.com/leynier/telegram-cli
tags: ["Python", "Telethon", "Typer"]
highlighted: false
order: 14
---

**clitg** ofrece a agentes de IA y scripts una interfaz determinista JSON y JSONL para operar una cuenta de usuario de Telegram mediante MTProto y Telethon. Permite inspeccionar bandejas de entrada, buscar, enviar mensajes, exportar conversaciones y trabajar con contactos, grupos, canales, historias, multimedia y funciones Business.

## Seguridad para Cuentas Reales

A diferencia de las herramientas basadas en tokens de la Bot API, clitg opera una cuenta de usuario real. Diseñé sus controles de mutación alrededor de simulaciones, confirmaciones exactas, tokens temporales para operaciones críticas, claves de idempotencia, políticas locales, almacenamiento seguro de secretos y auditoría basada únicamente en metadatos.

La CLI está escrita en **Python** con Telethon, Typer y Pydantic. Su salida legible por máquinas y autenticación no interactiva la hacen adecuada para skills de agentes y automatizaciones repetibles, no solo para uso interactivo.

## Resultado

clitg expone la amplia API de usuario de Telegram manteniendo las acciones de riesgo explícitas y revisables, ofreciendo a los agentes una interfaz estructurada en lugar de automatización frágil de la interfaz gráfica.
