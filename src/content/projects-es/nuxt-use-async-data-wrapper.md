---
title: Nuxt useAsyncData Wrapper
subtitle: Utilidad tipada para convertir funciones de servicio en enlaces reactivos AsyncData en Nuxt
image: /assets/images/projects/nuxt-use-async-data-wrapper.png
url: https://github.com/leynier/nuxt-use-async-data-wrapper
tags: ["Nuxt", "Typescript", "PNPM"]
highlighted: false
order: 4
---

**Nuxt useAsyncData Wrapper** es una utilidad para desarrolladores que transforma objetos tipo servicio con funciones asíncronas en envoltorios `useAsyncData` reactivos y seguros para tipos, para usar en Nuxt 3. Diseñado con lógica avanzada de TypeScript, proporciona generación automática de claves de caché, seguimiento de reactividad y detección de firmas de funciones, todo sin necesidad de código repetitivo manual.

---

## Mi Rol en el Proyecto

Como el **único desarrollador**, yo:

* **Escribí la lógica completa del envoltorio**, incluyendo la introspección profunda de métodos y cadenas de prototipos.
* **Implementé la inferencia completa de tipos** usando tipos condicionales y mapeados para obtener tipos de retorno y opciones precisas.
* **Creé algoritmos únicos de clave de caché** que soportan entradas de argumentos reactivos.
* **Publiqué y documenté** el módulo para uso de código abierto.

---

## Detalles Técnicos y Aspectos Interesantes

### Lógica de TypeScript

* Utiliza **tipos mapeados condicionales** para generar firmas de retorno precisas para funciones con o sin argumentos.
* Soporta `AsyncDataOptions` directamente y maneja patrones `() => args` de forma reactiva.

### Diseño de la Función de Envoltorio

* Vincula el contexto del método al objeto original.
* Detecta si la función requiere argumentos o no.
* Utiliza `computed()` para rastrear argumentos.
* Observa y recalcula automáticamente los datos si los argumentos cambian.

### Estrategia de Clave de Caché

* Genera claves estables y únicas usando:

  ```ts
  `${functionName}-${JSON.stringify(args)}`
  ```

* Garantiza un comportamiento de nueva obtención correcto cuando las entradas cambian.

### Sistema de Reactividad

* Envuelve los proveedores de argumentos en `computed()`.
* Utiliza el `useAsyncData()` nativo de Nuxt.
* Soporte completo para funciones heredadas a través de cadenas de prototipos.

---

## Conclusión

**Nuxt useAsyncData Wrapper** demuestra cómo se pueden aprovechar las herramientas profundas de TypeScript para eliminar el código repetitivo y mejorar la experiencia del desarrollador en las aplicaciones de Nuxt 3. Con seguridad de tipo completa y soporte de argumentos reactivos, es un puente elegante entre los "composables" y la lógica de servicio tradicional.
