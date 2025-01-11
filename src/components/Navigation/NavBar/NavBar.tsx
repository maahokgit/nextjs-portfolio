import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import BottomNavBar from "../BottomNavBar/BottomNavBar";

import Style from "./NavBar.module.scss";

const NavBar = () => (
  <header className={Style.NavBar}>
    <div className={Style.div}>
      <nav className={Style.DeskTopOnly}>
        <NavigationItems />
      </nav>
      <BottomNavBar />
    </div>
  </header>
);

export default NavBar;
