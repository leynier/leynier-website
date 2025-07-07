---
title: GitHub Folder Downloader
subtitle: CLI de alto rendimiento para obtener selectivamente carpetas de repositorios de GitHub con verificaciones de integridad, caché e interfaz de usuario de progreso enriquecida
image: /assets/images/projects/gh-folder-download.png
url: https://github.com/leynier/gh-folder-download
tags: ["Typer", "GH API", "Python"]
highlighted: false
order: 2
---

**GitHub Folder Downloader** es una herramienta avanzada de línea de comandos que permite a los desarrolladores descargar cualquier carpeta (o subconjunto de archivos) de un repositorio de GitHub público o privado, con filtros detallados, almacenamiento en caché automático, validación de integridad robusta y limitación de velocidad inteligente, mientras muestra una elegante barra de progreso impulsada por Rich. Escrito en **Python 3.12+** moderno y construido alrededor de **asyncio** + **aiohttp**, puede saturar su ancho de banda sin exceder los límites de la API de GitHub ni corromper las descargas.

---

## Mi Rol en el Proyecto

Como **creador y único desarrollador** del proyecto, yo:

* **Diseñé e implementé** una arquitectura altamente modular donde cada subsistema (caché, filtros, reintentos, limitador de velocidad, etc.) reside en su propio archivo para mayor claridad y capacidad de prueba.
* **Construí toda la experiencia CLI** con Typer, ofreciendo docenas de banderas, variables de entorno y soporte de configuración YAML.
* **Escribí cada línea de código** para el almacenamiento en caché, las verificaciones de integridad, la limitación de velocidad adaptativa, las descargas paralelas y la interfaz de usuario de progreso de Rich.
* **Mantuve los pipelines de CI/CD** que realizan linting, pruebas, construyen paquetes wheel y publican en PyPI en cada lanzamiento etiquetado.

---

## Detalles Técnicos y Aspectos Interesantes

### Arquitectura Principal

| Módulo                   | Responsabilidad                                                                                             |
| ------------------------ | --------------------------------------------------------------------------------------------------------- |
| `cache.py`               | Caché de disco indexada por JSON (~/.gh-folder-download) con validación de SHA + tamaño y limpieza automática después de 30 días |
| `rate_limiter.py`        | Algoritmo de retardo adaptativo que mantiene el uso de la API por debajo del 60% para un rendimiento máximo |
| `parallel_downloader.py` | Descargas de transmisión `asyncio` + `ThreadPoolExecutor` con concurrencia configurable (1-20)             |
| `filters.py`             | Lista negra binaria de 86 extensiones, patrones glob, límites de tamaño y preajustes útiles como `code-only` o `minimal`. |
| `integrity.py`           | Sumas de verificación MD5/SHA-1/SHA-256, detección binaria, escaneo de bytes nulos y generación de informes exhaustivos |
| `progress.py`            | Progreso enriquecido con velocidad, ETA, % de aciertos de caché y barras por archivo                       |
| `retry.py`               | Retroceso exponencial con fluctuación, máximo 10 intentos, reanudable en caídas de red                   |

### Características Destacadas

* **Caché Inteligente**
  Las nuevas descargas se omiten instantáneamente si el SHA local coincide con el SHA blob de GitHub. Los umbrales de tamaño y antigüedad de la caché se purgan automáticamente.
* **Paralelismo Agresivo — de Forma Segura**
  Hasta 20 transmisiones HTTP concurrentes, mientras se respeta la cuota central de 5.000 solicitudes/hora de la API gracias al limitador de velocidad adaptativo.
* **Filtrado Granular**
  Incluye/excluye por extensión, glob, tamaño, estado binario, Git-ignore, o elige preajustes (`no-tests`, `small-files-only`, …).
* **Integridad Sólida como Roca**
  Cada archivo se verifica con suma de verificación y se escanea en busca de corrupción; los fallos activan reintentos automáticos o fallos suaves según las banderas de la CLI.
* **UX Enriquecida**
  Barras de progreso de varias columnas, velocidad en vivo, ETA, tasa de éxito y registro colorido a través de Rich.

---

## Mi Impacto en el Proyecto

* Entregué una **experiencia de un solo comando** (`gh-folder-download --url …`) que reemplaza los frágiles trucos de `git sparse-checkout`.
* Logré una **tasa de aciertos de caché >95%** en los pipelines de CI, reduciendo los tiempos de trabajo posteriores en minutos.
* Documenté cada opción de configuración y variable de entorno, lo que permite una integración sencilla en entornos Docker y CI.

---

## Conclusión

Al combinar una arquitectura modular, paralelismo agresivo pero seguro y una CLI pulida, **GitHub Folder Downloader** convierte lo que solía ser una tarea tediosa y propensa a errores en una línea de comando rápida y fiable. El proyecto muestra mi capacidad para diseñar herramientas centradas en el desarrollador que equilibran el rendimiento, la robustez y una experiencia de usuario agradable.
