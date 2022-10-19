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
      <div className="designDevResourceMobile">
        <header className="navTitleBit d-flex align-items-center justify-content-center m-0 p-0">
          <h1 className="m-0 p-0">
            <div className="designDevResourceMobile__imgCont">
              <GatsbyImage
                image={getImage(data.workDesignLogo)}
                alt="Design Dev Resource"
                objectFit="contain"
                className="designDevResourceMobile__img"
              />
            </div>
          </h1>
        </header>
      </div>
      <div className="designDevResourceDesktop">
        {/* <nav
          className="mainNav text-center"
          aria-labelledby="main menu for desktop"
        >
          <ul className="list-style-none">
            {navItems &&
              navItems.map((navItem) => {
                const { linkName, url, ariaLabel } = navItem;
                const id = nanoid();
                return (
                  <li key={id}>
                    <a href={url} aira-label={ariaLabel}>
                      {linkName}
                    </a>
                  </li>
                );
              })}
          </ul>
        </nav> */}
        <div className="navTitleBit d-flex align-items-center justify-content-center m-0 p-0">
          <div className="hamburgerCont d-flex align-items-center justify-content-center">
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
          </div>
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
