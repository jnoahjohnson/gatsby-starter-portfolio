/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import styled, { createGlobalStyle } from 'styled-components'
import Header from './header'
// import "./layout.css"

// Global styles for styled components
const GlobalStyle = createGlobalStyle`
  :root {
    --dark: #1e1e1e;
    --light: #ffffff;
    --gray: #535353;
    --accent: #ffffff;
    --contentPadding: 25px;
    --maxWidth: 1200px;
  }
  html {
    padding: 0;
    margin: 0;
  }

  body {
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

const FooterStyles = styled.footer`
  background: var(--dark, black);
  padding: 15px;
  text-align: center;
  color: white;
  font-size: 0.75em;
`

// Layout for the website
const Layout = ({ children }) => {
  // Get data about the site from the site metadata that is found in gatsby-config.js
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
        <FooterStyles>Hello!</FooterStyles>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
