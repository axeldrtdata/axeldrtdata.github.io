// Colour of each technology tag, by family. Same logic as the homepage toolkit:
//   languages → royal blue · libraries → powder blue · tools & software → bone
// A technology not listed here falls back to a neutral tint.

const LANGUAGES = ['python', 'sql', 'dax', 'r', 'm (power query)'];
const LIBRARIES = ['pandas', 'numpy', 'scikit-learn', 'matplotlib', 'seaborn', 'plotly', 'scipy', 'statsmodels'];
const TOOLS = [
  'vs code', 'jupyter', 'power bi', 'tableau', 'excel', 'git', 'github', 'mysql',
  'postgresql', 'sqlite', 'snowflake', 'dbt', 'looker studio',
];

export function techTone(name: string): string {
  const key = name.trim().toLowerCase();
  if (LANGUAGES.includes(key)) return 'tag-language';
  if (LIBRARIES.includes(key)) return 'tag-library';
  if (TOOLS.includes(key)) return 'tag-tool';
  return 'tag-other';
}