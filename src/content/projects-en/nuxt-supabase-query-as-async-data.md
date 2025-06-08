---
title: Nuxt Supabase Query As AsyncData
subtitle: Lightweight Nuxt module that extends Supabase queries with .asAsyncData() support
image: /assets/images/projects/nuxt-supabase-query-as-async-data.png
url: https://github.com/leynier/nuxt-supabase-query-as-async-data
highlighted: false
order: 9
---

**Nuxt Supabase Query As AsyncData** is a compact Nuxt 3 module that extends the Supabase client API with a `.asAsyncData()` method, enabling seamless data fetching via Nuxt's native `useAsyncData` system. It supports both function-based and object-based query patterns, providing maximum flexibility for developers using Supabase in their Nuxt apps.

---

## My Role in the Project

As the **sole developer**, I:

* **Designed the entire module**, from type augmentation to runtime plugin architecture.
* **Implemented prototype patching logic** to support both direct query objects and lazy functions.
* **Added full TypeScript definitions** via module augmentation, ensuring proper IntelliSense support in editors.
* **Published and documented** the module for open-source use on GitHub.

---

## Technical Details and Interesting Aspects

### Module Structure

| File                     | Responsibility                                                |
| ------------------------ | ------------------------------------------------------------- |
| `src/module.ts`          | Nuxt module declaration with auto plugin + types registration |
| `src/runtime/plugin.ts`  | Runtime extension of `PostgrestBuilder` and query functions   |
| `src/runtime/types.d.ts` | TypeScript module augmentation for full IntelliSense          |

### Plugin Logic

* Dynamically extends the prototype of Supabase's `PostgrestBuilder`.
* Also extends lazy query functions using `Function.prototype`.
* Supports both:

  * `() => supabase.from('table').select()`
  * `supabase.from('table').select()`
* Integrates with `useAsyncData` under the hood, returning `AsyncData<..., Error>`.

### TypeScript Enhancements

* **Augments `PostgrestBuilder`** from `@supabase/postgrest-js` with `asAsyncData()`.
* Adds support for direct augmentation of query functions.
* Enables editor autocomplete and type-checking with no config.

### Nuxt Integration

* Registered as a Nuxt 3 module with `defineNuxtModule()`.
* Declares compatibility only with full Nuxt 3 (no Bridge support).
* Auto-registers the runtime plugin and type declarations.

### Peer Dependencies

* `@supabase/postgrest-js` ^1.0.0
* `nuxt` ^3.0.0

---

## Conclusion

**Nuxt Supabase Query As AsyncData** is a small but powerful enhancement for Supabase developers using Nuxt 3. It eliminates repetitive boilerplate and bridges Supabase’s query builder with Nuxt’s async data ecosystem in a fully type-safe way. It reflects my attention to developer experience, strong TypeScript discipline, and ability to integrate ecosystem tools cleanly.
