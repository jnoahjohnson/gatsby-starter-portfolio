import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { PageHeader } from '../styles/PageHeader'
import { PageBody } from '../styles/PageBody'

const IndexPage = () => (
  <Layout>
    <SEO title="About Me" />
    <PageHeader>
      <h1>About</h1>
    </PageHeader>
    <PageBody>
      <h1>Hello There!</h1>
      <p>This is my portfolio</p>
    </PageBody>
  </Layout>
)

export default IndexPage
