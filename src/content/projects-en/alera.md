---
title: Alera
subtitle: Native, worktree-first development environment for running and coordinating multiple CLI coding agents
image: /assets/images/projects/alera.webp
url: https://alera.build
tags: ["Flutter", "Rust", "Ghostty"]
highlighted: true
order: 3
---

**Alera** is a native agentic development environment for macOS, Windows, and Linux. It runs CLI coding agents in real terminals and isolates their work through Git worktrees, allowing several tasks to progress in parallel without mixing changes.

## What I Built

I designed and developed Alera as a complete environment for agent-assisted software development. It combines persistent terminal sessions, agent activity and quota tracking, source-control and pull-request tooling, file browsing, previews, resource monitoring, orchestration, and AI dictation in one application.

The desktop and mobile interfaces use **Flutter**, while **Rust** owns terminal, process, Git, runtime-host, and native integration responsibilities. Terminal parsing is powered by Ghostty's VTE, and the wider platform includes an Axum and PostgreSQL cloud service, a Cloudflare Worker, and production infrastructure.

## Why It Matters

Alera provides a practical workspace for coordinating multiple autonomous coding sessions while keeping each task isolated, observable, and reviewable. Its architecture bridges a polished cross-platform interface with the native performance required by terminals and developer tooling.
