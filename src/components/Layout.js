import React from 'react'
import { Helmet } from 'react-helmet'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

import Header_CS from './Header-CS'
import Footer_CS from './Footer-CS'

import AppContextProvider, { AppContext } from '../context/index'

const TemplateWrapper = ({ children, blogPost }) => {
  const { title, description } = useSiteMetadata()
  return (
    <AppContextProvider>
      <div>
        <AppContext.Consumer>
          {({ navbarActiveClass }) => (
            <Helmet>
              <html lang="en" className={navbarActiveClass} />
              <title>{title}</title>
              <meta name="description" content={description} />

              <link
                rel="apple-touch-icon"
                sizes="180x180"
                href={`${withPrefix('/')}img/apple-touch-icon.png`}
              />
              <link
                rel="icon"
                type="image/png"
                href={`${withPrefix('/')}img/favicon-32x32.png`}
                sizes="32x32"
              />
              <link
                rel="icon"
                type="image/png"
                href={`${withPrefix('/')}img/favicon-16x16.png`}
                sizes="16x16"
              />

              <link
                rel="mask-icon"
                href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
                color="#ff4400"
              />
              <meta name="theme-color" content="#fff" />

              <meta property="og:type" content="business.business" />
              <meta property="og:title" content={title} />
              <meta property="og:url" content="/" />
              <meta
                property="og:image"
                content={`${withPrefix('/')}img/og-image.jpg`}
              />
            </Helmet>
          )}
        </AppContext.Consumer>

        {/*TODO handler for html referncing..  */}
        <Header_CS />
        <div>{children}</div>

        <Footer_CS />
      </div>
    </AppContextProvider>
  )
}

export default TemplateWrapper
