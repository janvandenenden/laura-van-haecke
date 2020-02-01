import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import footerStyles from "../styles/footer.module.scss";
import { FaInstagram, FaVimeo, FaImdb } from "react-icons/fa";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.socmedia}>
        <a href="https://vimeo.com/lauravanhaecke" target="_blank"> <FaVimeo /></a>
        <a href="https://www.imdb.com/name/nm2142298/" target="_blank">  <FaImdb /></a>
        <a href="https://www.instagram.com/lauravanhaecke/" target="_blank">  <FaInstagram /></a>
      </div>
      <a href="https://www.w3schools.com" target="_blank">
        &copy; 2020
      </a>
    </footer>
  );
};

export default Footer;
