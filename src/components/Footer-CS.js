import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Footer_CS = ({ data }) => {
  const {footer:footer_data,header:header_data} = data.allMarkdownRemark.edges[0].node.frontmatter;
  console.log(footer_data);
  console.log(header_data);
  return (
    <div className="footer-container">
      {footer_data.social_follower && (
        <div className="social_follower_container">
          <div className="social_text">{footer_data.social_follower.title}</div>
          <div className="social_media_container">
            {footer_data.social_follower.logo.map((logo) => (
              <div className="social-media-icon" key={logo.title}>
                <a href={logo.url}>
                  <img
                    src={logo.image.childImageSharp.fluid.src}
                    alt={logo.title}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

const Footer_Wrapper = () => {
  return (
    <StaticQuery
      query={query}
      render={(data) => <Footer_CS data={data} />}
    ></StaticQuery>
  )
}

export default Footer_Wrapper

export const query = graphql`
  query FooterConfig {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "site-config" } } }
    ) {
      edges {
        node {
          frontmatter {
            header {
              nav {
                main_menu
                has_submenu
                path
                sub_menu {
                  path
                  sub_menu_title
                }
              }
            }
            footer {
              social_follower {
                title
                logo {
                  title
                  url
                  image {
                    childImageSharp {
                      fluid {
                        src
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`