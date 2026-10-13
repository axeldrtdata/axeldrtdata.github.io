// Display names of the note tags. URLs keep the English slug; the French pages show the French label.
const FR: Record<string, string> = {
  ai: 'ia',
  'critical-thinking': 'esprit critique',
  prompting: 'prompts',
  creativity: 'créativité',
  dataviz: 'dataviz',
  accessibility: 'accessibilité',
  tableau: 'tableau',
  'power-bi': 'power-bi',
  kpi: 'kpi',
};

export function tagLabel(tag: string, lang: string): string {
  return lang === 'fr' ? (FR[tag] ?? tag) : tag;
}
