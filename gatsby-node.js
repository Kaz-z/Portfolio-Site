/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  const result = await graphql(`
    {
      allMdx {
        edges {
          node {
            id
            internal  {
              contentFilePath
            }
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  // Create project pages.
  const projects = result.data.allMdx.edges;

  const projectsTemplate = require.resolve("./src/templates/projectPage.jsx");

  projects.forEach(({ node }, index) => {
    createPage({
      path: node.frontmatter.slug,
      component: `${projectsTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id },
    });
  });
}
