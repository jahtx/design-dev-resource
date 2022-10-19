import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import navItemsFile from "./navItems.json";
import { nanoid } from "nanoid";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import "./NavTitleBit.scss";

type NavItemType = {
  linkName: string;
  url: string;
  ariaLabel: string;
};
const navItems: Array<NavItemType> = navItemsFile.navItems;

const NavTitleBit = () => {
  const data = ImageQuery();
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      <div className="designDevResourceNewMob">
        <div className="navTitleBitMob d-flex align-items-center justify-content-center m-0 p-1">
          <nav className="hamburgerCont d-flex align-items-center justify-content-center">
            <button
              className={
                "hamburger hamburger--vortex-r " +
                (isActive ? "is-active" : null)
              }
              onClick={handleToggle}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </nav>

          <header>
            <h1 className="m-0 p-0">
              <div className="designDevResourceNewMob__imgCont  d-flex align-items-center justify-content-center">
                <GatsbyImage
                  image={getImage(data.designDevResourceLogoDesktop)}
                  alt="Design Dev Resource"
                  objectFit="contain"
                  className="designDevResourceDesktop__img"
                />
              </div>
            </h1>
          </header>
        </div>
        <div className="slideMenu">Here</div>
      </div>
      <div className="designDevResourceDesktop">
        <div className="navTitleBit d-flex align-items-center justify-content-center m-0 p-0">
          <header>
            <h1 className="m-0 p-0">
              <div className="designDevResourceDesktop__imgCont  d-flex align-items-center justify-content-center">
                <GatsbyImage
                  image={getImage(data.designDevResourceLogoDesktop)}
                  alt="Design Dev Resource"
                  objectFit="contain"
                  className="designDevResourceDesktop__img"
                />
              </div>
            </h1>
          </header>
        </div>
      </div>
      <div className="navSpacer"></div>
    </>
  );
};

export default NavTitleBit;

export const ImageQuery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        workDesignLogo: file(
          relativePath: { eq: "designdevresource-logo-mobile.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              quality: 100
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        designDevResourceLogoDesktop: file(
          relativePath: { eq: "designdevresource-logo-desktop.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
      }
    `
  );
  return data;
};
