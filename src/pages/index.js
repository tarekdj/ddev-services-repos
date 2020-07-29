import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to DDEV contrib</h1>
    <h2>Getting started</h2>
    <h3>Install</h3>
    <h3>Explore</h3>
    <Link to="/services/">Go to services</Link> <br />
    <h2>Contribute</h2>
  </Layout>
)

export default IndexPage
