import React, { useState } from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'

import Menu from '../img/Menu'
import Close from '../img/Close'

const NavBarComponent = () => {
  return (
    <StaticQuery
      query={NavBarQuery}
      render={(data) => <NavBar data={data} />}
    ></StaticQuery>
  )
}

const NavBar = ({ data }) => {
  const [isNavOpen, toggleNavigation] = useState(false)
  const [navbarActiveClass, toggleNavbarActiveClass] = useState('')

  const onClickHandleNavigation = () => {
    toggleNavigation(!isNavOpen)
    toggleNavbarActiveClass(!navbarActiveClass ? 'active' : '')
  }
  const Nav_Menu = data.allMarkdownRemark.edges[0].node.frontmatter.header.nav
  return (
    <>
      <div className="navigation-menu-toggle-wrapper">
        {isNavOpen ? (
          <Close handleClickFunction={onClickHandleNavigation} />
        ) : (
          <Menu handleClickFunction={onClickHandleNavigation} />
        )}
      </div>
      <div className={`navigation-container ${navbarActiveClass}`}>
        <div className={'navigation-menu-wrapper'}>
          {Nav_Menu.map((menu) => (
            <div className="main-menu-wrapper" key={menu.main_menu}>
              <div className="main-menu-title">
                {!menu.has_submenu ? (
                  <Link to={`${menu.path}`}>{menu.main_menu}</Link>
                ) : (
                  <span>{menu.main_menu}</span>
                )}
              </div>
              {menu.has_submenu &&
                menu.sub_menu.map((sub_menu) => (
                  <div className="sub-menu" key={sub_menu.sub_menu_title}>
                    <Link to={`${sub_menu.path}`}>
                      {sub_menu.sub_menu_title}
                    </Link>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export const NavBarQuery = graphql`
  query NavBarQuery {
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
          }
        }
      }
    }
  }
`

export default NavBarComponent
