---
title: Nuxt useAsyncData Wrapper
subtitle: Type-safe utility to convert service functions into reactive AsyncData bindings in Nuxt
image: /assets/images/projects/nuxt-use-async-data-wrapper.png
url: https://github.com/leynier/nuxt-use-async-data-wrapper
tags: ["Nuxt", "Typescript", "PNPM"]
highlighted: false
order: 10
---

**Nuxt useAsyncData Wrapper** is a developer utility that transforms service-like objects with async functions into reactive, type-safe `useAsyncData` wrappers for use in Nuxt 3. Designed with advanced TypeScript logic, it provides automatic cache key generation, reactivity tracking, and function signature detection—all without any manual boilerplate.

---

## My Role in the Project

As the **sole developer**, I:

* **Wrote the complete wrapper logic**, including deep introspection of methods and prototype chains.
* **Implemented full type inference** using conditional and mapped types for accurate return types and options.
* **Created unique cache key algorithms** that support reactive argument inputs.
* **Published and documented** the module for open-source use.

---

## Technical Details and Interesting Aspects

### TypeScript Logic

* Uses **conditional mapped types** to generate accurate return signatures for functions with or without arguments.
* Supports `AsyncDataOptions` directly and handles `() => args` patterns reactively.

### Wrapper Function Design

* Binds method context to original object.
* Detects whether function requires arguments or not.
* Uses `computed()` for tracking arguments.
* Automatically watches and recomputes data if arguments change.

### Cache Key Strategy

* Generates stable, unique keys using:

  ```ts
  `${functionName}-${JSON.stringify(args)}`
  ```

* Ensures correct re-fetching behavior when inputs change.

### Reactivity System

* Wraps argument suppliers in `computed()`.
* Uses Nuxt’s native `useAsyncData()`.
* Full support for functions inherited through prototype chains.

---

## Conclusion

**Nuxt useAsyncData Wrapper** showcases how deep TypeScript tooling can be leveraged to eliminate repetitive code and enhance DX in Nuxt 3 apps. With full type safety and reactive argument support, it’s an elegant bridge between composables and traditional service logic.
