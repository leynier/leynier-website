---
title: MCP System Bridge
subtitle: Un servidor MCP multiplataforma que otorga a los modelos de IA superpoderes nativos del sistema operativo
image: /assets/images/projects/mcp-system-bridge.jpeg
url: https://github.com/leynier/mcp-sys-bridge
tags: ["FastMCP", "Pydantic", "Python"]
highlighted: false
order: 5
---

**MCP System Bridge** es un servidor de código abierto que implementa el **Protocolo de Contexto del Modelo (MCP)** para exponer capacidades nativas del sistema operativo —como abrir URLs o copiar texto al portapapeles— a modelos de IA de forma segura y declarativa. Construido íntegramente en **Python 3.12+** con *FastMCP* y **Pydantic v2**, se ejecuta de forma idéntica en Windows, macOS y Linux, lo que lo convierte en un compañero de automatización ideal para cualquier estación de trabajo de desarrollador o entorno de servidor.

---

## Mi Rol en el Proyecto

Como creador y único mantenedor del proyecto:

* **Diseñé la arquitectura completa**, eligiendo FastMCP para el cumplimiento del protocolo y Pydantic para la validación estricta de datos.
* **Implementé cada herramienta central** (`open_urls`, `copy_to_clipboard` y `get_current_date_info`), asegurando una ejecución tolerante a fallos e informes detallados por elemento.
* **Automatizé el empaquetado y los lanzamientos** a través de GitHub Actions, Hatch y UV, lo que permite la publicación con un solo comando en PyPI.
* **Escribí pruebas exhaustivas y reglas de Ruff** para garantizar la calidad del código y la fiabilidad multiplataforma.

---

## Detalles Técnicos y Aspectos Interesantes

### Arquitectura

| Capa         | Tecnología                          | Aspectos Destacados                                                                               |
| ------------ | ----------------------------------- | ------------------------------------------------------------------------------------------------- |
| **Protocolo** | 🧩 **Model Context Protocol (MCP)** | Esquema JSON estandarizado para herramientas de IA; todas las herramientas se declaran `readOnlyHint=true` por seguridad |
| **Servidor** | 🚀 **FastMCP** (ASGI)               | Envoltorio ultraligero sobre Starlette, <100 µs de latencia mediana                                |
| **Validación** | ✅ **Pydantic v2**                   | Modelo `DateInfo` con 23 campos granulares de fecha/hora; modo estricto ACTIVADO                    |
| **Tiempo de Ejecución** | 🐍 **Python 3.12–3.13**             | Utiliza el nuevo `tomllib`, Pattern Matching y se ahoga en la velocidad 🚀                       |

#### Características Principales

* **`open_urls(urls: list[str]) → dict`**
  Corrige automáticamente los esquemas faltantes (agrega `https://`), valida cada URL con `urlparse`, las abre con el navegador predeterminado del sistema y devuelve un mapa de éxito por URL.
* **`copy_to_clipboard(text: str)`**
  Escrituras de portapapeles multiplataforma a través de `pyperclip`; operación atómica con manejo de errores descriptivo.
* **`get_current_date_info()`**
  Devuelve un objeto `DateInfo` enriquecido con cadenas ISO, marca de tiempo Unix, métricas de día/año, trimestre, indicador de año bisiesto y más, perfecto para el razonamiento temporal.

### Herramientas y Experiencia de Desarrollador

* **Hatch + uv** para una gestión de dependencias y compilaciones deterministas.
* Objetivos de **Makefile** para instalar, lint y pruebas (`ruff check --fix` + `pytest`).
* **GitHub CI**: instalaciones de uv en caché en Ubuntu, aumento de versión automatizado + publicación en PyPI cuando `pyproject.toml` cambia.
* **Metadatos de PyPI**: Clasificador *Production/Stable*, ruedas independientes del SO, tanto CPython como PyPy.

---

## Mi Impacto en el Proyecto

* Entregué una **CLI de un solo binario** (`mcp-sys-bridge`) que cualquiera puede instalar con `pipx`.
* Habilité la **automatización segura del sistema operativo para agentes de IA**, reduciendo la fricción de desarrollo para la invocación de herramientas.
* Fomenté la adopción por parte de la comunidad a través de documentación detallada, código legible y versionado semántico (v0.1.0 → v0.1.4 en dos semanas).

---

## Conclusión

**MCP System Bridge** cierra la brecha entre los modelos de IA y el sistema operativo, potenciando los flujos de trabajo de automatización mientras mantiene la seguridad en un lugar central. Su experiencia de desarrollador pulida y su sólido soporte multiplataforma ejemplifican mi compromiso con la creación de herramientas de desarrollador fiables y de calidad de producción.
