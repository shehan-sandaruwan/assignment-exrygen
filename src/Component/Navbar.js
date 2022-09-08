import React, { useEffect, useState } from "react";
import moreMenu from "../images/main-menu.png";

const navLinks = [
  {
    displayName: "Home",
    isActive: true,
    key: "home",
  },
  {
    displayName: "About us",
    isActive: false,
    key: "about",
  },
  {
    displayName: "Our Services",
    isActive: false,
    key: "services",
  },
  {
    displayName: "Case Studies & Projects",
    isActive: false,
    key: "projects",
  },
  {
    displayName: "Client Portfolio",
    isActive: false,
    key: "client",
  },
  {
    displayName: "Contact",
    isActive: false,
    key: "contact",
  },
];

const Navbar = ({ activeNavItem }) => {
  const [navItems, setNavItems] = useState(navLinks);

  useEffect(() => {
    const newItems = navItems.map((item) => {
      item.isActive = false;

      if (item.key === activeNavItem) {
        item.isActive = true;
      }

      return item;
    });
  }, [activeNavItem, navItems]);

  return (
    <React.Fragment>
      <nav className="nav-container">
        <div className="logo"></div>
        <div className="more-menu">
          <img src={moreMenu} alt="more-menu" />
        </div>
        {navItems.map((nav) => {
          return (
            <a href="" data-state={nav.isActive && "active"}>
              {nav.displayName}
            </a>
          );
        })}
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
