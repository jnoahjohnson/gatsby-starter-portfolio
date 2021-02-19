/* eslint-disable react/prop-types */
import { Link } from 'gatsby'
import React from 'react'

const BlogPostCard = ({ title, slug }) => (
  <Link to={slug}>
    <h1>{title}</h1>
  </Link>
)

export default BlogPostCard
