---
title: GitHub Folder Downloader
subtitle: High-performance CLI to selectively fetch GitHub repo folders with integrity checks, caching, and rich progress UI
image: /assets/images/projects/gh-folder-download.png
url: https://github.com/leynier/gh-folder-download
tags: ["Typer", "GH API", "Python"]
highlighted: false
order: 7
---

**GitHub Folder Downloader** is an advanced command-line tool that lets developers download any folder (or file subset) from a public or private GitHub repository—with fine-grained filters, automatic caching, robust integrity validation, and smart rate-limiting—while displaying a sleek Rich-powered progress bar. Written in modern **Python 3.12+** and built around **asyncio** + **aiohttp**, it can saturate your bandwidth without ever tripping GitHub’s API limits or corrupting downloads.

---

## My Role in the Project

As the project's **creator and sole developer**, I:

* **Designed and implemented** a highly modular architecture where each subsystem (cache, filters, retries, rate limiter, etc.) lives in its own file for clarity and testability.
* **Built the entire CLI experience** with Typer, offering dozens of flags, environment variables, and YAML config support.
* **Authored every line of code** for caching, integrity checks, adaptive rate‑limiting, parallel downloads, and the Rich progress UI.
* **Maintained CI/CD pipelines** that lint, test, build wheels, and publish to PyPI on every tagged release.

---

## Technical Details and Interesting Aspects

### Core Architecture

| Module                   | Responsibility                                                                                             |
| ------------------------ | ---------------------------------------------------------------------------------------------------------- |
| `cache.py`               | JSON‑indexed disk cache (\~/.gh-folder-download) with SHA + size validation and auto‑cleanup after 30 days |
| `rate_limiter.py`        | Adaptive delay algorithm that keeps API usage under 60 % for maximal throughput                            |
| `parallel_downloader.py` | `asyncio` + `ThreadPoolExecutor` streaming downloads with configurable concurrency (1‑20)                  |
| `filters.py`             | 86‑extension binary blacklist, glob patterns, size limits, and handy presets like `code-only` or `minimal` |
| `integrity.py`           | MD5/SHA‑1/SHA‑256 checksums, binary detection, null‑byte scan, and exhaustive report generation            |
| `progress.py`            | Rich progress with speed, ETA, cache‑hit %, and per‑file bars                                              |
| `retry.py`               | Exponential back‑off with jitter, max 10 attempts, resumable on network drops                              |

### Highlight Features

* **Smart Caching**
  Re‑downloads are skipped instantly if the local SHA matches GitHub’s blob SHA. Cache size and age thresholds are auto‑pruned.
* **Aggressive Parallelism—Safely**
  Up to 20 concurrent HTTP streams while still honouring the API’s 5 000 req/h core quota thanks to the adaptive rate limiter.
* **Granular Filtering**
  Include/exclude by extension, glob, size, binary status, Git‑ignore, or choose presets (`no-tests`, `small-files-only`, …).
* **Rock‑Solid Integrity**
  Every file is checksum‑verified and scanned for corruption; failures trigger automatic re‑try or soft‑fail based on CLI flags.
* **Rich UX**
  Multicolumn progress bars, live speed, ETA, success rate, and colourful logging via Rich.

---

## My Impact on the Project

* Delivered a **single‑command experience** (`gh-folder-download --url …`) that replaces brittle `git sparse‑checkout` hacks.
* Achieved **>95 % cache hit rate** on CI pipelines, cutting subsequent job times by minutes.
* Documented every config option and environment variable, enabling painless integration in Docker and CI environments.

---

## Conclusion

By combining modular architecture, aggressive yet safe parallelism, and a polished CLI, **GitHub Folder Downloader** turns what used to be a tedious, error‑prone task into a fast and reliable one‑liner. The project showcases my ability to design developer‑centric tools that balance performance, robustness, and delightful user experience.
