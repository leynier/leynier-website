---
title: DocuLingo
subtitle: Traducción automatizada palabra por palabra con conservación total del estilo
image: /assets/images/projects/doculingo.png
url: https://github.com/leynier/doculingo
highlighted: false
order: 8
---

**DocuLingo** es un motor de traducción inteligente para documentos que aprovecha los modelos de OpenAI mientras **preserva fielmente cada detalle de estilo**, desde negritas hasta el espaciado de párrafos. Escrito en **Python 3.12+** moderno, combina procesamiento por lotes inteligente, lógica de reintento y un framework de traducción plug-and-play para ofrecer flujos de trabajo de localización listos para producción.

---

## Mi Rol en el Proyecto

Como **creador y único desarrollador** del proyecto, yo:

* **Diseñé la arquitectura modular** (`common`, `word`, `translators`) y el sistema de configuración basado en Pydantic.
* **Implementé el traductor de OpenAI** con procesamiento por lotes, validación JSON y reintentos automáticos.
* **Construí la capa de preservación de estilo** que replica el formato de ejecución y párrafo hasta la sangría y el control de viudas/huérfanas.
* **Configuré los pipelines de CI/CD** con Ruff, fixtures de pytest para documentos de Word y GitHub Actions con caché de uv.

---

## Detalles Técnicos y Aspectos Interesantes

### Arquitectura Principal

| Área                | Tecnología                       | Aspectos Destacados                                                                           |
| ------------------- | -------------------------------- | --------------------------------------------------------------------------------------------- |
| **Configuración**   | Pydantic Settings                | Configuración centralizada del entorno (`OPENAI_API_KEY`)                                     |
| **Traductores**     | Patrón Enum + fábrica            | Actualmente OpenAI; fácilmente extensible a DeepL, Google, etc.                               |
| **Procesamiento de Word** | python-docx                      | Maneja párrafos de una sola ejecución y de varias ejecuciones; preserva las líneas vacías   |
| **Copiador de Estilo** | Utilidades personalizadas        | Copia fuente, negrita, cursiva, subrayado, colores RGB, alineación, espaciado, sangría, saltos de página |
| **Cliente API**     | OpenAI Chat (predeterminado **gpt-4o**) | Segmentación inteligente (≤100 fragmentos), 5 reintentos automáticos, validación JSON       |

### Características Clave

* **Segmentación Inteligente** – divide documentos largos en hasta 100 fragmentos para optimizar el uso de tokens.
* **Lógica de Reintento Robusta** – hasta 5 intentos por lote con retroceso exponencial.
* **Degradación Elegante** – recurre al texto original cuando la traducción no se puede validar.
* **Fusión Segura de Estilos** – las ejecuciones traducidas se reinsertan con el formato original exacto.
* **Framework de Traducción Extensible** – se pueden incorporar nuevos proveedores sin cambios en el código de llamada.

---

## Mi Impacto en el Proyecto

* Entregué una CLI + biblioteca que convierte horas de copiar y pegar manualmente en un flujo de trabajo de **un solo comando**.
* Permitió a los usuarios no técnicos localizar contratos e informes sin perder el formato.
* Mantuve una **alta calidad de código** con linting estricto, pruebas y versionado semántico.

---

## Conclusión

**DocuLingo** demuestra cómo una arquitectura bien pensada y las API modernas de IA pueden automatizar la traducción compleja de documentos, respetando la intención del autor y el estilo. Refleja mi compromiso con la creación de herramientas fáciles de usar para desarrolladores que resuelven cuellos de botella de productividad reales.
