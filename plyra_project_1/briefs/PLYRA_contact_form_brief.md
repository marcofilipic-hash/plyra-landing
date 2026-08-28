# PLYRA — Contact Form Brief

Goal: replace the current simple contact form with a qualification flow. Single job — figure out if the client is a fit and extract as much project info as possible before the first call.

10 steps, grouped in 3 blocks:

## 1. Filtro y calificación
1. Tipo de proyecto (cocina nueva, reforma, bar/restaurante, otro espacio)
2. Dónde está el espacio (Barcelona, alrededores, otra ciudad)
3. Estado actual (obra nueva, reforma en marcha, planificando)
4. Plazo estimado
5. Presupuesto orientativo

## 2. Información del proyecto
6. Medidas aproximadas del espacio
7. Estilo que les inspira (con imágenes de referencia si pueden subir)
8. Qué es lo más importante para ellos (materiales, color, funcionalidad, precio)
9. Pregunta abierta — "contanos tu proyecto"

## 3. Contacto
10. Nombre, mail, teléfono o Instagram

## Open question for the build
Long single-page form vs. wizard flow (one question per screen + progress bar) — decide before implementation, changes the build significantly.

## Context
To be integrated into the PLYRA landing page (single-file HTML/CSS/JS, currently deployed via Vercel). See accompanying project files — `index.html` is the current landing, hero section uses a 3-collection kitchen photo rotation (orange/graphite/petrol), simple mailto-based contact form currently lives at the bottom of the page and is what this qualification form should replace or extend.
