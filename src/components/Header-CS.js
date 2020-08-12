import React from 'react';
import {graphql} from 'gatsby';
import PropTypes from 'prop-types';

const Header = ({data}) => {
 console.log(data);   
 return <div>Hello</div>
};


export const SiteQuery = graphql`
  query SiteConfig($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`

export default Header;