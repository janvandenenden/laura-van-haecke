import React from "react";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import projectOverview from "../styles/projectOverview.module.scss";

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
              type
              img {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  const ProjectOverviewList = data.allMarkdownRemark.edges.map(x => {
    console.log(x);
    return (
      <Col sm={12} lg={6} style={{paddingRight:0}}>
        <Link to={x.node.fields.slug} className={projectOverview.link}>
          <div
            className={projectOverview.item}
            style={{
              backgroundImage: `url(${x.node.frontmatter.img[0].childImageSharp.fluid.src})`
            }}
          >
            <p className={projectOverview.itemText}>
              {x.node.frontmatter.title}
            </p>
            <p className={projectOverview.itemText}>
              {x.node.frontmatter.type}
            </p>
          </div>
        </Link>
      </Col>
    );
  });
  return (
    <React.Fragment>
      <h1>Projects</h1>
      <Row style={{marginRight:0}}>{ProjectOverviewList}</Row>
    </React.Fragment>
  );
};

export default ProjectOverview;
