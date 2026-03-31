# Architecture Portfolio — React + Tailwind CSS

## Estructura del proyecto

```
src/
├── App.jsx                  ← Router central (agrega rutas aquí)
├── index.js
├── index.css                ← Estilos globales + Tailwind
├── data/
│   └── projects.js          ← FUENTE DE DATOS (edita aquí proyectos, marca, imágenes)
├── components/
│   ├── Layout.jsx            ← Wrapper con Navbar + Footer + cursor
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ProjectCard.jsx       ← Tarjeta reutilizable (variante default y wide)
└── pages/
    ├── Home.jsx              → /
    ├── Portfolio.jsx         → /portfolio
    ├── ProjectDetail.jsx     → /projects/:slug
    ├── About.jsx             → /about
    ├── Design.jsx            → /design
    ├── Contact.jsx           → /contact
    └── NotFound.jsx          → * (catch-all)
```

---

## Instalación y arranque

```bash
npm install
npm start
```

Requiere Node 16+. Abre http://localhost:3000

---

## ¿Cómo agregar una nueva página?

1. **Duplica** cualquier archivo de `src/pages/`, por ejemplo:
   ```bash
   cp src/pages/About.jsx src/pages/Studio.jsx
   ```

2. **Renombra** la función exportada dentro del archivo:
   ```jsx
   export default function Studio() { ... }
   ```

3. **Registra la ruta** en `src/App.jsx`:
   ```jsx
   import Studio from "./pages/Studio";
   // ...
   <Route path="/studio" element={<Studio />} />
   ```

4. (Opcional) **Agrega el link** en `src/components/Navbar.jsx` o `Footer.jsx`.

¡Listo! Sin tocar nada más.

---

## ¿Cómo agregar/editar proyectos?

Abre `src/data/projects.js` y edita el array `PROJECTS`. Cada objeto tiene:

```js
{
  id: "project-01",          // único
  slug: "project-01",        // URL: /projects/project-01
  index: "01",               // número mostrado en UI
  title: "Nombre Proyecto",
  subtitle: "Your Title Here",
  year: "2024",
  location: "Ciudad, País",
  category: "Residential",   // usado en el filtro de Portfolio
  description: "...",
  details: ["Punto 1", "Punto 2", "Punto 3"],
  hero: "URL imagen grande",
  thumb: "URL imagen miniatura",
  gallery: ["url1", "url2", "url3"],
  tags: ["Tag1", "Tag2"],
}
```

---

## Personalización rápida

| Qué cambiar          | Dónde                          |
|----------------------|--------------------------------|
| Nombre del estudio   | `src/data/projects.js` → SITE  |
| Colores              | `tailwind.config.js` → colors  |
| Tipografía           | `src/index.css` → @import      |
| Navegación           | `src/components/Navbar.jsx`    |
| Proyectos            | `src/data/projects.js`         |

---

## Rutas disponibles

| URL                      | Página              |
|--------------------------|---------------------|
| `/`                      | Home / Hero         |
| `/portfolio`             | Listado proyectos   |
| `/projects/:slug`        | Detalle proyecto    |
| `/about`                 | About               |
| `/design`                | Servicios / Design  |
| `/contact`               | Contacto            |
