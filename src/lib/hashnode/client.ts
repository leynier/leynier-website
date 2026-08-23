import { XMLParser } from "fast-xml-parser";
import type { AllPostsData, Post } from "./schema";

const hashnodeUrl = "blog.leynier.dev";

interface RssItem {
  title: string;
  description?: string;
  link: string;
  category?: string | string[];
  "dc:creator"?: string;
  pubDate: string;
  enclosure?: { "@_url"?: string };
  "content:encoded"?: string;
}

interface RssDocument {
  rss: {
    channel: {
      title: string;
      item?: RssItem | RssItem[];
    };
  };
}

export const getHashnodeUrl = (slug: string): string => {
  return `/posts/${slug}`;
};

const toPost = (item: RssItem): Post => {
  const content = item["content:encoded"] ?? "";
  const description = item.description ?? "";
  const image = item.enclosure?.["@_url"] ?? "";
  const categories = Array.isArray(item.category)
    ? item.category
    : item.category
      ? [item.category]
      : [];

  return {
    author: {
      name: item["dc:creator"] ?? "leynierdev",
      profilePicture: "",
    },
    publishedAt: new Date(item.pubDate).toISOString(),
    title: item.title,
    subtitle: description,
    brief: description,
    slug: new URL(item.link).pathname.replace(/^\//, ""),
    readTimeInMinutes: Math.max(
      1,
      Math.ceil(content.replace(/<[^>]*>/g, " ").trim().split(/\s+/).length / 200),
    ),
    content: { markdown: "", html: content },
    tags: categories.map((name) => ({
      name,
      slug: name.toLowerCase().replace(/^#/, "").replace(/\s+/g, "-"),
    })),
    coverImage: { url: image },
    seo: { title: item.title, description },
    ogMetaData: { image },
  };
};

export const getAllPosts = async (): Promise<AllPostsData> => {
  try {
    const response = await fetch(`https://${hashnodeUrl}/rss.xml`);
    if (!response.ok) {
      throw new Error(`Hashnode RSS returned ${response.status}`);
    }

    const parser = new XMLParser({ ignoreAttributes: false });
    const feed = parser.parse(await response.text()) as RssDocument;
    const rssItems = feed.rss.channel.item ?? [];
    const items = Array.isArray(rssItems) ? rssItems : [rssItems];

    return {
      publication: {
        title: feed.rss.channel.title,
        posts: {
          pageInfo: { hasNextPage: false, endCursor: "" },
          edges: items.map((item) => ({ node: toPost(item) })),
        },
      },
    };
  } catch {
    console.warn("Unable to load Hashnode posts; continuing without them.");
    return {
      publication: {
        title: "",
        posts: {
          pageInfo: { hasNextPage: false, endCursor: "" },
          edges: [],
        },
      },
    };
  }
};

export const getPost = async (slug: string): Promise<Post> => {
  const data = await getAllPosts();
  const post = data.publication.posts.edges.find(
    ({ node }) => node.slug === slug,
  )?.node;
  if (!post) {
    throw new Error(`Hashnode post not found: ${slug}`);
  }
  return post;
};
