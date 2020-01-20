import React from "react"
import Layout from "../components/Layout"
import Container from "react-bootstrap/Container"
import ProjectOverview from '../components/ProjectOverview'
import projectStyles from '../styles/projectOverview.module.scss'
import "../styles/index.scss";


const projectPage = () => {
  return (
    <Layout>
        <div className={"projects"}>
        <Container className={projectStyles.content + " projects" }>
        <ProjectOverview />
      </Container>
        </div>
    </Layout>
  )
}

export default projectPage