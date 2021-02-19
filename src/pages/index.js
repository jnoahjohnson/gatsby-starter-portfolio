import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Hero } from '../styles/Hero'
import Actions from '../components/Actions'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <h1>Hello World!</h1>
      <h2>Welcome to my portfolio</h2>
      <Actions />
    </Hero>
  </Layout>
)

export default IndexPage
