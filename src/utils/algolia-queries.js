const escapeStringRegexp = require("escape-string-regexp")

const indexName = `services_dev`

const pageQuery = `{
    pages: allServicesJson {
        edges {
          node {
            _name
            _description
          }
        }
      }
}`

function pageToAlgoliaRecord({ node: { _name, _description, ...rest } }) {
  return {
    objectID: _name,
    name: _name,
    description: _description,
    ...rest,
  }
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]

module.exports = queries