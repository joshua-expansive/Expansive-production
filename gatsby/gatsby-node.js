import path from 'path';

turnEssaysIntoPages = async ({ graphql, actions }) => {
  // 1. Get a template for this page
  const essayTemplate = path.resolve('src/templates/Essay.js');
  // 2. Query all essags
  const { data } = await graphql(`
    query {

    }
  `);
  // 3. Loop over each essay and create a page for each essay
};

exports.createPages = async (param) => {
  // Create pages dynamically
  // 1. Essays
  await turnEssaysIntoPages(params);
  // 2. Classes
  // 3. Design Projects
};
