import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projectSchema = z.object({
	title: z.string(),
	subtitle: z.string(),
	image: z.string(),
	url: z.string(),
	tags: z.array(z.string()),
	highlighted: z.boolean(),
	order: z.number(),
});

const projectsEn = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/projects-en" }),
	schema: projectSchema,
});

const projectsEs = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/projects-es" }),
	schema: projectSchema,
});

export const collections = {
	"projects-en": projectsEn,
	"projects-es": projectsEs,
};
