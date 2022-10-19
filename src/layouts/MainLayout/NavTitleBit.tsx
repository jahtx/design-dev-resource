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
      {/* MOBILE MENU */}
      <div className="ddrMenuMobl__cradle">
        {/* SHOW HIDE */}
        <div
          className={
            "ddrMenuMobl__hamper d-flex align-items-start justify-content-center m-0 p-0 " +
            (isActive ? "ddrMenuMobl__hamper--isActive" : null)
          }
        >
          <div className="ddrMenuMobl__headerBar d-flex align-items-center justify-content-center">
            <nav className="ddrMenuMobl__hamburgerCont d-flex align-items-center justify-content-center">
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
              <h1 className="m-0 p-0 d-flex align-items-center justify-content-center">
                <div className="ddrMenuMobl__imgCont d-flex align-items-center justify-content-center">
                  <GatsbyImage
                    image={getImage(data.ddrLogoMobile)}
                    alt="Design Dev Resource"
                    objectFit="contain"
                    className="ddrMenuMobl__img"
                  />
                </div>
              </h1>
            </header>
          </div>
        </div>
      </div>
      {/* DESKTOP MENU */}
      <div className="designDevResourceDesktop">
        <div className="navTitleBit d-flex align-items-center justify-content-center m-0 p-0">
          <header>
            <h1 className="m-0 p-0">
              <div className="designDevResourceDesktop__imgCont  d-flex align-items-center justify-content-center">
                <GatsbyImage
                  image={getImage(data.ddrLogoDesktop)}
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
        ddrLogoMobile: file(relativePath: { eq: "ddr-logo-mobile.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 100
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        ddrLogoDesktop: file(relativePath: { eq: "ddr-logo-desktop.png" }) {
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
