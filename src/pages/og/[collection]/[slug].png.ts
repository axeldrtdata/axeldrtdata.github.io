import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { readFile, access } from 'node:fs/promises';
import { createRequire } from 'node:module';
import path from 'node:path';
import satori from 'satori';
import sharp from 'sharp';
import { PROJECT_CATEGORIES } from '../../../consts';
import { getWorks, getPosts } from '../../../lib/content';

// Share images (Open Graph) generated at build time for every case study and note,
// in the portfolio's own palette. When a case study has an icon.png next to its
// index.mdx, the icon is shown on the right of the image.

interface OgProps {
  title: string;
  description: string;
  kind: string;
  iconPath?: string;
}

const iconNextTo = async (filePath?: string) => {
  if (!filePath) return undefined;
  const candidate = path.join(path.dirname(filePath), 'icon.png');
  try {
    await access(candidate);
    return candidate;
  } catch {
    return undefined;
  }
};

export const getStaticPaths = (async () => {
  const blog = await getCollection('blog', ({ data }) => !data.draft);
  const works = await getCollection('works');
  // French share images (/og/fr-works/…, /og/fr-blog/…), from the translated titles.
  const worksFr = await getWorks('fr');
  const blogFr = await getPosts('fr');
  const french = [
    ...blogFr.map((entry) => ({
      params: { collection: 'fr-blog', slug: entry.id },
      props: { title: entry.data.title, description: entry.data.description, kind: 'Note' } satisfies OgProps,
    })),
    ...(await Promise.all(
      worksFr.map(async (entry) => {
        const category = PROJECT_CATEGORIES.find((item) => item.key === entry.data.category);
        return {
          params: { collection: 'fr-works', slug: entry.id },
          props: {
            title: entry.data.title,
            description: entry.data.description,
            kind: category ? `Étude de cas · ${category.label}` : 'Étude de cas',
            iconPath: await iconNextTo(entry.filePath),
          } satisfies OgProps,
        };
      }),
    )),
  ];
  return [
    ...french,
    ...blog.map((entry) => ({
      params: { collection: 'blog', slug: entry.id },
      props: { title: entry.data.title, description: entry.data.description, kind: 'Note' } satisfies OgProps,
    })),
    ...(await Promise.all(
      works.map(async (entry) => {
        const category = PROJECT_CATEGORIES.find((item) => item.key === entry.data.category);
        return {
          params: { collection: 'works', slug: entry.id },
          props: {
            title: entry.data.title,
            description: entry.data.description,
            kind: category ? `Case study · ${category.label}` : 'Case study',
            iconPath: await iconNextTo(entry.filePath),
          } satisfies OgProps,
        };
      }),
    )),
  ];
}) satisfies GetStaticPaths;

const COLOR = {
  cream: '#F7F1E8',
  powder: '#D0E6FD',
  royal: '#162660',
  muted: '#3E4A73',
};

const require = createRequire(import.meta.url);
const font = (pkgPath: string) => readFile(require.resolve(pkgPath));

const [jakarta400, jakarta800, serifItalic] = await Promise.all([
  font('@fontsource/plus-jakarta-sans/files/plus-jakarta-sans-latin-400-normal.woff'),
  font('@fontsource/plus-jakarta-sans/files/plus-jakarta-sans-latin-800-normal.woff'),
  font('@fontsource/instrument-serif/files/instrument-serif-latin-400-italic.woff'),
]);

// Cut long text at the last full word, so it never stops mid-word.
const truncate = (text: string, max: number) => {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(' ')).replace(/[,:;.]$/, '')}…`;
};

const el = (type: string, style: Record<string, unknown>, children?: unknown) => ({
  type,
  props: { style, children },
});

export const GET: APIRoute<OgProps> = async ({ props }) => {
  const { title, description, kind, iconPath } = props;
  const icon = iconPath ? `data:image/png;base64,${(await readFile(iconPath)).toString('base64')}` : undefined;

  const textColumn = el('div', { display: 'flex', flexDirection: 'column', flex: 1, gap: 22 }, [
    el('div', { fontSize: 20, letterSpacing: 3, textTransform: 'uppercase', color: COLOR.muted }, kind),
    el(
      'div',
      { fontSize: title.length > 50 ? 54 : 62, fontWeight: 800, lineHeight: 1.08, letterSpacing: -1.5, color: COLOR.royal },
      truncate(title, 80),
    ),
    el('div', { fontSize: 24, lineHeight: 1.45, color: COLOR.muted }, truncate(description, 130)),
  ]);

  const card = el(
    'div',
    {
      display: 'flex',
      alignItems: 'center',
      gap: 48,
      flex: 1,
      padding: '56px 60px',
      borderRadius: 36,
      backgroundColor: '#FFFFFF',
      border: '2px solid rgba(255,255,255,0.9)',
      boxShadow: '0 20px 60px rgba(22,38,96,0.10)',
    },
    icon ? [textColumn, { type: 'img', props: { src: icon, width: 280, height: 280 } }] : [textColumn],
  );

  const footer = el('div', { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 26, padding: '0 8px' }, [
    el('div', { display: 'flex', alignItems: 'baseline', gap: 8, color: COLOR.royal }, [
      el('div', { fontSize: 28, fontWeight: 800 }, 'Axel'),
      el('div', { fontFamily: 'Instrument Serif', fontSize: 34 }, 'DEROBERT'),
    ]),
    el('div', { fontSize: 22, color: COLOR.muted }, 'axeldrtdata.github.io'),
  ]);

  const svg = await satori(
    el(
      'div',
      {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: 44,
        fontFamily: 'Plus Jakarta Sans',
        backgroundColor: COLOR.cream,
        backgroundImage: `radial-gradient(circle at 0% 0%, ${COLOR.powder} 0%, ${COLOR.cream} 55%)`,
      },
      [card, footer],
    ) as never,
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Plus Jakarta Sans', data: jakarta400, weight: 400, style: 'normal' },
        { name: 'Plus Jakarta Sans', data: jakarta800, weight: 800, style: 'normal' },
        { name: 'Instrument Serif', data: serifItalic, weight: 400, style: 'normal' },
      ],
    },
  );

  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
