// English UI dictionary — the reference translation.
//
// **Scope: UI chrome only.** Navigation, pagination, section labels, button and
// link labels, aria labels, generated strings, and the theme-owned 404 page.
// Placeholder prose on the home and about pages is *not* here: it lives in the
// `.astro` files, where you would edit it anyway. Keeping the split means a new
// locale is ~60 short strings rather than a rewrite of the demo copy.
//
// This file also defines the *shape* every other dictionary must match, so add
// a key here first, then to each locale under `src/i18n/`. Keys are flat and
// dotted; `{name}` placeholders are filled in by `t()`.
//
// Two values carry inline `<code>` markup and are rendered with `set:html`.
// They are theme-authored, never user input.
//
// Note: values are deliberately *not* `as const` — widening them to `string`
// is what lets other locales satisfy `UIStrings`.

export const en = {
  // Header, footer, and other chrome
  'nav.home': 'Home',
  'nav.about': 'Who am I?',
  'nav.works': 'Projects',
  'nav.blog': 'Notes',
  'nav.search': 'Search',
  'nav.label': 'Main navigation',
  'nav.brandHome': '{site} home',
  'theme.toggle': 'Toggle color theme',
  'footer.notes': 'Notes',
  'social.label': 'Social links',

  // Pagination
  'pagination.label': 'Pagination',
  'pagination.newer': '← Newer',
  'pagination.older': 'Older →',
  'pagination.status': 'Page {current} of {total}',

  // Home — labels and links only; the page's own copy lives in index.astro
  'home.primaryLinks': 'Primary links',
  'home.viewWorks': 'View works',
  'home.readNotes': 'Read notes',
  'home.overviewLabel': 'Theme overview',
  'home.latestWorksEyebrow': 'Latest works',
  'home.allWorks': 'All works',
  'home.workTech': '{title} technology',
  'home.worksEmpty':
    'Add works under <code>src/content/works</code> to surface the latest projects here.',
  'home.latestBlogEyebrow': 'Latest blog',
  'home.allPosts': 'All notes',
  'home.postsEmpty':
    'Add blog entries under <code>src/content/blog</code> to surface the latest notes here.',

  // Blog index
  'blog.title': 'Notes',
  'blog.titlePaged': 'Notes · Page {page}',
  'blog.eyebrow': 'Notes',
  'blog.listLabel': 'Notes',
  'blog.tagsEyebrow': 'Tags',
  'blog.tagsNavLabel': 'Note tags',

  // Tag archive — every string here is generated from the tag, so it stays
  // in the dictionary even though it reads like page copy.
  'tag.title': 'Notes tagged “{tag}”',
  'tag.titlePaged': 'Notes tagged “{tag}” · Page {page}',
  'tag.description': 'Notes tagged {tag} on {site}.',
  'tag.eyebrow': 'Tag',
  'tag.lead': 'Notes collected under the {tag} tag.',
  'tag.listLabel': '{tag} notes',
  'tag.moreTagsEyebrow': 'More tags',
  'tag.otherTagsNavLabel': 'Other note tags',
  'tag.allPosts': 'All notes',

  // Blog post
  'post.eyebrow': 'Note',
  'post.readingTime': '{minutes} min read',
  'post.tocLabel': 'Table of contents',
  'post.contentsEyebrow': 'Contents',
  'post.adjacentLabel': 'Adjacent notes',
  'post.previous': 'Previous',
  'post.next': 'Next',
  'post.relatedEyebrow': 'Related',
  'post.breadcrumbHome': 'Home',
  'post.breadcrumbBlog': 'Notes',

  // Comments (rendered only when GISCUS.enabled)
  'comments.eyebrow': 'Comments',
  // `{link}` is a whole anchor element, built in Comments.astro — a translation
  // decides where in the sentence it lands, and the URL never has to be
  // interpolated into the dictionary value.
  'comments.failed': 'Comments could not be loaded. Read the thread on {link}.',
  'comments.failedLink': 'GitHub Discussions ↗',
  'comments.noscript': 'Comments require JavaScript. They are hosted on GitHub Discussions.',

  // Works
  'works.title': 'Works',
  'works.eyebrow': 'Works',
  'works.listLabel': 'Selected works',
  'work.eyebrow': 'Work',
  'work.visit': 'Visit project',
  'work.repository': 'View repository',
  'work.stackEyebrow': 'Stack',

  // About — section labels only; the biography copy lives in about/index.astro
  'about.title': 'Who am I?',
  'about.eyebrow': 'Who am I?',
  'about.ledgerLabel': 'Experience summary',

  // Search
  'search.title': 'Search',
  'search.eyebrow': 'Search',
  'search.sectionLabel': 'Site search',
  'search.fallback':
    'Search is loading. If nothing appears, browse the <a href="/works/">projects</a> or the <a href="/blog/">notes</a>.',

  // 404 — a theme-owned page, so its copy belongs here
  'notFound.title': 'Page not found',
  'notFound.description': 'The page you were looking for does not exist.',
  'notFound.eyebrow': '404 — Not found',
  'notFound.heading': 'This page drifted off course.',
  'notFound.lead':
    'The address may have moved, or it never existed. The keel lines below lead back to steady water.',
  'notFound.linksLabel': 'Recovery links',
  'notFound.home': 'Back home',
  'notFound.blog': 'Read the notes',
  'notFound.works': 'Browse projects',
};

/** The shape every dictionary must implement. */
export type UIStrings = typeof en;

/** Every valid translation key. */
export type UIKey = keyof UIStrings;
