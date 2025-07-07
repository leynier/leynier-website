---
title: Git Fresh
subtitle: A safe, selective cleanup tool for Git repos with stash-first protection and cross-platform support
image: /assets/images/projects/git-fresh.png
url: https://github.com/leynier/git-fresh
tags: ["Commander", "Typescript", "Bun"]
highlighted: false
order: 5
---

**Git Fresh** is a cross-platform CLI tool that safely resets Git repositories to a clean state while selectively preserving environment files and untracked changes. It’s designed with **rollback safety**, **non-destructive principles**, and full support for `.env` file detection, stash-first workflows, and fine-grained cleanup logic.

---

## My Role in the Project

As the **creator and only developer**, I:

* **Designed the full security-first architecture**, prioritizing stash-based recovery and selective deletion.
* **Implemented cross-platform cleanup logic**, supporting path normalization and safe file operations.
* **Built interactive CLI flows** using Inquirer.js and Commander.js.
* **Optimized performance** with parallel glob processing and error-tolerant file deletion.

---

## Technical Details and Interesting Aspects

### File Protection & Options

* `.env` and custom glob patterns are detected and protected by default.
* Offers selective preservation via interactive prompts.
* CLI flags include `--ignoreEnvFiles`, `--ignoreGlobFiles`, `--skipConfirmation`.

### Cleanup Logic

* Uses `rmSync(..., { recursive: true, force: true })` for efficient removal.
* Operates with a non-destructive stance: `.git/` and protected files are never touched.
* Generates unique sets from normalized paths to avoid redundant checks.

### Git Integration

* Automatically stashes all changes before cleanup.
* Commands used:

  * `git stash push -u -m "git-fresh: temporary stash"`
  * `git restore .` and `git stash pop`
  * `git stash list` for rollback support

### User Interaction

* Uses `inquirer` prompts to allow:

  * Full skip, selective, or no preservation of `.env` files.
  * Checkbox selection for granular control.
* Visual progress via `ora` spinners.

### Error Handling

* Gracefully aborts if stash fails.
* Conflicts or restore issues are logged, stash is preserved.
* All file-related warnings are non-blocking.

### Platform Support

* Path normalization supports mixed separators (`/`, `\`).
* `windowsHide: true` avoids flashing terminals on Windows.
* Compatible with macOS, Linux, and Windows environments.

### Development Tooling

* Written in TypeScript, built to CommonJS with Bun.
* CLI framework: Commander.js
* Testing via manual repos + interactive workflows.
* Linting and formatting with Prettier.
* Published to npm with provenance enabled.

---

## Conclusion

**Git Fresh** is a highly practical CLI tool that turns error-prone manual cleaning into a safe, repeatable operation. Its architecture reflects my focus on developer safety, DX-first interfaces, and reliability across all environments.
