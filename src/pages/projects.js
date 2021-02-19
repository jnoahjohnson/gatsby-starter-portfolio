/* eslint-disable react/prop-types */
import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { PageHeader } from '../styles/PageHeader'
import { PageBody } from '../styles/PageBody'
import ProjectCard from '../components/ProjectCard'

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const projects = edges.map(project => (
    <ProjectCard
      title={project.node.frontmatter.title}
      slug={project.node.frontmatter.slug}
    />
  ))

  return (
    <Layout>
      <SEO title="Projects" />
      <PageHeader>
        <h1>Projects</h1>
      </PageHeader>
      <PageBody>
        <h2>Here are some projects</h2>
        {projects}
      </PageBody>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query GetProjects {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(projects)/" } }) {
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
