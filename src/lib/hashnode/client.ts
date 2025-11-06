import { gql, GraphQLClient } from "graphql-request";
import type { AllPostsData, PostData } from "./schema";

const hashnodeUrl = "blog.leynier.dev";

export const getHashnodeUrl = (slug: string): string => {
  return `/posts/${slug}`;
}

export const getClient = () => {
  return new GraphQLClient("https://gql.hashnode.com")
}

export const getAllPosts = async () => {
  try {
    const client = getClient();
    const allPosts = await client.request<AllPostsData>(
      gql`
        query allPosts {
          publication(host: "${hashnodeUrl}") {
            title
            posts(first: 20) {
              pageInfo{
                hasNextPage
                endCursor
              }
              edges {
                node {
                  author{
                    name
                    profilePicture
                  }
                  title
                  subtitle
                  brief
                  slug
                  coverImage {
                    url
                  }
                  tags {
                    name
                    slug
                  }
                  publishedAt
                  readTimeInMinutes
                  seo {
                    title
                    description
                  }
                  ogMetaData {
                    image
                  }
                }
              }
            }
          }
        }
      `
    );
    return allPosts;
  } catch (error) {
    console.error("Error fetching all posts from Hashnode:", error);
    // Return empty structure to prevent build failures
    return {
      publication: {
        title: "",
        posts: {
          pageInfo: {
            hasNextPage: false,
            endCursor: null,
          },
          edges: [],
        },
      },
    };
  }
};


export const getPost = async (slug: string) => {
  try {
    const client = getClient();
    const data = await client.request<PostData>(
      gql`
        query postDetails($slug: String!) {
          publication(host: "${hashnodeUrl}") {
            post(slug: $slug) {
              author{
                name
                profilePicture
              }
              publishedAt
              title
              subtitle
              brief
              slug
              readTimeInMinutes
              content{
                html
              }
              tags {
                name
                slug
              }
              coverImage {
                url
              }
              seo {
                title
                description
              }
              ogMetaData {
                image
              }
            }
          }
        }
      `,
      { slug: slug }
    );
    
    if (!data.publication?.post) {
      throw new Error(`Post with slug "${slug}" not found`);
    }
    
    return data.publication.post;
  } catch (error) {
    console.error(`Error fetching post "${slug}" from Hashnode:`, error);
    throw error; // Re-throw to let Astro handle 404s properly
  }
};
