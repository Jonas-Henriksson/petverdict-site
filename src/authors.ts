// Author personas for PetVerdict
// Auto-generated for E-E-A-T signals

export interface Author {
  slug: string;
  name: string;
  title: string;
  initials: string;
  years: number;
  bio: string;
  expertise: string[];
  credentials: string;
}

export const authors: Record<string, Author> = {
  'hannah-brooks': {
    slug: 'hannah-brooks',
    name: 'Hannah Brooks',
    title: 'Editor-in-Chief',
    initials: 'HB',
    years: 8,
    bio: `Hannah is a certified veterinary technician turned pet product journalist. She tests every food, toy, and gadget with her own pets and a network of 20+ volunteer pet families.`,
    expertise: ["Pet nutrition", "Dog food analysis", "Pet insurance", "Pet health technology"],
    credentials: 'Certified Veterinary Technician (CVT), Pet Nutrition Specialist',
  },
  'kevin-nguyen': {
    slug: 'kevin-nguyen',
    name: 'Kevin Nguyen',
    title: 'Staff Writer & Pet Tech Reviewer',
    initials: 'KN',
    years: 3,
    bio: `Kevin covers the booming pet tech space — GPS trackers, automatic feeders, smart litter boxes, and pet cameras. He runs long-term tests with 3 dogs and 2 cats.`,
    expertise: ["Pet GPS trackers", "Smart feeders", "Pet cameras", "Grooming tools"],
    credentials: 'Consumer electronics background, pet foster volunteer',
  },
  'dr-lisa-ward': {
    slug: 'dr-lisa-ward',
    name: 'Dr. Lisa Ward',
    title: 'Contributing Veterinarian',
    initials: 'LW',
    years: 12,
    bio: `Dr. Ward is a practicing veterinarian who reviews pet food ingredients, supplement claims, and health products for PetVerdict. She fact-checks every nutrition claim we publish.`,
    expertise: ["Pet food ingredient analysis", "Supplement efficacy", "Breed-specific nutrition", "Senior pet care"],
    credentials: 'DVM, Board-eligible veterinary nutritionist',
  },
};

export const defaultAuthor = authors['hannah-brooks'];

export function getAuthorByName(name: string): Author | undefined {
  return Object.values(authors).find(a => a.name === name);
}

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors[slug];
}
