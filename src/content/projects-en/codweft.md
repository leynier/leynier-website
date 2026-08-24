---
title: Codweft
subtitle: GitHub-native AI agents for reviewed and auditable issue and pull-request workflows
image: /assets/images/projects/codweft.webp
url: https://codweft.com
tags: ["Next.js", "Convex", "GitHub Actions"]
highlighted: true
order: 4
---

**Codweft** brings AI coding workflows directly into GitHub. Users can mention `@codweft` on an issue or pull request to request an implementation, review, fix, or conflict resolution without leaving their normal collaboration workflow.

## Architecture and Security

Jobs run through temporary branches and reusable **GitHub Actions** workflows instead of requiring personal access tokens or bot accounts in destination repositories. Workflow identity is bound through GitHub Actions OIDC, and isolated runners receive scoped, short-lived credentials rather than raw provider keys.

I built the application with **Next.js**, React, Bun, Convex, Convex Auth, Octokit, Tailwind CSS, Vitest, and Playwright. The platform correlates every job with its repository, commit, workflow, and attempt so that results remain traceable and temporary branches can be cleaned up safely.

## Result

Codweft turns AI-assisted development into a reviewed and auditable GitHub process. Changes still travel through familiar issues, branches, checks, and pull requests instead of bypassing the controls teams already trust.
