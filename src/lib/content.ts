// Collections in the language of the page. In French, each entry takes the
// translated fields of its `fr.mdx` when one exists, and keeps the English
// version otherwise, so no link is ever broken while translations are added.
import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n';

export type Work = CollectionEntry<'works'> & {
  /** The entry to render: the French one when it exists. */
  contentEntry: CollectionEntry<'works'> | CollectionEntry<'worksFr'>;
  translated: boolean;
};

export type Post = CollectionEntry<'blog'> & {
  contentEntry: CollectionEntry<'blog'> | CollectionEntry<'blogFr'>;
  translated: boolean;
};

const byOrder = (a: Work, b: Work) => {
  const orderA = a.data.order ?? Number.MAX_SAFE_INTEGER;
  const orderB = b.data.order ?? Number.MAX_SAFE_INTEGER;
  if (orderA !== orderB) return orderA - orderB;
  return b.data.publishDate.valueOf() - a.data.publishDate.valueOf();
};

/** All case studies, sorted by `order`. */
export async function getWorks(lang: Lang): Promise<Work[]> {
  const english = await getCollection('works');
  const french = lang === 'fr' ? new Map((await getCollection('worksFr')).map((entry) => [entry.id, entry])) : new Map();
  return english
    .map((entry) => {
      const fr = french.get(entry.id);
      return fr
        ? { ...entry, data: { ...entry.data, ...fr.data }, contentEntry: fr, translated: true }
        : { ...entry, contentEntry: entry, translated: false };
    })
    .sort(byOrder);
}

/** Published notes, newest first. */
export async function getPosts(lang: Lang): Promise<Post[]> {
  const english = await getCollection('blog', ({ data }) => !data.draft);
  const french = lang === 'fr' ? new Map((await getCollection('blogFr')).map((entry) => [entry.id, entry])) : new Map();
  return english
    .map((entry) => {
      const fr = french.get(entry.id);
      return fr
        ? { ...entry, data: { ...entry.data, ...fr.data }, contentEntry: fr, translated: true }
        : { ...entry, contentEntry: entry, translated: false };
    })
    .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
}
