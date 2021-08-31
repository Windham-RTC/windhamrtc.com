import React from 'react'
import Layout from 'components/layout'

import '@fontsource/montserrat'
import '@fontsource/open-sans'
import 'css/index.css'

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

export const onInitialClientRender = () => {
  console.log(`%c Windham RTC`, 'color: blue;')
}
