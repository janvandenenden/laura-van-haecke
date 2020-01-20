import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Img from "gatsby-image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import projectStyles from "../styles/project.module.scss";
import Carousel from "react-bootstrap/Carousel";


export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        type
        url
        info
        img {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

const Project = props => {
  console.log(props);
  const description = () => {
    const result = props.data.markdownRemark.frontmatter.info.map(x => {
      return(
        <p>{x}</p>
      )
    })
    return result
  }
  return (
    <Layout>
      <Container className={projectStyles.content}>
        <Row className={projectStyles.row}>
          <Col className={projectStyles.title}>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <h2>{props.data.markdownRemark.frontmatter.type}</h2>
          </Col>
        </Row>

        <Row className={projectStyles.row}>
          <Col>
          <div style={{padding:"56.25% 0 0 0",position:"relative"}}><iframe src={`${props.data.markdownRemark.frontmatter.url}?portrait=0`} style={{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}} frameBorder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>
          </Col>
        </Row>

        <Row className={projectStyles.row}>
          <Col md={4} className={projectStyles.information} >
            <div><p><span>Type</span></p> <p>{props.data.markdownRemark.frontmatter.type}</p></div>
            <div><p><span>Description</span></p>{description()}</div>
          </Col>
          <Col md={8}>
          
          <Carousel>
          <Carousel.Item>
            <Img
              className="d-block w-100"
              fluid={{
                ...props.data.markdownRemark.frontmatter.img[0].childImageSharp
                  .fluid
              }}
              alt="First slide"
            />
          </Carousel.Item>
          </Carousel>
            
            {/* <Img
              fluid={{
                ...props.data.markdownRemark.frontmatter.img[0].childImageSharp
                  .fluid,
                aspectRatio: 16 / 9
              }}
            /> */}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Project;
