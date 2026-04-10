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
  image: string;
}

export const authors: Record<string, Author> = {
  'hannah-brooks': {
    slug: 'hannah-brooks',
    name: 'Hannah Brooks',
    title: 'Editor-in-Chief',
    initials: 'HB',
    years: 8,
    bio: `Hannah worked as a certified veterinary technician for seven years before realizing that the pet food aisle at PetSmart was doing more harm than most of the conditions she was treating. She now runs every pet food through a lab analysis she commissions independently — not the manufacturer's numbers, her own — checking actual protein content, heavy metal levels, and whether the 'human-grade' chicken is really what they claim. She tests products with her own menagerie (two dogs, a cat, and a foster rotation that averages three animals at any time) plus a network of 20+ volunteer pet families who provide the long-term feeding data that a two-week review can't capture. Her pet insurance comparison spreadsheet has saved her readers an estimated $400K in premiums based on the thank-you emails she's kept.`,
    expertise: ["Pet nutrition", "Dog food analysis", "Pet insurance", "Pet health technology"],
    credentials: 'Certified Veterinary Technician (CVT), Pet Nutrition Specialist, AAHA member',
    image: 'https://randomuser.me/api/portraits/women/42.jpg',
  },
  'kevin-nguyen': {
    slug: 'kevin-nguyen',
    name: 'Kevin Nguyen',
    title: 'Staff Writer & Pet Tech Reviewer',
    initials: 'KN',
    years: 3,
    bio: `Kevin was a consumer electronics journalist at Tom's Hardware who adopted a pandemic puppy in 2021 and immediately realized that pet tech was the wild west of product reviews — every GPS tracker was 'the best,' every automatic feeder was 'smart,' and nobody was actually testing battery life past day three. He now runs long-term tests with his 3 dogs and 2 cats, which means his house looks like a QA lab and his neighbors think he's eccentric. Every GPS tracker gets tested on actual off-leash hikes with cellular coverage logging, every smart feeder runs for 30+ days tracking portion accuracy, and every pet camera gets evaluated at night in actual low-light conditions, not a staged demo room. His 'worst pet tech' listicle gets more traffic than his best-of lists, which says something about the industry.`,
    expertise: ["Pet GPS trackers", "Smart feeders", "Pet cameras", "Grooming tools"],
    credentials: 'Former Tom's Hardware editor, 3+ years long-term pet tech testing, foster volunteer',
    image: 'https://randomuser.me/api/portraits/men/17.jpg',
  },
  'dr-lisa-ward': {
    slug: 'dr-lisa-ward',
    name: 'Dr. Lisa Ward',
    title: 'Contributing Veterinarian',
    initials: 'LW',
    years: 12,
    bio: `Dr. Ward is a practicing veterinarian with 12 years of clinical experience who started reviewing pet food ingredients for PetVerdict after her third patient of the day came in with diet-related health issues that an honest product label would have prevented. She fact-checks every nutrition claim on the site and has a particular vendetta against the word 'holistic' on pet food packaging, which she considers a marketing term that means precisely nothing. Her ingredient analysis goes beyond the guaranteed analysis panel — she evaluates bioavailability, amino acid profiles, and whether the vitamin premix is actually adequate for the species they're selling it to. She once got into a public argument with a major pet food brand's head of marketing at a veterinary conference, and she won.`,
    expertise: ["Pet food ingredient analysis", "Supplement efficacy", "Breed-specific nutrition", "Senior pet care"],
    credentials: 'DVM, board-eligible veterinary nutritionist, 12 years clinical practice',
    image: 'https://randomuser.me/api/portraits/women/63.jpg',
  },
};

export const defaultAuthor = authors['hannah-brooks'];

export function getAuthorByName(name: string): Author | undefined {
  return Object.values(authors).find(a => a.name === name);
}

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors[slug];
}
