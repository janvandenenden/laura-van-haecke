import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import ProjectOverview from "../components/ProjectOverview";
import "../styles/index.scss";

export const query = graphql`
  query {
    file(relativePath: { eq: "img/laura.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const indexPage = props => {
  console.log(props);
  return (
    <Layout>
      <Jumbotron fluid className={"hero"}>
        <Container style={{display:'flex'}}>
          <Row>
          <Col lg={4} className="hero-image">
              <Img
                fluid={{
                  ...props.data.file.childImageSharp.fluid,
                  aspectRatio: 3 / 4
                }}
                objectFit="contain"
                objectPosition="10% 100%"
                alt="image of Laura"
                
              />
            </Col>
            <Col lg={8} className={"hero-text"}>
              <h1>Laura Van Haecke</h1>
              <h4>Film Director & Screen Writer</h4>
              <p className="lead">
                Laura is a young Brussels based writer & director. She mastered
                at the Brussels Royal Institute of Theatre, Cinema and Sound.
                In 2015 Laura graduated Cum Laude with the short 'Two Opposed'.
                Her graduation film travelled to numerous national and
                international film festivals (Oscar-qualifying International
                Short Film Festival Leuven, Oscar-qualifying FEST Portugal and
                others). She has now taken her first steps as a new director and
                has already several short films, music videos and commercials in
                her portfolio. She combines working in the film industry with a
                half time job as a teacher, giving art classes and workshops for
                kids and teens. This gave her a lot of inspiration during the
                writing process of her upcoming short film ‘Howling’.
              </p>
              <Link to="/#projects"><Button>portfolio</Button></Link>
            </Col>
            
          </Row>
        </Container>
      </Jumbotron>

<div id="projects" className={"projects"}>
      <div className="container projects">
        <ProjectOverview />
      </div>
      </div>
    </Layout>
  );
};
export default indexPage;
