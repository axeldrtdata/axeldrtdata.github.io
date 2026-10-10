// Dictionnaire français de l'interface. Mêmes clés que `en.ts`, qui reste la référence.
import type { UIStrings } from './en';

export const fr: UIStrings = {
  // En-tête, pied de page
  'nav.home': 'Accueil',
  'nav.about': 'À propos',
  'nav.works': 'Projets',
  'nav.blog': 'Notes',
  'nav.search': 'Rechercher',
  'nav.label': 'Navigation principale',
  'nav.brandHome': '{site}, page d’accueil',
  'theme.toggle': 'Changer le thème de couleur',
  'footer.notes': 'Notes',
  'social.label': 'Réseaux',

  // Pagination
  'pagination.label': 'Pagination',
  'pagination.newer': '← Plus récentes',
  'pagination.older': 'Plus anciennes →',
  'pagination.status': 'Page {current} sur {total}',

  // Accueil
  'home.primaryLinks': 'Liens principaux',
  'home.viewWorks': 'Voir les projets',
  'home.readNotes': 'Lire les notes',
  'home.overviewLabel': 'Présentation',
  'home.latestWorksEyebrow': 'Derniers projets',
  'home.allWorks': 'Tous les projets',
  'home.workTech': 'Technologies de {title}',
  'home.worksEmpty': 'Ajoutez des projets dans <code>src/content/works</code> pour les afficher ici.',
  'home.latestBlogEyebrow': 'Dernières notes',
  'home.allPosts': 'Toutes les notes',
  'home.postsEmpty': 'Ajoutez des notes dans <code>src/content/blog</code> pour les afficher ici.',

  // Notes
  'blog.title': 'Notes',
  'blog.titlePaged': 'Notes · Page {page}',
  'blog.eyebrow': 'Notes',
  'blog.listLabel': 'Notes',
  'blog.tagsEyebrow': 'Thèmes',
  'blog.tagsNavLabel': 'Thèmes des notes',

  // Pages de thème
  'tag.title': 'Notes sur « {tag} »',
  'tag.titlePaged': 'Notes sur « {tag} » · Page {page}',
  'tag.description': 'Notes sur {tag}, par {site}.',
  'tag.eyebrow': 'Thème',
  'tag.lead': 'Les notes classées sous le thème {tag}.',
  'tag.listLabel': 'Notes {tag}',
  'tag.moreTagsEyebrow': 'Autres thèmes',
  'tag.otherTagsNavLabel': 'Autres thèmes des notes',
  'tag.allPosts': 'Toutes les notes',

  // Note
  'post.eyebrow': 'Note',
  'post.readingTime': '{minutes} min de lecture',
  'post.tocLabel': 'Sommaire',
  'post.contentsEyebrow': 'Sommaire',
  'post.adjacentLabel': 'Notes voisines',
  'post.previous': 'Précédente',
  'post.next': 'Suivante',
  'post.relatedEyebrow': 'À lire aussi',
  'post.breadcrumbHome': 'Accueil',
  'post.breadcrumbBlog': 'Notes',

  // Commentaires
  'comments.eyebrow': 'Commentaires',
  'comments.failed': 'Les commentaires n’ont pas pu être chargés. Lisez la discussion sur {link}.',
  'comments.failedLink': 'GitHub Discussions ↗',
  'comments.noscript': 'Les commentaires demandent JavaScript. Ils sont hébergés sur GitHub Discussions.',

  // Projets
  'works.title': 'Projets',
  'works.eyebrow': 'Projets',
  'works.listLabel': 'Projets',
  'work.eyebrow': 'Projet',
  'work.visit': 'Voir le projet',
  'work.repository': 'Voir le dépôt',
  'work.stackEyebrow': 'Outils',

  // À propos
  'about.title': 'À propos',
  'about.eyebrow': 'À propos',
  'about.ledgerLabel': 'Parcours',

  // Recherche
  'search.title': 'Rechercher',
  'search.eyebrow': 'Rechercher',
  'search.sectionLabel': 'Recherche sur le site',
  'search.fallback':
    'La recherche se charge. Si rien n’apparaît, parcourez les <a href="/fr/works/">projets</a> ou les <a href="/fr/blog/">notes</a>.',

  // 404
  'notFound.title': 'Page introuvable',
  'notFound.description': 'La page demandée n’existe pas.',
  'notFound.eyebrow': '404 — Introuvable',
  'notFound.heading': 'Cette page a pris le large.',
  'notFound.lead': 'L’adresse a peut-être changé, ou elle n’a jamais existé.',
  'notFound.linksLabel': 'Liens utiles',
  'notFound.home': 'Retour à l’accueil',
  'notFound.blog': 'Lire les notes',
  'notFound.works': 'Voir les projets',
};
