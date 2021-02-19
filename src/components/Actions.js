import { navigate } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const ActionStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
`

const ActionItem = styled.button`
  border: none;
  background: var(--dark, blue);
  color: var(--light, white);
  font-size: 1.25em;
  padding: 7.5px 10px;
  transition: all 0.25s;

  &:hover {
    -webkit-box-shadow: -2px 2px 0px 0px var(--accent, white);
    -moz-box-shadow: -2px 2px 0px 0px var(--accent, white);
    box-shadow: -2px -2px 0px 0px var(--accent, white);
    transition: all 0.25s;
  }
`

const Actions = () => (
  <ActionStyles>
    <ActionItem onClick={() => navigate('/projects')}>My Projects</ActionItem>
    <ActionItem onClick={() => navigate('/blog')}>My Blog</ActionItem>
    <ActionItem onClick={() => navigate('/about')}>About Me</ActionItem>
  </ActionStyles>
)

export default Actions
