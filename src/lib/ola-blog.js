import { gql } from '@apollo/client';
import { getApolloClient } from '@/lib/apollo-client';

export async function getPostsSegment(endCursor = null, categoryName = null) {
  let condition = `where: {orderby: {field: DATE, order: DESC}}, after: "${endCursor}", first: 5`;

  if (categoryName) {
    condition = `where: {orderby: {field: DATE, order: DESC}, categoryName: "${categoryName}"}, after: "${endCursor}", first: 5`;
  }

  const allBlogPostsQuery = gql`
    query getAllBlogPosts {
      posts(${condition}) {
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
        nodes {
          date
          excerpt(format: RENDERED)
          slug
          title
          link
          categories {
            nodes {
              name
              slug
            }
          },
          featuredImage {
            node {
              altText
              mediaDetails {
                sizes {
                  sourceUrl
                  width
                  height
                }
                file
              }
              srcSet(size: MEDIUM_LARGE)
            }
          }
        }
      }
    }
  `;
  const apolloClient = getApolloClient();
  const res = await apolloClient.query({ query: allBlogPostsQuery });
  const posts = res.data.posts;

  return posts;
}

export async function getSinglePost(slug) {
  const singlePostQuery = gql`
    query getSinglePost {
      post(idType: SLUG, id: "${slug}") {
        id
        slug
        title
        categories {
          edges {
            node {
              id
              name
              slug
            }
          }
        }
        date
        featuredImage {
          node {
            altText
            link
            mediaDetails {
              file
              width
              sizes {
                file
                sourceUrl
                width
              }
            }
          }
        }
        content(format: RENDERED)
        excerpt(format: RENDERED)
      }
    }
  `;

  const apolloClient = getApolloClient();
  const res = await apolloClient.query({ query: singlePostQuery });
  const post = res.data.post;

  return post;
}

export async function getPostSlugs() {
  const slugsQuery = gql`
    query getPostSlugs {
      posts {
        nodes {
          slug
        }
      }
    }
  `;

  const apolloClient = getApolloClient();
  const res = await apolloClient.query({ query: slugsQuery });
  const slugsArr = res.data.posts.nodes;

  return slugsArr;
}

export async function getAllCategories() {
  const slugsQuery = gql`
    query getAllCategories {
      categories {
        nodes {
          slug
          name
          count
        }
      }
    }
  `;

  const apolloClient = getApolloClient();
  const res = await apolloClient.query({ query: slugsQuery });
  const slugsArr = res.data.categories.nodes;

  return slugsArr;
}

// ===============   SESSIONS ===============

export async function getSessionsSegment(endCursor = null) {
  const condition = `where: {orderby: {field: DATE, order: DESC}}, after: "${endCursor}", first: 5`;

  const sessionsSegmentQuery = gql`
    query getSessionsSegment {
      sessions(${condition}) {
        nodes {
          title
          uri
          status
          slug
          date
          contentType {
            node {
              name
            }
          }
          featuredImage {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          main {
            sessionType {
              nodes {
                name
                slug
              }
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
      }
    }
  `;

  const apolloClient = getApolloClient();
  const res = await apolloClient.query({ query: sessionsSegmentQuery });
  const sessionsSegmentData = res.data.sessions;

  return sessionsSegmentData;
}

export async function getSessionSlugs() {
  const slugsQuery = gql`
    query getSessionSlugs {
      sessions {
        nodes {
          slug
        }
      }
    }
  `;

  const apolloClient = getApolloClient();
  const res = await apolloClient.query({ query: slugsQuery });
  const slugsArr = res.data.sessions.nodes;

  return slugsArr;
}

export async function getSingleSession(slug) {
  const singleSessionQuery = gql`
    query getSingleSession {
      session(idType: SLUG, id: "${slug}") {
        id
        date
        slug
        title
        gallery{
          gallery1 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery2 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery3 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery4 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery5 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery6 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery7 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery8 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery9 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery10 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery11 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery12 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery13 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery14 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery15 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery16 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery17 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery18 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery19 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery20 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery21 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery22 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery23 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery24 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery25 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery26 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery27 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery28 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery29 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery30 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery31 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery32 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery33 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery34 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery35 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery36 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery37 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery38 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery39 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery40 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery41 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery42 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery43 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery44 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery45 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery46 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery47 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery48 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery49 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          gallery50 {
            node {
              altText
              caption
              srcSet
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
        }
        main {
          description
          sessionType {
            nodes {
              name
              slug
            }
          }
        }
        featuredImage {
          node {
            altText
            caption
            srcSet
            sourceUrl
            mediaDetails {
              width
              height
            }
          }
        }
        square {
          text
          squareSectionHeading
          imageA {
            node {
              altText
              srcSet
              sourceUrl
              caption
            }
          }
          imageB {
            node {
              altText
              srcSet
              sourceUrl
              caption
            }
          }
          imageC {
            node {
              altText
              srcSet
              sourceUrl
              caption
            }
          }
        }
        testimonial {
          testimonialHeading
          content
          name
        }
        middleBigImage {
          middleFullWidthImage {
            node {
              altText
              sourceUrl
              srcSet
              caption
            }
          }
        }
        lastBigImage {
          lastFullWidthImage {
            node {
              altText
              caption
              srcSet
              sourceUrl
            }
          }
        }
        octagon {
          rightText
          rightTitle
          leftText
          leftTitle
          leftEndImage {
            node {
              altText
              srcSet
              sourceUrl
              caption
            }
          }
          leftMiddleImage {
            node {
              altText
              srcSet
              sourceUrl
              caption
            }
          }
          leftTopImage {
            node{
              altText
              srcSet
              sourceUrl
              caption
            }
          }
          rightEndImage {
            node{
              altText
              srcSet
              sourceUrl
              caption
            }
          }
          rightMiddleImage {
            node{
              altText
              srcSet
              sourceUrl
              caption
            }
          }
          rightTopImage {
            node{
              altText
              srcSet
              sourceUrl
              caption
            }
          }
        }
      }
    }
  `;

  const apolloClient = getApolloClient();
  const res = await apolloClient.query({ query: singleSessionQuery });
  const session = res.data.session;

  return session;
}

//  ======== type | Sessions categories
//
// type popular id   -->   dGVybTo5
//

export async function getPopularSessions() {
  const commonTypesSessions = gql`
    query getSessionSlugs {
      types(where: { include: "dGVybTo5" }) {
        nodes {
          sessions {
            nodes {
              title
              uri
              status
              slug
              date
              contentType {
                node {
                  name
                }
              }
              featuredImage {
                node {
                  altText
                  caption
                  srcSet
                  sourceUrl
                  mediaDetails {
                    width
                    height
                  }
                }
              }
              main {
                description
                heroLabel
                order
                sessionType {
                  nodes {
                    name
                    slug
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const apolloClient = getApolloClient();
  const res = await apolloClient.query({ query: commonTypesSessions });
  const commonSessions = res.data.types.nodes[0].sessions.nodes;

  return commonSessions;
}
