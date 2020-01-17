import React from "react"
import { Link } from "gatsby"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
// import headerStyles from '../styles/header.module.scss'

const Navigation = () => {
  return (
        
        <Navbar collapseOnSelect expand="lg" className={"navbar-light"}>
            <Link  to="/">Laura Van Haecke</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
            <Link className={"nav-link " } to="/projects">Projects</Link>
            {/* <Link className={"nav-link " + headerStyles.navlink} to="/blog">Blog</Link> */}
            <Link className={"nav-link " } to="/resume">News</Link>
            <Link className={"nav-link " } to="/contact">Contact</Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
  )
}

export default Navigation
