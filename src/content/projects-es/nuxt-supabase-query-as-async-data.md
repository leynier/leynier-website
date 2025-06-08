---
title: Nuxt Supabase Query As AsyncData
subtitle: Módulo Nuxt ligero que extiende las consultas de Supabase con soporte .asAsyncData()
image: /assets/images/projects/nuxt-supabase-query-as-async-data.png
url: https://github.com/leynier/nuxt-supabase-query-as-async-data
highlighted: false
order: 9
---

**Nuxt Supabase Query As AsyncData** es un módulo compacto de Nuxt 3 que extiende la API del cliente de Supabase con un método `.asAsyncData()`, permitiendo una obtención de datos fluida a través del sistema nativo `useAsyncData` de Nuxt. Soporta patrones de consulta basados en funciones y objetos, proporcionando la máxima flexibilidad para los desarrolladores que utilizan Supabase en sus aplicaciones Nuxt.

---

## Mi Rol en el Proyecto

Como el **único desarrollador**, yo:

* **Diseñé el módulo completo**, desde la ampliación de tipos hasta la arquitectura del complemento en tiempo de ejecución.
* **Implementé la lógica de parcheo de prototipos** para soportar tanto objetos de consulta directos como funciones "lazy".
* **Agregué definiciones completas de TypeScript** a través de la ampliación de módulos, asegurando un soporte IntelliSense adecuado en los editores.
* **Publiqué y documenté** el módulo para uso de código abierto en GitHub.

---

## Detalles Técnicos y Aspectos Interesantes

### Estructura del Módulo

| Archivo                     | Responsabilidad                                               |
| ------------------------ | ------------------------------------------------------------- |
| `src/module.ts`          | Declaración del módulo Nuxt con registro automático de complemento + tipos |
| `src/runtime/plugin.ts`  | Extensión en tiempo de ejecución de `PostgrestBuilder` y funciones de consulta |
| `src/runtime/types.d.ts` | Ampliación del módulo TypeScript para IntelliSense completo          |

### Lógica del Complemento

* Extiende dinámicamente el prototipo de `PostgrestBuilder` de Supabase.
* También extiende funciones de consulta "lazy" usando `Function.prototype`.
* Soporta ambos:

  * `() => supabase.from('table').select()`
  * `supabase.from('table').select()`
* Se integra con `useAsyncData` internamente, devolviendo `AsyncData<..., Error>`.

### Mejoras de TypeScript

* **Aumenta `PostgrestBuilder`** de `@supabase/postgrest-js` con `asAsyncData()`.
* Agrega soporte para la ampliación directa de funciones de consulta.
* Habilita el autocompletado del editor y la verificación de tipos sin configuración.

### Integración con Nuxt

* Registrado como un módulo de Nuxt 3 con `defineNuxtModule()`.
* Declara compatibilidad solo con Nuxt 3 completo (sin soporte para Bridge).
* Registra automáticamente el complemento en tiempo de ejecución y las declaraciones de tipo.

### Dependencias de Pares

* `@supabase/postgrest-js` ^1.0.0
* `nuxt` ^3.0.0

---

## Conclusión

**Nuxt Supabase Query As AsyncData** es una mejora pequeña pero potente para los desarrolladores de Supabase que utilizan Nuxt 3. Elimina el código repetitivo y conecta el constructor de consultas de Supabase con el ecosistema de datos asíncronos de Nuxt de una manera completamente segura para los tipos. Refleja mi atención a la experiencia del desarrollador, una fuerte disciplina de TypeScript y la capacidad de integrar herramientas del ecosistema de manera limpia.
