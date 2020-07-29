/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const fs = require('fs');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/service.js`)
  return graphql(`
    query loadPagesQuery ($limit: Int!) {
        allServicesJson (limit: $limit) {
            edges {
              node {
                _name
              }
            }
        }
    }
  `, { limit: 1000 }).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.allServicesJson.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `${edge.node._name}`,
        component: blogPostTemplate,
        context: {
            slug: edge.node._name,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `ServicesJson`) {
      createNodeField({
        name: `slug`,
        node,
        value: node._name,
      })
    }
  }
