import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const OwnerPageComponent = (props) => {
  console.log(props)
  return (
    <>
      <h1>owner-page</h1>
      <div>{props.firstname}</div>
      <div>{props.lastname}</div>
      <div>Date of birth: {props.DOB}</div>
    </>
  )
}

const OwnerPage = ({ data }) => {
  const {
    markdownRemark: { frontmatter: post },
  } = data
  return (
    <Layout>
      <OwnerPageComponent {...post} />
    </Layout>
  )
}

OwnerPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        firstname: PropTypes.string,
        lastname: PropTypes.string,
        DOB: PropTypes.string,
      }),
    }),
  }),
}

export const ownerQuery = graphql`
  query OwnerPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        DOB
        firstname
        lastname
        description
      }
    }
  }
`

export default OwnerPage
