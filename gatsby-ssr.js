import React from 'react'
import Layout from 'components/layout'

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)
