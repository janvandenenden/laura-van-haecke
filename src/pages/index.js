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
import ProjectOverview from '../components/ProjectOverview'

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "laura.jpg" }) {
      childImageSharp {
        fluid{
            ...GatsbyImageSharpFluid
        } 
      }
    }
  }
`;

const indexPage = (props) => {
    console.log(props.data.fileName.childImageSharp.fluid)
  return (
    <Layout>
      <Jumbotron fluid>
        <Container>
          <h1 className="display-3">Laura Van Haecke</h1>
          <h4>Film Director & Screen Writer</h4>
          <p className="lead">
            Laura is a young Brussels based writer & director. She mastered at
            the Brussels Royal Institute of Theatre, Cinema and Sound. In 2015
            Laura graduated Cum Laude with the short 'Two Opposed'. Her
            graduation film travelled to numerous national and international
            film festivals (Oscar-qualifying International Short Film Festival
            Leuven, Oscar-qualifying FEST Portugal and others). She has now
            taken her first steps as a new director and has already several
            short films, music videos and commercials in her portfolio. She
            combines working in the film industry with a half time job as a
            teacher, giving art classes and workshops for kids and teens. This
            gave her a lot of inspiration during the writing process of her
            upcoming short film ‘Howling’.
          </p>
           <Img
              fluid={{...props.data.fileName.childImageSharp.fluid, aspectRatio: 16 / 9}}
              objectFit="contain"
              objectPosition="50% 50%"
              alt="image of Laura"
            /> 
        </Container>
      </Jumbotron>

      <div className="container">
        <h1>Projects</h1>
        <ProjectOverview />
      </div>
    </Layout>
  );
};
export default indexPage;
