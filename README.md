[![Netlify Status](https://api.netlify.com/api/v1/badges/d184086d-4a03-49a4-916e-95cb9eb7b859/deploy-status)](https://app.netlify.com/sites/cheery-hamster/deploys)

# Built with ZURB Template

- Handlebars HTML templates with Panini
- Sass compilation and prefixing
- JavaScript module bundling with webpack
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript module bundling with webpack
  - Image compression

## Installation

To run this site locally, your computer needs:

- [NodeJS](https://nodejs.org/en/) (Version 12 or 14)
- [Git](https://git-scm.com/)

### Manual Setup

To manually set up the site, first download it with Git:

```bash
git clone https://github.com/erutan/backpacker-yds projectname
```

Then open the folder in your command line, and install the needed dependencies:

```bash
cd projectname
yarn
```

Finally, run `yarn start` to run Gulp. Your finished site will be created in a folder called `dist`, viewable at this URL:

```
http://localhost:8000
```

To create compressed, production-ready assets, run `yarn run build`.
