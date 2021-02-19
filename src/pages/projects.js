import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { PageHeader } from '../styles/PageHeader'
import { PageBody } from '../styles/PageBody'

const IndexPage = () => (
  <Layout>
    <SEO title="Projects" />
    <PageHeader>
      <h1>Projects</h1>
    </PageHeader>
    <PageBody>Here is some info about my different projects</PageBody>
  </Layout>
)

export default IndexPage
