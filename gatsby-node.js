/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

// Create a page for each project
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const projectPageTemplate = require.resolve(
    `./src/templates/projectTemplate.js`
  )

  const projects = await graphql(`
    query MyQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(projects)/" } }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`)

  const blogPosts = await graphql(`
    query MyQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(blog-posts)/" } }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (projects.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  projects.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: projectPageTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    })
  })

  // Handle errors
  if (blogPosts.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  blogPosts.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    })
  })
}
