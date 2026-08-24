---
title: MCP System Bridge
subtitle: A cross‑platform MCP server that gives AI models native OS super‑powers
image: /assets/images/projects/mcp-system-bridge.jpeg
url: https://github.com/leynier/mcp-sys-bridge
tags: ["FastMCP", "Pydantic", "Python"]
highlighted: false
order: 5
---

**MCP System Bridge** is an open‑source server that implements the **Model Context Protocol (MCP)** to expose native operating‑system capabilities—like opening URLs or copying text to the clipboard—to AI models in a secure, declarative way. Built entirely in **Python 3.12+** with *FastMCP* and **Pydantic v2**, it runs identically on Windows, macOS, and Linux, making it an ideal automation companion for any developer workstation or server environment.

---

## My Role in the Project

As the project’s creator and sole maintainer I:

* **Designed the full architecture**, choosing FastMCP for protocol compliance and Pydantic for strict data validation.
* **Implemented every core tool** (`open_urls`, `copy_to_clipboard`, and `get_current_date_info`), ensuring fault‑tolerant execution and detailed per‑item reporting.
* **Automated packaging & releases** via GitHub Actions, Hatch, and UV, enabling one‑command publishing to PyPI.
* **Wrote comprehensive tests and Ruff rules** to guarantee code quality and cross‑platform reliability.

---

## Technical Details and Interesting Aspects

### Architecture

| Layer          | Technology                          | Highlights                                                                                   |
| -------------- | ----------------------------------- | -------------------------------------------------------------------------------------------- |
| **Protocol**   | 🧩 **Model Context Protocol (MCP)** | Standardised JSON schema for AI tools; all tools are declared `readOnlyHint=true` for safety |
| **Server**     | 🚀 **FastMCP** (ASGI)               | Ultra‑light wrapper over Starlette, <100 µs median latency                                   |
| **Validation** | ✅ **Pydantic v2**                   | `DateInfo` model with 23 granular date/time fields; strict mode ON                           |
| **Runtime**    | 🐍 **Python 3.12–3.13**             | Uses the new `tomllib`, Pattern Matching, and drowning in 🚀 speed                           |

#### Core Features

* **`open_urls(urls: list[str]) → dict`**
  Auto‑corrects missing schemes (adds `https://`), validates each URL with `urlparse`, opens them with the system default browser, and returns a per‑URL success map.
* **`copy_to_clipboard(text: str)`**
  Cross‑platform clipboard writes via `pyperclip`; atomic operation with descriptive error handling.
* **`get_current_date_info()`**
  Returns a rich `DateInfo` object with ISO strings, Unix timestamp, day♨year metrics, quarter, leap‑year flag, and more—perfect for temporal reasoning.

### Tooling & Dev Experience

* **Hatch + uv** for deterministic dependency management and builds.
* **Makefile** targets for install, lint, and tests (`ruff check --fix` + `pytest`).
* **GitHub CI**: cached uv installs on Ubuntu, automated version bump + PyPI publish when `pyproject.toml` changes.
* **PyPI Metadata**: *Production/Stable* classifier, OS‑independent wheels, both CPython & PyPy.

---

## My Impact on the Project

* Delivered a **single‑binary CLI** (`mcp-sys-bridge`) that anyone can install with `pipx`.
* Enabled **safe OS automation for AI agents**, reducing development friction for tool invocation.
* Fostered community adoption through detailed docs, readable code, and semantic versioning (v0.1.0 → v0.1.4 in two weeks).

---

## Conclusion

**MCP System Bridge** bridges the gap between AI models and the operating system, empowering automation workflows while keeping security front‑and‑center. Its polished developer experience and robust cross‑platform support exemplify my commitment to building reliable, production‑grade developer tools.
