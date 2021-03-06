import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const Header_CS = ({ data }) => {
  const header_data = data.allMarkdownRemark.edges[0].node.frontmatter.header;
  console.log(data);
  return (
    <div className="header-container">
      <div className="header-logo-container">
        <img src={header_data.logo.childImageSharp.fluid.src} />
      </div>
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