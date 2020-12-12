import path from 'path';

async function turnPostsIntoPages({ graphql, actions }) {
  // 1. Get a template for the page
  const pageTemplate = path.resolve('./src/templates/Blog.js');
  // 2. Query all pages
  const { data } = await graphql(`
    query {
      posts: allSanityPost {
        nodes {
          title
        }
      }
    }
  `);
  console.log(data);
  // 3. Loop over each Post and create a page for that Post
  data.posts.nodes.forEach((post) => {
    actions.createPage({
      path: `blog/${post.title}`,
      component: pageTemplate,
    });
  });
}

export async function createPages(params) {
  // Create blog pages dynamicially
  await turnPostsIntoPages(params);
}
