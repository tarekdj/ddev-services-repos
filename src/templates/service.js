import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"


const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.servicesJson
  const serviceName = post._name

  return (
    <Layout>
        <SEO title={serviceName} />
        <h1>{serviceName}</h1>
        <pre>ddev add-service {serviceName}</pre>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
query ServiceBySlug ($slug: String!) {
    servicesJson(fields: {slug: {eq: $slug}}) {
        _name
      }
  }
`