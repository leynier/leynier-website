---
title: enum_flag
subtitle: Portable, type-safe enum bit flags for Dart with immutable flag sets and stable masks
image: /assets/images/projects/enum-flag.webp
url: https://pub.dev/packages/enum_flag
tags: ["Dart", "Bitmasks", "pub.dev"]
highlighted: false
order: 16
---

**enum_flag** provides portable enum bit flags for Dart through familiar integer extensions and an immutable, typed `FlagSet<T>` API.

## Stable Across Runtimes

The package supports explicit stable bit positions for persisted values, declaration-index positions for local state, bulk set operations, unknown-bit preservation, and readable flag descriptions. It defines a consistent unsigned 32-bit representation across the Dart VM and JavaScript.

I also implemented explicit conversions for signed 32-bit database or protocol storage, validation in every build mode, and backwards-compatible helpers for integers, nullable integers, and iterables.

## Result

enum_flag provides a type-safe API without sacrificing interoperability with existing integer masks, making flags easier to use reliably across applications, databases, and web runtimes.
