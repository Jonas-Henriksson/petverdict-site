declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"articles": {
"best-automatic-litter-box-2026-litter-robot-scoopfree-petsafe.md": {
	id: "best-automatic-litter-box-2026-litter-robot-scoopfree-petsafe.md";
  slug: "best-automatic-litter-box-2026-litter-robot-scoopfree-petsafe";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"best-automatic-pet-feeders-2026-tested-reliability.md": {
	id: "best-automatic-pet-feeders-2026-tested-reliability.md";
  slug: "best-automatic-pet-feeders-2026-tested-reliability";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"best-biodegradable-dog-poop-bags-2026-tested.md": {
	id: "best-biodegradable-dog-poop-bags-2026-tested.md";
  slug: "best-biodegradable-dog-poop-bags-2026-tested";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"best-cat-food-2026-complete-buying-guide.md": {
	id: "best-cat-food-2026-complete-buying-guide.md";
  slug: "best-cat-food-2026-complete-buying-guide";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"best-cat-litter-2026-tested-odor-control-clumping.md": {
	id: "best-cat-litter-2026-tested-odor-control-clumping.md";
  slug: "best-cat-litter-2026-tested-odor-control-clumping";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"best-cat-water-fountain-2026-kidney-health.md": {
	id: "best-cat-water-fountain-2026-kidney-health.md";
  slug: "best-cat-water-fountain-2026-kidney-health";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"best-dog-anxiety-vest-2026-thundershirt-alternatives.md": {
	id: "best-dog-anxiety-vest-2026-thundershirt-alternatives.md";
  slug: "best-dog-anxiety-vest-2026-thundershirt-alternatives";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"best-dog-coats-winter-2026-tested.md": {
	id: "best-dog-coats-winter-2026-tested.md";
  slug: "best-dog-coats-winter-2026-tested";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"best-dog-dental-chews-2026-vohc-ranked.md": {
	id: "best-dog-dental-chews-2026-vohc-ranked.md";
  slug: "best-dog-dental-chews-2026-vohc-ranked";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"best-dog-food-2026-vet-tested-and-ranked.md": {
	id: "best-dog-food-2026-vet-tested-and-ranked.md";
  slug: "best-dog-food-2026-vet-tested-and-ranked";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"best-dog-gps-trackers-2026-accuracy-tested.md": {
	id: "best-dog-gps-trackers-2026-accuracy-tested.md";
  slug: "best-dog-gps-trackers-2026-accuracy-tested";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"best-dog-harness-for-pulling-2026-tested.md": {
	id: "best-dog-harness-for-pulling-2026-tested.md";
  slug: "best-dog-harness-for-pulling-2026-tested";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"best-dog-harness-no-pull-training-2026-guide.md": {
	id: "best-dog-harness-no-pull-training-2026-guide.md";
  slug: "best-dog-harness-no-pull-training-2026-guide";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"best-fish-oil-supplements-dogs-2026.md": {
	id: "best-fish-oil-supplements-dogs-2026.md";
  slug: "best-fish-oil-supplements-dogs-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"best-flea-tick-prevention-2026-oral-topical-collar.md": {
	id: "best-flea-tick-prevention-2026-oral-topical-collar.md";
  slug: "best-flea-tick-prevention-2026-oral-topical-collar";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"best-no-pull-dog-harness-2026-training.md": {
	id: "best-no-pull-dog-harness-2026-training.md";
  slug: "best-no-pull-dog-harness-2026-training";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"best-pet-camera-2026-furbo-petcube-wyze-tested.md": {
	id: "best-pet-camera-2026-furbo-petcube-wyze-tested.md";
  slug: "best-pet-camera-2026-furbo-petcube-wyze-tested";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"best-pet-first-aid-kit-2026.md": {
	id: "best-pet-first-aid-kit-2026.md";
  slug: "best-pet-first-aid-kit-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"best-pet-insurance-2026-coverage-compared.md": {
	id: "best-pet-insurance-2026-coverage-compared.md";
  slug: "best-pet-insurance-2026-coverage-compared";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"best-puppy-food-large-breeds-2026-growth-optimized.md": {
	id: "best-puppy-food-large-breeds-2026-growth-optimized.md";
  slug: "best-puppy-food-large-breeds-2026-growth-optimized";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"best-robot-pet-feeders-2026-tested-for-reliability.md": {
	id: "best-robot-pet-feeders-2026-tested-for-reliability.md";
  slug: "best-robot-pet-feeders-2026-tested-for-reliability";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"hills-science-diet-canada-best-places-buy-online-2026.md": {
	id: "hills-science-diet-canada-best-places-buy-online-2026.md";
  slug: "hills-science-diet-canada-best-places-buy-online-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
