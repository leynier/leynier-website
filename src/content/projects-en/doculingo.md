---
title: DocuLingo
subtitle: Automated Word-to-Word translation with full style preservation
image: /assets/images/projects/doculingo.png
url: https://github.com/leynier/doculingo
highlighted: false
order: 8
---

**DocuLingo** is an intelligent translation engine for documents that leverages OpenAI models while **faithfully preserving every style detail**—from bold runs to paragraph spacing. Written in modern **Python 3.12+**, it combines smart batching, retry logic, and a plug‑and‑play translator framework to deliver production‑ready localization workflows.

---

## My Role in the Project

As the project’s **creator and sole developer**, I:

* **Designed the modular architecture** (`common`, `word`, `translators`) and the Pydantic‑based settings system.
* **Implemented the OpenAI translator** with batch processing, JSON validation, and automatic retries.
* **Built the style‑preservation layer** that replicates run and paragraph formatting down to indentation and widow/orphan control.
* **Set up CI/CD pipelines** with Ruff, pytest fixtures for Word docs, and uv‑cached GitHub Actions.

---

## Technical Details and Interesting Aspects

### Core Architecture

| Area                | Technology                       | Highlights                                                                                      |
| ------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------- |
| **Settings**        | Pydantic Settings                | Centralised env configuration (`OPENAI_API_KEY`)                                                |
| **Translators**     | Enum + factory pattern           | Currently OpenAI; easily extendable to DeepL, Google, etc.                                      |
| **Word Processing** | python‑docx                      | Handles single‑run and multi‑run paragraphs; preserves empty lines                              |
| **Style Copier**    | Custom utilities                 | Copies font, bold, italic, underline, RGB colours, alignment, spacing, indentation, page breaks |
| **API Client**      | OpenAI Chat (default **gpt‑4o**) | Smart segmentation (≤100 chunks), 5× auto‑retry, JSON validation                                |

### Key Features

* **Smart Segmentation** – splits long documents into up to 100 chunks to optimise token usage.
* **Robust Retry Logic** – up to 5 attempts per batch with exponential back‑off.
* **Graceful Degradation** – falls back to original text when translation cannot be validated.
* **Style‑Safe Merging** – translated runs are re‑inserted with exact original formatting.
* **Extensible Translator Framework** – drop‑in new providers with zero changes to calling code.

---

## My Impact on the Project

* Delivered a CLI + library that turns hours of manual copy‑paste into a **one‑command** workflow.
* Enabled non‑technical users to localise contracts and reports without losing formatting.
* Maintained **high code quality** with stringent linting, tests, and semantic versioning.

---

## Conclusion

**DocuLingo** demonstrates how thoughtful architecture and modern AI APIs can automate complex document translation while respecting author intent and styling. It reflects my commitment to building developer‑friendly tools that solve real productivity bottlenecks.
