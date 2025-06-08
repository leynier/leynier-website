---
title: BagPlanner
subtitle: Asistente de Viaje con IA para un Empaque Inteligente y Sin Estrés
image: /assets/images/projects/bagplanner.webp
url: https://bagplanner.com
tags: ["Supabase", "Nuxt", "OpenAI"]
highlighted: true
order: 1
---

**BagPlanner** es un asistente de viaje inteligente que diseñamos para revolucionar la forma en que los usuarios preparan sus viajes. Aprovechando la IA, la plataforma genera listas de empaque personalizadas y optimizadas basadas en el destino, las fechas de viaje, las actividades planificadas e incluso los pronósticos meteorológicos en tiempo real. Esto asegura que los usuarios empaquen exactamente lo que necesitan, eliminando el estrés de empacar en exceso u olvidar artículos esenciales, lo que hace que la preparación del viaje sea fluida y eficiente.

La solución, que cofundé con mi socia [Elizabeth de la Paz](https://elijs.dev/), cuenta con un frontend web moderno construido con Nuxt.js (Vue.js) y TypeScript (liderado por [Elizabeth de la Paz](https://elijs.dev/)), un backend robusto impulsado por Supabase (PostgreSQL, Edge Functions con TypeScript/Deno), y servicios de API dedicados desarrollados en Python con FastAPI, de los cuales yo, Leynier Gutiérrez, fui responsable de la arquitectura y el desarrollo principal. Esta combinación garantiza un alto rendimiento, una experiencia de usuario fluida y una arquitectura escalable.

## Nuestro Rol en el Proyecto

Como cofundadores y desarrolladores principales de **BagPlanner**, [Elizabeth de la Paz](https://elijs.dev/) y yo hemos liderado el proyecto desde su concepto inicial hasta su MVP actual, trabajando en estrecha colaboración:

- **[Elizabeth de la Paz](https://elijs.dev/) (elijs.dev)**: Lideró el desarrollo del frontend. Ella fue responsable de crear una experiencia de usuario intuitiva, atractiva y responsiva utilizando Nuxt.js, Vue.js y TypeScript. Su pasión por las tecnologías frontend y por crear plataformas inclusivas fue clave para dar forma a la interfaz con la que interactúan nuestros usuarios.
- **Yo**: Lideré la arquitectura y el desarrollo del backend. Esto incluyó la implementación de la lógica de IA, la configuración y gestión de la infraestructura de Supabase, el desarrollo de los servicios de API en Python/FastAPI, y la integración crucial de los sistemas de pago. Mi enfoque principal fue asegurar la escalabilidad, seguridad y eficiencia del sistema central de **BagPlanner**.

Gestionamos conjuntamente todos los aspectos técnicos y la visión del producto, asegurando una plataforma robusta, escalable y centrada en el usuario.

## Detalles Técnicos y Aspectos Interesantes

### Frontend (Sitio Web) - Liderado por [Elizabeth de la Paz](https://elijs.dev/)

[Elizabeth de la Paz](https://elijs.dev/) se encargó de la mayor parte del desarrollo del frontend, creando una interfaz moderna y eficiente.

**Tecnologías:**

- **Nuxt.js y Vue.js**: Frameworks principales para construir una interfaz de usuario reactiva, moderna y renderizada en el servidor (o generada estáticamente).
- **TypeScript**: Lenguaje principal para el desarrollo frontend, mejorando la calidad del código, la mantenibilidad y la escalabilidad.
- **Pinia**: Para la gestión de estado centralizada y segura en toda la aplicación.
- **Vue-i18n**: Integrado para la internacionalización, con soporte inicial para inglés y español.
- **Tailwind CSS**: Framework CSS de utilidad para un diseño rápido y personalizable.

**Aspectos Destacados:**

- Experiencia de Empaque Impulsada por IA: Los usuarios reciben listas de empaque inteligentes adaptadas a los detalles específicos de su viaje.
- Interfaz Interactiva y Fácil de Usar: Diseñada para la facilidad de uso, desde la entrada de detalles del viaje y la gestión de listas de empaque hasta el manejo de suscripciones y perfiles de usuario, con un fuerte enfoque en UX/UI.
- Diseño Responsivo: Asegura una experiencia consistente y óptima en dispositivos de escritorio, tabletas y móviles.
- Cuentas de Usuario Seguras: Incluye registro de usuarios, inicio de sesión, gestión de perfiles (incluyendo carga de avatares) y acceso a detalles de facturación y suscripción.
- Capacidades en Tiempo Real: Potencial para actualizaciones y notificaciones en tiempo real aprovechando las características de Supabase.
- Enfoque en UX/UI Inclusivo: Un esfuerzo consciente para crear una plataforma accesible y agradable para todos los usuarios.

### Backend e Infraestructura - Liderado por Mí

Estuve a cargo de la arquitectura y el desarrollo de todo el backend y la infraestructura.

**Tecnologías:**

- **Supabase (BaaS)**:
  - **PostgreSQL**: La base de datos relacional principal para almacenar todos los datos de la aplicación (usuarios, viajes, artículos de empaque, planes, créditos, referencias, etc.).
  - **TypeScript/Deno**: Utilizado para desarrollar Supabase Edge Functions, que manejan una lógica backend serverless significativa como la generación de listas de IA y la integración de Stripe.
  - **Supabase Auth**: Proporciona autenticación y autorización seguras para los usuarios.
  - **Supabase Storage**: Utilizado para almacenar archivos cargados por los usuarios, como avatares.
- **Python y FastAPI**: Empleados para crear servicios de API backend dedicados, potencialmente para una lógica de negocio o cálculos más complejos no adecuados para Edge Functions.
- **SQL**: Utilizado para definir el esquema de la base de datos y escribir migraciones.
- **Stripe SDK**: Para una integración robusta y segura del procesamiento de pagos para suscripciones y compras de créditos.

**Aspectos Destacados:**

- Arquitectura Full-Stack Escalable: Una configuración moderna que combina Nuxt.js para el frontend, Supabase para capacidades BaaS completas y FastAPI para servicios backend especializados en Python.
- Lógica Impulsada por IA: Los algoritmos centrales que analizan los datos del viaje y generan sugerencias de empaque personalizadas se implementan principalmente a través de Supabase Edge Functions.
- Modelo de Datos Completo: Una base de datos PostgreSQL bien estructurada, gestionada con esquemas declarativos y migraciones SQL.
- Sistema Seguro de Pagos y Suscripciones: Integración profunda con Stripe para manejar varios escenarios de pago y webhooks.
- Sistema de Créditos Avanzado: Un sistema flexible para adquirir y usar créditos, con un historial de transacciones detallado.
- Programa de Referencia Integrado: Diseñado para incentivar el crecimiento de usuarios, con lógica automatizada para el seguimiento y la distribución de recompensas.
- Computación Serverless Eficiente: Supabase Edge Functions (TypeScript/Deno) se utilizan para tareas críticas del backend.

### DevOps y Herramientas (Gestionado por Mí)

También me encargué de la configuración y gestión de las herramientas de DevOps.

**Tecnologías:**

- **Git y GitHub**: Para control de versiones, desarrollo colaborativo y gestión de repositorios.
- **GitHub Actions**: Implementado para pipelines de CI/CD, automatizando los procesos de prueba, construcción y despliegue.
- **Pre-commit Hooks**: Configurados para aplicar estándares de calidad de código.
- **Python y Typer**: Utilizado para crear una herramienta CLI personalizada para diversas tareas de desarrollo y administración.

**Aspectos Destacados:**

- Ciclo de Vida de Desarrollo Automatizado: Pipelines de CI/CD que optimizan el proceso desde el desarrollo hasta la producción.
- Aseguramiento de la Calidad del Código: Comprobaciones y estándares automatizados.
- CLI Personalizado para una Productividad Mejorada: La herramienta CLI basada en Python simplifica los flujos de trabajo comunes.
- Gestión de Proyectos Estructurada: Un repositorio bien organizado con directrices y prácticas de desarrollo claras.

## Nuestro Impacto en el Proyecto

Como equipo cofundador, nuestro impacto combinado ha sido fundamental para llevar a **BagPlanner** de una idea a un MVP funcional:

**Contribución de [Elizabeth de la Paz](https://elijs.dev/):**

- Lideró y ejecutó el desarrollo completo del frontend, creando una interfaz atractiva, responsiva y fácil de usar con Nuxt.js y TypeScript.
- Diseñó el flujo de usuario y la experiencia general de la plataforma, asegurando que fuera intuitiva y accesible.
- Implementó la gestión de estado del lado del cliente con Pinia y la internacionalización de la aplicación.

**Mi Contribución:**

- Diseñé la arquitectura y desarrollé los sistemas backend y la infraestructura en la nube, la base de datos y las funciones serverless.
- Diseñé e implementé la lógica central de generación de listas de empaque impulsada por IA.
- Integré Stripe para un procesamiento seguro de pagos y manejé webhooks críticos.
- Establecí prácticas de DevOps y creé la herramienta CLI personalizada.

**Logros Conjuntos:**

- Definimos la visión técnica y de producto para el proyecto.
- Diseñamos e implementamos el sistema completo de gestión del ciclo de vida del usuario, incluyendo autenticación, perfiles, planes de suscripción y el sistema de créditos.
- Desarrollamos el sistema de referencia de clientes para fomentar la adquisición orgánica de usuarios.

## Conclusión

**BagPlanner** se destaca como una solución innovadora que mi socia [Elizabeth de la Paz](https://elijs.dev/) y yo hemos construido para simplificar significativamente la tarea a menudo estresante de preparar viajes mediante el uso de IA y tecnologías web modernas. Nuestra colaboración como cofundadores y desarrolladores principales demuestra un fuerte dominio del desarrollo full-stack, la aplicación de IA en un contexto práctico, la utilización de servicios nativos de la nube y la capacidad de llevar un producto complejo y centrado en el usuario de una idea a un Producto Mínimo Viable funcional. El proyecto muestra nuestra experiencia combinada en una pila tecnológica de vanguardia (Nuxt.js, TypeScript, Python, FastAPI, Supabase, Stripe) y un profundo compromiso con la construcción de soluciones de software escalables, de alta calidad y de alto impacto.
