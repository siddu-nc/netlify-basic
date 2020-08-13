import React from 'react'
import { StaticQuery,graphql,Link } from 'gatsby'
import PropTypes, { shape } from 'prop-types'

const Footer_CS = ({data}) => {
  const footer_data = data.allMarkdownRemark.edges[0].node.frontmatter.footer;
  console.log(footer_data);
  return <div className="footer-container">
   {
     footer_data.social_follower && (
       <div className="social_follower_container">
         <div className="social_text">
          {footer_data.social_follower.title}
         </div>
         <div className="social_media_container">
          {
            footer_data.social_follower.logo.map((logo) =>(
              <div className="social-media-icon" key={logo.title}>
                <a href={logo.url} >
                  <img src={logo.image.childImageSharp.fluid.src}  alt={logo.title}/>
                </a>
              </div>
            ))
          }
         </div>
       </div>
     )
   }
  </div>
}


const Footer_Wrapper = () =>{
  return <StaticQuery query={query} render= {(data) => <Footer_CS data={data}/>}>

  </StaticQuery>
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
            templateKey
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