# Backpacker YDS

## Project Structure

Astro & [PicoCSS](https://github.com/Yohn/PicoCSS)

```
backpacker-yds/
├── src-astro/              # Astro source files
│   ├── components/         # Reusable components
│   │   └── Navigation.astro
│   ├── layouts/           # Page layouts
│   │   └── Layout.astro
│   ├── pages/             # Page routes
│   │   ├── index.astro    # Main content page
│   │   └── related.astro  # Related thoughts page
│   └── styles/            # SCSS stylesheets
│       └── scss/
│           ├── app.css
├── public/                # Static assets
│   └── assets/
│       ├── img/          # Images and thumbnails
│       ├── fonts/        # Web fonts
│       └── js/           # JavaScript files (Foundation, etc.)
├── dist-astro/           # Built Astro output
├── astro.config.mjs      # Astro configuration
└── package.json          # Dependencies and scripts
```

## Development Commands

### Start Development Server
```bash
npm run dev
```
This starts the Astro dev server at http://localhost:4321

### Build for Production
```bash
npm run build
```
Builds the site to `dist/` directory (used by Netlify)

### Preview Production Build
```bash
npm run astro:preview
```
Preview the built site before deployment

## GLightbox Config

The lightbox is loaded from CDN and initialized in the main layout:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css" />
<script is:inline src="https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js"></script>
<script is:inline>
  const lightbox = GLightbox({ moreLength: 0 });
</script>
```
