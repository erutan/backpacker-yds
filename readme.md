# Backpacker YDS - Astro Version

This project has been successfully converted to Astro while preserving all functionality including the GLightbox lightbox feature.

## Project Structure

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
│           ├── app.scss
│           ├── _fonts.scss
│           ├── _layout.scss
│           ├── _settings.scss
│           └── _yds.scss
├── public/                # Static assets
│   └── assets/
│       ├── img/          # Images and thumbnails
│       ├── fonts/        # Web fonts
│       └── js/           # JavaScript files (Foundation, etc.)
├── dist-astro/           # Built Astro output
├── astro.config.mjs      # Astro configuration
└── package.json          # Dependencies and scripts
```

## Features Preserved

✅ **GLightbox Integration** - All image galleries work with the lightbox feature
✅ **Foundation CSS Framework** - Full Foundation styles and components
✅ **Foundation JavaScript** - Accordion and sticky navigation (hamburger menu removed)
✅ **SCSS Styling** - All custom styles including grid layouts
✅ **Simplified Navigation** - Clean two-link menu without hamburger toggle

## Development Commands

### Start Development Server
```bash
npm run dev
# or
npm run astro:dev
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

## Original Gulp Build (Still Available)

The original Gulp-based build is still available:

```bash
npm start           # Development with BrowserSync
npm run gulp:build  # Production build to dist/ (old version)
```

## Key Changes from Original

1. **Template Engine**: Panini → Astro
2. **Build Tool**: Gulp → Astro/Vite
3. **File Organization**: src/ → src-astro/
4. **Output Directory**: dist/ → dist-astro/

## Technical Details

### GLightbox Setup

The lightbox is loaded from CDN and initialized in the main layout:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css" />
<script is:inline src="https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js"></script>
<script is:inline>
  const lightbox = GLightbox({ moreLength: 0 });
</script>
```

### Foundation Integration

Foundation is imported through SCSS with selective components enabled in `app.scss`. The JavaScript bundle is pre-built using Gulp and loaded from `public/assets/js/app-bundled.js`. Foundation initializes automatically when this script loads.

**Important**: The bundled JS file (`app-bundled.js`) is created by running the original Gulp build:
```bash
npm run build  # This creates dist/assets/js/app.js
# Then copy to public/assets/js/app-bundled.js
```

### SCSS Configuration

The Astro config includes load paths for Foundation and Motion UI:

```javascript
scss: {
  loadPaths: [
    'node_modules/foundation-sites/scss',
    'node_modules/motion-ui/src',
    'node_modules'
  ]
}
```

## Dependencies

Main dependencies:
- `astro` - Static site builder
- `@astrojs/mdx` - MDX support
- `foundation-sites` - CSS framework
- `motion-ui` - Animation library
- `glightbox` - Lightbox library
- `sass` - SCSS compilation

## Browser Support

Same as the original Foundation-based site:
- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11+ (with polyfills if needed)

## Deployment

The built site in `dist-astro/` is a static site that can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## Notes

- All image galleries maintain their original functionality
- The accordion components work exactly as before
- Responsive navigation is preserved
- All custom grid layouts are intact
- SCSS deprecation warnings are silenced (foundation uses @import)
