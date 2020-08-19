import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

// import RightArrowGreen from '../img/RightArrowGreen'
import RightArrowWhite from '../img/RightArrowWhite'

const Footer_CS = ({ data }) => {
  const {
    footer: footer_data,
    header: header_data,
  } = data.allMarkdownRemark.edges[0].node.frontmatter
  return (
    <div className="footer-container px-32 py-8">
      {!!header_data.nav.length && (
        <div className="footer-menu-section-wrapper flex flex-row flex-wrap justify-between mb-8">
          {header_data.nav.map((menu) => (
            <div className="footer-menu-section" key={menu.main_menu}>
              <div className="footer-main-menu-wrapper">
                <div className="main-menu lowercase text-28px">
                  {menu.has_submenu ? (
                    <span>
                      {' '}
                      <b>{menu.main_menu.slice(0, 4)}</b>
                      {menu.main_menu.slice(4)}
                    </span>
                  ) : (
                    menu.main_menu
                  )}
                </div>
              </div>
              {menu.has_submenu && (
                <div className="footer-sub-menu-wrapper mt-4">
                  {menu.sub_menu.map((sub_menu) => (
                    <div className="sub-menu" key={sub_menu.sub_menu_title}>
                      {sub_menu.sub_menu_title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-between flex-wrap">
        
        <div className="subscribe-wrapper w-50p h-80">
          <div className="subscribe-title text-28px font-bold mb-4">Subscribe for latest news</div>
          <div className="subscribe-input-wrapper flex flex-row">
            <input
              type="text"
              className="rounded-17 rounded-r-none  p-4 w-full outline-none"
              placeholder="Enter email address here"
            />
            <div
              className="submit w-90 rounded-l-none rounded-17 "
              style={{ backgroundColor: '#009247' }}
            >
              <RightArrowWhite />
            </div>
          </div>
        </div>

        {footer_data.social_follower && (
          <div className="social_follower_container">
            <div className="social_text text-28px font-bold mb-4">
              {footer_data.social_follower.title}
            </div>
            <div className="social_media_container flex">
              {footer_data.social_follower.logo.map((logo) => (
                <div className="social-media-icon" key={logo.title}>
                  <a href={logo.url}>
                    <img
                      className="w-80 h-80 mr-4"
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
