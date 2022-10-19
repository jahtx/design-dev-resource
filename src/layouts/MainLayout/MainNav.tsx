import React, { useState } from "react";
import navItemsFile from "./navItems.json";
import { nanoid } from "nanoid";
import "./MainNav.scss";

type NavItemType = {
  linkName: string;
  url: string;
  ariaLabel: string;
};
const navItems: Array<NavItemType> = navItemsFile.navItems;

const MainNav = () => {
  const [isActive, setActive] = useState(false);
  return (
    <>
      <nav className="newMobileMenu"></nav>
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
    </>
  );
};

export default MainNav;
