import { gql, GraphQLClient } from "graphql-request";
import type { AllPostsData, PostData } from "./schema";

const hashnodeUrl = "blog.leynier.dev";

export const getHashnodeUrl = (slug: string): string => {
  return `/posts/${slug}`;
  // return `https://${hashnodeUrl}/${slug}`;
}

export const getClient = () => {
  return new GraphQLClient("https://gql.hashnode.com")
}

export const getAllPosts = async () => {
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
};


export const getPost = async (slug: string) => {
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
  return data.publication.post;
};
