import React from "react"
import MainNav from "./Header"
import Footer from "./Footer"
// import "../styles/index.scss"
// import layoutStyles from "../styles/layout.module.scss"


const Layout = props => {
  return (
    <React.Fragment>

        <MainNav />
        {props.children}
      <Footer />
    </React.Fragment>
  )
}

export default Layout