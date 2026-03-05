import 'server-only';
import Anthropic from '@anthropic-ai/sdk';
import { unstable_cache } from 'next/cache';

export interface AICollectionMetadata {
  title: string;
  description: string;
  mood: 'light' | 'dark';
}

function slugToTitle(slug: string): string {
  const acronyms = new Set(['nyc', 'la', 'sf', 'dc', 'uk', 'usa']);
  return slug
    .replace(/-\d{4}$/, '')
    .split('-')
    .map((w) =>
      acronyms.has(w.toLowerCase())
        ? w.toUpperCase()
        : w.charAt(0).toUpperCase() + w.slice(1)
    )
    .join(' ');
}

async function _generateMetadata(slug: string): Promise<AICollectionMetadata> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return { title: slugToTitle(slug), description: '', mood: 'light' };
  }
  try {
    const client = new Anthropic({ apiKey });
    const msg = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 200,
      messages: [
        {
          role: 'user',
          content: `Photography folder slug: "${slug}"
Return ONLY valid JSON (no markdown):
{
  "title": "2-4 word human-readable title, expand acronyms (nyc→New York City), strip trailing year",
  "description": "One evocative sentence, max 20 words, what this collection likely contains",
  "mood": "light or dark (dark=night/astro/moody, light=everything else)"
}`,
        },
      ],
    });
    const text =
      msg.content[0].type === 'text' ? msg.content[0].text.trim() : '{}';
    const parsed = JSON.parse(text);
    return {
      title: String(parsed.title ?? slugToTitle(slug)),
      description: String(parsed.description ?? ''),
      mood: parsed.mood === 'dark' ? 'dark' : 'light',
    };
  } catch {
    return { title: slugToTitle(slug), description: '', mood: 'light' };
  }
}

export const generateCollectionMetadata = unstable_cache(
  _generateMetadata,
  ['photography-ai-metadata'],
  { revalidate: 86400 }
);
