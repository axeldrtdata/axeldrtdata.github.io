// Site-wide settings. Edit this file to rebrand the theme — every page,
// the RSS feed, and Open Graph tags read from here.

import type { UIKey } from './i18n/en';

export const SITE = {
  locale: 'en',
  title: 'Axel Derobert',
  description: 'Data Analyst based in Lyon. Python, SQL and dataviz to help businesses understand what drives their performance.',
  rssDescription: 'Notes on data, analytics and what has caught my curiosity.',
  ogImage: '/og.jpg',
  author: 'Axel Derobert',
  footerText: 'Designed and built in Lyon with Astro.',
} as const;

/** French versions of the site-wide texts above (pages under /fr/). */
export const SITE_FR = {
  description:
    'Data Analyst à Lyon. Python, SQL et dataviz pour aider les entreprises à comprendre ce qui fait leur performance.',
  footerText: 'Conçu et développé à Lyon avec Astro.',
  status: 'Ouvert à un stage data · Lyon ou hybride',
} as const;

/** Icons bundled with the theme — see `src/components/SocialLinks.astro`. */
export type SocialIcon = 'github' | 'x' | 'linkedin' | 'rss' | 'email';

export interface SocialLink {
  /** Accessible name announced on the icon-only link. */
  label: string;
  /** Full URL, `mailto:` address, or site-root path (gets `base` applied). */
  href: string;
  icon: SocialIcon;
}

/** Social profiles rendered as inline SVG icons in the footer.
 *  Add or remove entries here — no template edits needed. */
export const SOCIAL_LINKS: readonly SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/axeldrtdata', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/axel-derobert-5717463b1/', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:axel.derobert.data@gmail.com', icon: 'email' },
  { label: 'RSS feed', href: '/rss.xml', icon: 'rss' },
];

/** Giscus — GitHub Discussions-backed comments on blog posts.
 *  See `GISCUS` below; values come from https://giscus.app. */
export interface GiscusConfig {
  /** Master switch. While `false`, no Giscus markup, CSS, or script is emitted. */
  enabled: boolean;
  /** Target repository, `owner/name`. Needs public Discussions and the
   *  giscus GitHub App installed. */
  repo: string;
  /** Repository ID from giscus.app (starts with `R_`). */
  repoId: string;
  /** Discussion category name, e.g. `Announcements`. */
  category: string;
  /** Category ID from giscus.app (starts with `DIC_`). */
  categoryId: string;
  /** How a post maps to its discussion. `pathname` is the safest default —
   *  it survives retitling, unlike `title`. */
  mapping: 'pathname' | 'url' | 'title' | 'og:title' | 'specific' | 'number';
  /** Use a strict title match when looking up the discussion. */
  strict: boolean;
  /** Show the reaction bar above the comment list. */
  reactionsEnabled: boolean;
  /** Put the comment box above (`top`) or below (`bottom`) the thread. */
  inputPosition: 'top' | 'bottom';
  /** Giscus UI language, e.g. `en`, `ja`, `fr`. */
  lang: string;
  /** Giscus theme used while the site is in light mode. */
  lightTheme: string;
  /** Giscus theme used while the site is in dark mode. The widget is told to
   *  switch live when the header toggle flips. */
  darkTheme: string;
}

/** Comments are **off by default** — the theme ships no third-party JavaScript
 *  unless you ask for it. To turn them on: enable Discussions on your repo,
 *  install the giscus app (https://github.com/apps/giscus), fill in the IDs
 *  from https://giscus.app, and set `enabled: true`. */
export const GISCUS: GiscusConfig = {
  enabled: false,
  repo: '',
  repoId: '',
  category: 'Announcements',
  categoryId: '',
  mapping: 'pathname',
  strict: true,
  reactionsEnabled: true,
  inputPosition: 'bottom',
  lang: 'en',
  // Other options include `preferred_color_scheme`, `transparent_dark`,
  // `noborder_light`, `cobalt`, or a URL to your own theme CSS.
  lightTheme: 'light',
  darkTheme: 'dark',
};

export type NavItem =
  | { href: string; label: string; labelKey?: never }
  | { href: string; labelKey: UIKey; label?: never };

/** Header navigation. `href` is relative to the site root; the configured
 *  `base` is applied automatically via `withBase()`. The bundled entries
 *  localize through the UI dictionary; give a page you add yourself a literal
 *  `label` instead — one of the two is required. */
export const NAV_ITEMS: readonly NavItem[] = [
  { href: '/works/', labelKey: 'nav.works' },
  { href: '/blog/', labelKey: 'nav.blog' },
  { href: '/about/', labelKey: 'nav.about' },
];

/** Homepage settings. `style` switches the two hero layouts:
 *  'dark'  → royal-blue intro card, powder-blue quote card
 *  'light' → powder-blue intro card, royal-blue quote card */
export type HomeStyle = 'dark' | 'light';

export const HOME = {
  style: 'dark' as HomeStyle,
  /** Photo placed in `public/`, e.g. '/axel.jpg'. Leave '' for the placeholder. */
  photo: '/axel.jpg',
  status: 'Open to a data internship · Lyon or hybrid',
  linkedin: 'https://www.linkedin.com/in/axel-derobert-5717463b1/',
  github: 'https://github.com/axeldrtdata',
  /** Contact email. Leave '' to hide the email button. */
  email: 'axel.derobert.data@gmail.com',
  /** CV placed in `public/`, e.g. '/cv-axel-derobert.pdf'. Leave '' to hide the button. */
  cv: '/cv-axel-derobert.pdf',
  /** French CV for the /fr/ pages. Leave '' to offer the English CV there too. */
  cvFr: '',
};

/** Project categories — drive the homepage chart and the filters on /works/.
 *  A project picks one with `category:` in its front matter. */
export const PROJECT_CATEGORIES = [
  { key: 'python', label: 'Python', color: 'var(--royal)', tone: 'tone-powder', visual: '[Key chart]' },
  { key: 'sql', label: 'SQL', color: 'var(--steel)', tone: 'tone-soft', visual: '[Database schema]' },
  { key: 'dataviz', label: 'Dataviz', color: '#E2CFB2', tone: 'tone-bone', visual: '[Dashboard screenshot]' },
] as const;