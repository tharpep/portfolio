export interface Collection {
  slug: string;
  title: string;
  year: string;
  description: string;
  featured?: boolean;
  mood: 'light' | 'dark';
  location?: string;
  camera?: string;
}

export const collections: Collection[] = [
  {
    slug: 'nyc-2025',
    title: 'New York City',
    year: '2025',
    description: 'A week exploring the concrete jungle, capturing the raw energy and hidden beauty of urban life. From the bustling streets of Manhattan to quiet moments in Central Park, each frame tells a story of humanity thriving in motion.',
    featured: true,
    mood: 'light',
    location: 'Manhattan, Brooklyn, Queens',
    camera: 'Canon 5D Mark IV',
  },
  {
    slug: 'zoo-2022',
    title: 'Wildlife',
    year: '2022',
    description: 'Intimate portraits of animals in their element, showcasing the grace and power of the natural world. A celebration of the untamed beauty that exists within each creature.',
    mood: 'light',
    location: 'Various Wildlife Sanctuaries',
    camera: '70-200mm f/2.8',
  },
  {
    slug: 'mountains-2021',
    title: 'Mountain Peaks',
    year: '2021',
    description: 'Chasing light across mountain ranges, finding solitude and grandeur in nature\'s cathedral. Long exposures and early mornings in pursuit of stillness.',
    mood: 'dark',
    location: 'Rocky Mountains',
    camera: 'Sony A7III',
  },
];

export function getCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

export function getFeaturedCollection(): Collection {
  return collections.find((c) => c.featured) ?? collections[0];
}
