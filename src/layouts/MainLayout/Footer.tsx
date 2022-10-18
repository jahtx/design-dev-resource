import * as React from "react";
import config from "../../../data/siteConfig";

const Footer = () => {
  const { copyright } = config;
  if (!copyright) {
    return null;
  }
  return (
    <footer className="footer text-center pt-7-rem pt-3 pb-3">
      <span className="footer__text">{copyright}</span>
    </footer>
  );
};

export default Footer;
