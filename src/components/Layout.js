import React from 'react'
import { Helmet } from 'react-helmet'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

import Header_CS from './Header-CS'
import Footer_CS from './Footer-CS'
import HeroBanner from './HeroBanner'

import AppContextProvider, { AppContext } from '../context/index'

const HeroBannerData ={
  title:"Ensuing a better future",
  subTitle:"through genuine traceability and verification tools",
  backgroundImg: "https://cdn-sharing.adobecc.com/id/urn:aaid:sc:US:6c086d48-941b-45a4-bfeb-5307ce8901b4;version=0?component_id=fdd423f7-26dc-449e-a6ae-d53c4bf673cd&api_key=CometServer1&access_token=1597822443_urn%3Aaaid%3Asc%3AUS%3A6c086d48-941b-45a4-bfeb-5307ce8901b4%3Bpublic_b5d233312129b8ad6dc9788123767278221ae5c5"
}

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
        <HeroBanner heroBanner={HeroBannerData} />
        <div>{children}</div>

        <Footer_CS />
      </div>
    </AppContextProvider>
  )
}

export default TemplateWrapper
