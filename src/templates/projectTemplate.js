/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import { PageHeader } from '../styles/PageHeader'
import { PageBody } from '../styles/PageBody'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <PageHeader>
        <h1>{frontmatter.title}</h1>
      </PageHeader>
      <PageBody>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <Link to="/projects"> &larr; Go Back To Projects</Link>
      </PageBody>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`
