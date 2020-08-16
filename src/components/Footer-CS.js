import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Footer_CS = ({ data }) => {
  const {
    footer: footer_data,
    header: header_data,
  } = data.allMarkdownRemark.edges[0].node.frontmatter
  return (
    <div className="footer-container">
      {!!header_data.nav.length && (
        <div className="footer-menu-section-wrapper">
          {header_data.nav.map((menu) => (
            <div className="footer-menu-section" key={menu.main_menu}>
              <div className="footer-main-menu-wrapper">
                <div className="main-menu">
                  {menu.has_submenu
                    ? <span> <b>{menu.main_menu.slice(0, 4)}</b>{menu.main_menu.slice(4)}</span>
                    : menu.main_menu
                  }
                </div>
              </div>
              {menu.has_submenu && (
                <div className="footer-sub-menu-wrapper">
                  {menu.sub_menu.map((sub_menu) => (
                    <div className="sub-menu" key={sub_menu.sub_menu_title}>{sub_menu.sub_menu_title}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

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
