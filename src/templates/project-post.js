import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"


export const query = graphql`
query($slug: String) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    frontmatter {
      title
      date
      crew
      type
    }
  }
}
`
 
const Project = props => {
  console.log(props)
  return (
    <Layout>
        <div >
          <h1>{props.data.markdownRemark.frontmatter.title}</h1>
          <p>{props.data.markdownRemark.frontmatter.date}</p>
        </div>
        
       
    </Layout>
  )
}

export default Project
