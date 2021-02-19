/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { PageHeader } from '../styles/PageHeader'
import { PageBody } from '../styles/PageBody'
import BlogPostCard from '../components/BlogPostCard'

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  console.log('psots', edges)
  const posts = edges.map(post => (
    <BlogPostCard
      title={post.node.frontmatter.title}
      slug={post.node.frontmatter.slug}
    />
  ))

  return (
    <Layout>
      <SEO title="Blog" />
      <PageHeader>
        <h1>Blog</h1>
      </PageHeader>
      <PageBody>
        <h2>Here is some blog content</h2>
        {posts}
      </PageBody>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(blog-posts)/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`
