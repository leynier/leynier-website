---
title: clitg
subtitle: Agent-first CLI for safely operating Telegram user accounts
image: /assets/images/projects/clitg.webp
url: https://github.com/leynier/telegram-cli
tags: ["Python", "Telethon", "Typer"]
highlighted: false
order: 14
---

**clitg** gives AI agents and scripts a deterministic JSON and JSONL interface to a Telegram user account through MTProto and Telethon. It supports inbox inspection, search, messaging, exports, contacts, groups, channels, stories, media, Business features, and broader Telegram operations.

## Safety for Real Accounts

Unlike tools built on Bot API tokens, clitg operates a real user account. I designed its mutation controls around dry runs, exact confirmations, short-lived tokens for critical operations, idempotency keys, local policies, secure secret storage, and metadata-only auditing.

The CLI is written in **Python** with Telethon, Typer, and Pydantic. Its machine-readable output and non-interactive authentication make it suitable for agent skills and repeatable automation rather than only interactive terminal use.

## Result

clitg exposes Telegram's broad user API while keeping risky actions explicit and reviewable, providing agents with a structured interface instead of fragile UI automation.
