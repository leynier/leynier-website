---
title: DepaTrack
subtitle: Una aplicación web ligera para registrar y seguir prospectos de alquiler de apartamentos con una arquitectura local-first y soporte offline
image: /assets/images/projects/depatrack.png
url: https://depatrack.leynier.dev
tags: ["Vue.js", "TypeScript", "Pinia", "Firebase"]
highlighted: true
order: 5
---

**DepaTrack** es una aplicación web ligera diseñada para simplificar el proceso de búsqueda de apartamentos, permitiendo a los usuarios registrar, seguir y gestionar prospectos de alquiler de manera eficiente. Su arquitectura *local-first* garantiza que los datos se almacenen directamente en el navegador, ofreciendo una experiencia rápida y privada con total funcionalidad sin conexión a internet. Opcionalmente, los usuarios pueden sincronizar sus datos en la nube al iniciar sesión, asegurando la accesibilidad desde cualquier dispositivo.

Algunas de las características clave de DepaTrack incluyen:

- **Gestión completa de propiedades**: Funcionalidades CRUD (Crear, Leer, Actualizar, Eliminar) para un seguimiento detallado.
- **Búsqueda y filtrado avanzado**: Herramientas para encontrar rápidamente las propiedades que cumplen con criterios específicos.
- **Importación y exportación de datos**: Facilita la migración de información desde y hacia archivos en formato CSV.
- **Diseño adaptable y personalizable**: Interfaz *mobile-first* con temas, claro y oscuro, que se ajustan a las preferencias del sistema.

## Mi Rol en el Proyecto

Como creador y desarrollador principal de **DepaTrack**, estuve a cargo de todas las fases del proyecto, desde la concepción de la idea hasta la implementación y el despliegue de la aplicación. Mis responsabilidades incluyeron:

- **Diseñar la arquitectura completa de la aplicación**, enfocada en la filosofía *local-first* para garantizar una experiencia de usuario fluida y sin interrupciones.
- **Desarrollar tanto el frontend como el backend de la aplicación**, utilizando tecnologías modernas como Vue.js, TypeScript y Pinia para la gestión del estado.
- **Implementar la sincronización de datos con Firebase**, permitiendo a los usuarios guardar su información de forma segura en la nube.
- **Asegurar la calidad del código y la mantenibilidad del proyecto** a través de la modularización y la adopción de buenas prácticas de desarrollo.

## Detalles Técnicos y Aspectos Interesantes

### Frontend

**Tecnologías:**

- **Vue.js (Composition API)** y **TypeScript**: Para un desarrollo moderno, tipado y escalable.
- **Pinia**: Como gestor de estado, permitiendo una gestión de datos reactiva y centralizada.
- **Tailwind CSS** y **shadcn-vue**: Para la creación de una interfaz de usuario limpia, personalizable y completamente adaptable.
- **Vite**: Como herramienta de compilación, asegurando un entorno de desarrollo rápido y eficiente.

**Aspectos Destacados:**

- **Funcionalidad offline**: La aplicación sigue funcionando sin conexión a internet, almacenando los datos localmente.
- **Interfaz intuitiva**: Un diseño centrado en el usuario que facilita el registro y la gestión de propiedades.
- **Componentes reutilizables**: Una base de código modular que promueve la consistencia y la facilidad de mantenimiento.

### Backend y Sincronización

**Tecnologías:**

- **Firebase Authentication**: Para la gestión de usuarios y la autenticación segura.
- **Firestore**: Como base de datos en la nube para la sincronización de la información de los usuarios registrados.

**Aspectos Destacados:**

- **Sincronización en tiempo real**: Los datos se actualizan automáticamente entre dispositivos cuando el usuario está en línea.
- **Privacidad y control**: Los usuarios tienen la opción de mantener sus datos de forma local o sincronizarlos en la nube.

## Conclusión

**DepaTrack** es una herramienta práctica y moderna que soluciona una necesidad real para quienes buscan un nuevo hogar. El proyecto no solo demuestra mi capacidad para desarrollar aplicaciones full-stack desde cero, sino también mi enfoque en crear soluciones centradas en el usuario, con un fuerte énfasis en la calidad del código, la experiencia de uso y la arquitectura escalable. Estoy orgulloso de haber creado una herramienta que no solo es funcional, sino que también respeta la privacidad y ofrece una gran flexibilidad a sus usuarios.