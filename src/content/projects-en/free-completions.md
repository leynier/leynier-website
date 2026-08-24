---
title: Free Completions
subtitle: One OpenAI-compatible gateway for quotas and credits across multiple AI providers
image: /assets/images/projects/free-completions.webp
url: https://freecompletions.com
tags: ["FastAPI", "Next.js", "Redis"]
highlighted: true
order: 6
---

**Free Completions** is an OpenAI-compatible API gateway that routes requests across configured models from providers such as Groq, Cerebras, Google AI Studio, OpenRouter, Cloudflare Workers AI, and Vercel AI Gateway.

## Intelligent Routing

Rather than using simple round-robin selection, the gateway evaluates prompt context, requested capabilities, provider limits, current usage, and recent failures. This makes it possible to combine available quotas and credits while preserving the API contract expected by OpenAI-compatible clients.

I built the API with **FastAPI**, Pydantic, Redis, and the OpenAI SDK. A **Next.js** dashboard adds GitHub sign-in, bring-your-own-provider credentials, gateway API keys, usage records, and Stripe subscription controls. Hosted deployments use tenant-aware authentication and encrypted provider credentials.

## Result

The project provides one stable endpoint over a changing catalog of providers and models, with fault handling and quota awareness centralized in the gateway rather than repeated in every client.
