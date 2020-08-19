import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import NavBar_CS from './NavBar-CS'

const Header_CS = ({ data }) => {
  const header_data = data.allMarkdownRemark.edges[0].node.frontmatter.header
  return (
    <div className="header-container .bg-transparent">
      <div className="header-logo-container absolute z-1 top-3 left-7 w-269 h-92">
        <img
          className="w-full"
          src={header_data.logo.childImageSharp.fluid.src}
        />
      </div>

      <NavBar_CS />
    </div>
  )
}

const Header_Wrapper = () => {
  return (
    <StaticQuery
      query={SiteQuery}
      render={(data) => <Header_CS data={data} />}
    ></StaticQuery>
  )
}

export default Header_Wrapper

export const SiteQuery = graphql`
  query HeaderConfig {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "site-config" } } }
    ) {
      edges {
        node {
          frontmatter {
            templateKey
            header {
              logo {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
            footer {
              social_follower {
                title
                logo {
                  title
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`
