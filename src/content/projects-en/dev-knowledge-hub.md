---
title: Dev Knowledge Hub
subtitle: Collect, organize, search, and share development resources across the web, Chrome, MCP, and ChatGPT
image: /assets/images/projects/dev-knowledge-hub.webp
url: https://knowledgehub.dev
tags: ["Next.js", "Supabase", "MCP"]
highlighted: false
order: 2
---

**Dev Knowledge Hub** is a platform for collecting, organizing, searching, and sharing technical resources. It provides a multilingual web application, embeddable widgets, and a Chrome extension that captures the active page and prepares an analyzed resource draft.

## A Knowledge Platform for Developers

I built the product with **Next.js**, React, TypeScript, Tailwind CSS, Bun, and **Supabase**. Its data layer uses declarative schemas, migrations, pgTAP tests, row-level security, and organization roles to keep shared knowledge separated and access-controlled.

The platform also exposes authenticated **Model Context Protocol** resources for generic MCP clients and ChatGPT. Its OAuth 2.1 flow uses PKCE, protected-resource metadata, audience binding, and allowlisted clients, allowing AI tools to search an organization's knowledge without weakening its authorization model.

## Result

Dev Knowledge Hub connects browser capture, structured team knowledge, and AI retrieval in one system, reducing the friction between discovering a useful resource and making it available to people and agents later.
