# Welcome to [SMC Vienna](https://smcvienna.org)

![SMC Hero Image](/public/assets/meta-image.png)

## 📚 Project Structure

Inside of this project, you'll see the following folders and files:

```
/
├── public/
│   ├──assets/
│   │  └── All important assets (to be kept at a minimum)
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── All components (preferably in Svelte)
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── All pages
│   └── style/
│   		└── Base Styles (component styles are within the component file)
└── Config files
```

Astro looks for `.astro`, `mdx` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |

## Tech stack

Static-site meta-framework: Astro
Component JS framework: Svelte
CSS pre-processor: SCSS
Blog

### 🚀 Deployment

Domain on world4you.at
Hosted on render.com
Images on AWS S3 Bucket