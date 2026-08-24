---
title: Exeora
subtitle: Secure remote execution for AI agents on your own machines
image: /assets/images/projects/exeora.webp
url: https://exeora.dev
tags: ["Rust", "TypeScript", "Cloudflare"]
highlighted: true
order: 5
---

**Exeora** connects MCP-compatible AI clients to projects running on a local computer, server, virtual machine, or build host. Its native CLI creates an outbound WebSocket connection to a Cloudflare-hosted gateway, avoiding inbound ports and keeping source files on their original machine.

## Secure by Design

I designed Exeora around project-scoped access and OAuth credentials. Agents receive controlled file, search, editing, and command tools with path isolation, configurable policy modes, optional approvals, revocation, and metadata-only audit records.

The native execution layer is written in **Rust**, while the control plane and web applications use TypeScript, Bun, Cloudflare Workers, and generated protocol contracts. Scoped and short-lived authorization keeps remote execution useful without exposing a general-purpose machine credential.

## Result

Exeora allows developers to use cloud-based AI clients with machines that cannot or should not expose inbound services. The source remains local while the agent receives only the capabilities explicitly granted to a project.
