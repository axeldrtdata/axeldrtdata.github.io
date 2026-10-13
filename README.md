# axeldrtdata.github.io

Source of my data analyst portfolio, live at **[axeldrtdata.github.io](https://axeldrtdata.github.io)** in English and French ([version française](https://axeldrtdata.github.io/fr/)).

It holds ten case studies built during my OpenClassrooms Data Analyst training (Python, SQL, Power BI, Tableau, dbt), a few notes on data and AI, and my CV. Each case study links to the repository with its code and data.

## Built with

- **[Astro](https://astro.build)** and MDX: one folder per project, with an English page (`index.mdx`) and a French one (`fr.mdx`)
- Small case-study components for key figures, bar charts, confusion matrices and captioned figures (`src/components/case/`)
- **Pagefind** for the site search, generated at build time
- Social preview images generated at build time from each page's title and description
- Self-hosted fonts, no external CDN

## Structure

```text
src/
├── content/
│   ├── works/          # the ten case studies, EN + FR, with their figures
│   └── blog/           # the notes, EN + FR
├── components/         # cards, layout pieces and case-study components
├── i18n/               # interface strings in English and French
├── pages/              # routes, French pages under /fr/
└── consts.ts           # site name, links and navigation
public/                 # CVs (EN, FR), photo, favicon
```

## Run it locally

Requires Node.js 22.12 or later.

```bash
npm install
npm run dev       # local server on http://localhost:4321
npm run build     # static site in dist/, search index included
```

Every push to `main` builds and deploys the site to GitHub Pages (`.github/workflows/deploy.yml`).

## Credits

The site started from the [Astro Keel](https://github.com/kpab/astro-keel) theme by kpab, released under the MIT licence (see [LICENSE](LICENSE)). I reworked the design, added the French version and the case-study components, and wrote the content.

The MIT licence covers the code. The content of the site (texts, case studies, figures, images and CV) is © Axel Derobert, all rights reserved.

---

Axel Derobert · Data Analyst · Lyon · [Portfolio](https://axeldrtdata.github.io) · [LinkedIn](https://www.linkedin.com/in/axel-derobert-5717463b1/) · [GitHub](https://github.com/axeldrtdata)
