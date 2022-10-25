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
    var growDiv = document.getElementById("mainHamper");
    if (growDiv.clientHeight === 300) {
      growDiv.style.height = "300";
    } else {
      var wrapper = document.querySelector(".measuringWrapper");
      growDiv.style.height = wrapper.clientHeight + "px";
    }
  };
  return (
    <>
      {/* MOBILE MENU */}
      <div className="ddrMenuMobl__cradle">
        {/* cradle determines whether the element shows in mobile or desktop sizes */}
        <header
          id="mainHamper"
          className="ddrMenuMobl__hamper d-flex flex-column align-items-start m-0 p-0"
        >
          <div className="measuringWrapper">
            <nav className="ddrMenuMobl__headerBar d-flex align-items-center justify-content-center">
              <div className="ddrMenuMobl__hamburgerCont d-flex align-items-center justify-content-center">
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
            </nav>
            <ul
              className={
                "ddrMenuMobl__list text-center m-0 p-0 " +
                (isActive ? "ddrMenuMobl__list--isActive" : null)
              }
            >
              {navItems &&
                navItems.map((navItem) => {
                  const { linkName, url, ariaLabel } = navItem;
                  const id = nanoid();
                  return (
                    <li key={id}>
                      <a
                        href={url}
                        aira-label={ariaLabel}
                        onClick={() => setActive(!isActive)}
                      >
                        {linkName}
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </header>
      </div>
      {/* DESKTOP MENU */}
      <div className="ddrMenuDesk">
        <nav
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
        </nav>
        <div className="d-flex align-items-center justify-content-center m-0 p-0">
          <header>
            <h1 className="m-0 p-0">
              <div className="ddrMenuDesk__imgCont  d-flex align-items-center justify-content-center">
                <GatsbyImage
                  image={getImage(data.ddrLogoDesktop)}
                  alt="Design Dev Resource"
                  objectFit="contain"
                  className="ddrMenuDesk__img"
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
