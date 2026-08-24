---
title: enum_flag
subtitle: Flags de bits portables y con tipado seguro para enums de Dart, con conjuntos inmutables y máscaras estables
image: /assets/images/projects/enum-flag.webp
url: https://pub.dev/packages/enum_flag
tags: ["Dart", "Bitmasks", "pub.dev"]
highlighted: false
order: 16
---

**enum_flag** proporciona flags de bits portables para enums de Dart mediante extensiones conocidas sobre enteros y una API inmutable y tipada `FlagSet<T>`.

## Estable entre Entornos de Ejecución

El paquete admite posiciones de bits explícitas y estables para valores persistidos, posiciones basadas en el orden de declaración para estado local, operaciones masivas, conservación de bits desconocidos y descripciones legibles. Define una representación uniforme de 32 bits sin signo tanto en Dart VM como en JavaScript.

También implementé conversiones explícitas para almacenamiento con signo en bases de datos o protocolos, validación en todos los modos de compilación y helpers compatibles para enteros, enteros anulables e iterables.

## Resultado

enum_flag ofrece una API con tipado seguro sin sacrificar la interoperabilidad con máscaras de enteros existentes, haciendo que los flags sean más fiables entre aplicaciones, bases de datos y entornos web.
