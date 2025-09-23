# TextTamer
## A React + TypeScript + Vite site hosted on Github Pages

A very simple, add-free, text analysis site built using the Javascript port of Python's [textstat](https://github.com/textstat/textstat) called [text-readability](https://github.com/clearnote01/readability)

Live site at [TextTamer](https://johnfking.github.io/TextTamer/)

## Deployment

- Run `npm run deploy` locally to build the project and push the contents of the `dist` folder to the `docs` directory on the `gh-pages` branch.
- Alternatively, push to the `main` branch and the GitHub Actions workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) will build the site and publish it to the same `docs` directory on GitHub Pages automatically.
