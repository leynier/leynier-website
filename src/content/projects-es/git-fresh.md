---
title: Git Fresh
subtitle: Una herramienta de limpieza segura y selectiva para repositorios Git con protección "stash-first" y soporte multiplataforma
image: /assets/images/projects/git-fresh.png
url: https://github.com/leynier/git-fresh
tags: ["Commander", "Typescript", "Bun"]
highlighted: false
order: 5
---

**Git Fresh** es una herramienta CLI multiplataforma que restablece de forma segura los repositorios Git a un estado limpio, preservando selectivamente los archivos de entorno y los cambios no rastreados. Está diseñada con **seguridad de reversión**, **principios no destructivos** y soporte completo para la detección de archivos `.env`, flujos de trabajo "stash-first" y lógica de limpieza detallada.

---

## Mi Rol en el Proyecto

Como **creador y único desarrollador**, yo:

* **Diseñé la arquitectura completa centrada en la seguridad**, priorizando la recuperación basada en stash y la eliminación selectiva.
* **Implementé la lógica de limpieza multiplataforma**, soportando la normalización de rutas y operaciones seguras de archivos.
* **Construí flujos interactivos de CLI** usando Inquirer.js y Commander.js.
* **Optimicé el rendimiento** con procesamiento glob paralelo y eliminación de archivos tolerante a errores.

---

## Detalles Técnicos y Aspectos Interesantes

### Protección de Archivos y Opciones

* Los archivos `.env` y los patrones glob personalizados se detectan y protegen por defecto.
* Ofrece preservación selectiva a través de avisos interactivos.
* Las banderas de CLI incluyen `--ignoreEnvFiles`, `--ignoreGlobFiles`, `--skipConfirmation`.

### Lógica de Limpieza

* Utiliza `rmSync(..., { recursive: true, force: true })` para una eliminación eficiente.
* Opera con una postura no destructiva: `.git/` y los archivos protegidos nunca se tocan.
* Genera conjuntos únicos a partir de rutas normalizadas para evitar comprobaciones redundantes.

### Integración con Git

* Almacena automáticamente todos los cambios antes de la limpieza.
* Comandos utilizados:

  * `git stash push -u -m "git-fresh: temporary stash"`
  * `git restore .` y `git stash pop`
  * `git stash list` para soporte de reversión

### Interacción con el Usuario

* Utiliza avisos `inquirer` para permitir:

  * Omisión completa, selectiva o ninguna preservación de archivos `.env`.
  * Selección de casillas de verificación para un control granular.
* Progreso visual a través de "spinners" de `ora`.

### Manejo de Errores

* Aborta elegantemente si el stash falla.
* Los conflictos o problemas de restauración se registran, el stash se conserva.
* Todas las advertencias relacionadas con archivos no son bloqueantes.

### Compatibilidad con Plataformas

* La normalización de rutas soporta separadores mixtos (`/`, `\`).
* `windowsHide: true` evita que las terminales parpadeen en Windows.
* Compatible con entornos macOS, Linux y Windows.

### Herramientas de Desarrollo

* Escrito en TypeScript, construido a CommonJS con Bun.
* Framework CLI: Commander.js
* Pruebas a través de repositorios manuales + flujos de trabajo interactivos.
* Linting y formato con Prettier.
* Publicado en npm con "provenance" habilitada.

---

## Conclusión

**Git Fresh** es una herramienta CLI altamente práctica que convierte la limpieza manual, propensa a errores, en una operación segura y repetible. Su arquitectura refleja mi enfoque en la seguridad del desarrollador, las interfaces DX-first y la fiabilidad en todos los entornos.
