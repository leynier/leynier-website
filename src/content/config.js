import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		subtitle: z.string(),
		image: z.string(),
		url: z.string(),
		highlighted: z.boolean(),
	}),
});

export const collections = {
	"projects-en": projectsCollection,
	"projects-es": projectsCollection,
};
