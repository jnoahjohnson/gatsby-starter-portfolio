import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const HeaderStyles = styled.header`
  z-index: 100;
  background: none;
  color: var(--light, white);
  padding: 15px 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;

  h1 {
    margin-bottom: 15px;
  }

  width: 100%;

  @media (min-width: 740px) {
    h1 {
      margin-bottom: 0;
    }

    padding: 15px var(--contentPadding, 25px);
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

const NavStyles = styled.nav`
  display: flex;
  flex-direction: row;
  & > * {
    margin-left: 10px;
  }

  &:nth-child(0) {
    margin-left: 0;
  }

  @media (min-width: 740px) {
    & > * {
      margin-left: 20px;
    }
  }
`

const Header = ({ siteTitle }) => (
  <HeaderStyles>
    <h1 style={{ margin: 0 }}>
      <Link to="/">{siteTitle}</Link>
    </h1>
    <NavStyles>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/about">About Me</Link>
    </NavStyles>
  </HeaderStyles>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
