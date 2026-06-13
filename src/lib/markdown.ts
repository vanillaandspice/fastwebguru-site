import MarkdownIt from 'markdown-it';
import anchor from 'markdown-it-anchor';

export interface Heading { depth: number; text: string; slug: string }

// Render trusted markdown (from our private repo) to HTML, with stable heading
// IDs and an extracted H2/H3 table of contents. `html: false` ignores any raw
// HTML in the source as a safety measure.
export function renderMarkdown(src: string): { html: string; headings: Heading[] } {
  const headings: Heading[] = [];
  const md = new MarkdownIt({ html: false, linkify: true, typographer: true }).use(anchor, {
    level: [2, 3],
    callback: (token: any, info: { slug: string; title: string }) => {
      headings.push({ depth: token.tag === 'h3' ? 3 : 2, text: info.title, slug: info.slug });
    },
  });
  return { html: md.render(src ?? ''), headings };
}
