import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const ProjectOverview = () => {
    const data = useStaticQuery(graphql`
      query {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/(projects)/" } }
        ) {
          edges {
            node {
              excerpt
              frontmatter {
                title
                date
               
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `)
    const ProjectOverviewList = data.allMarkdownRemark.edges.map(x => {
        console.log(x)
      return (
        <Col>
          <Link to={"projects"+x.node.fields.slug}><p>{x.node.frontmatter.title}</p></Link>
        </Col>
      )
    })
    return (
      <div>
        <Row>{ProjectOverviewList}</Row>
      </div>
    )
  }
  
  export default ProjectOverview