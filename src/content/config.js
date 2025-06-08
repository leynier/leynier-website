import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		subtitle: z.string(),
		image: z.string(),
		url: z.string(),
		tags: z.array(z.string()),
		highlighted: z.boolean(),
		order: z.number(),
	}),
});

export const collections = {
	"projects-en": projectsCollection,
	"projects-es": projectsCollection,
};
