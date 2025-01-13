"use client";
import { useState } from "react";
import Style from "./BottomNavBar.module.scss";
import { Link, Zoom } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faEnvelope,
  faHome,
  faPersonCircleQuestion,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

const BottomNavBar = () => {
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const currentPath = usePathname();

  const handleChange = () => {
    SetIsOpen((prev) => !prev);
  };

  const menuClass = [Style.bubble_out_menu, Style.dropdown].join(" ");
  const toggle = [Style.bubble_out_toggle, Style.dropdown_toggle];
  const nav = [Style.bubble_out_list, Style.dropdown_list];

  if (isOpen) {
    toggle.push(Style.open);
    nav.push(Style.open);
  }

  const homeLink = [Style.link, Style.dropdown_link];
  const aboutLink = [Style._2, Style.link, Style.dropdown_link];
  const workLink = [Style._3, Style.link, Style.dropdown_link];
  const contactLink = [Style._4, Style.link, Style.dropdown_link];

  if (currentPath === "/") {
    homeLink.push(Style.active);
  }

  if (currentPath === "/about") {
    aboutLink.push(Style.active);
  }

  if (currentPath === "/work") {
    workLink.push(Style.active);
  }

  if (currentPath === "/contact") {
    contactLink.push(Style.active);
  }

  const toggleClass = toggle.join(" ");
  const navClass = nav.join(" ");

  return (
    <div className={menuClass}>
      <div className={toggleClass} onClick={handleChange}>
        <div className={Style.bubble_out_title}>Menu</div>
        <div className={Style.close}>
          <FontAwesomeIcon icon={faX} size="lg" />
        </div>
      </div>
      <div className={navClass}>
        <Zoom in={isOpen} style={{ transitionDelay: isOpen ? "0ms" : "0ms" }}>
          <Link className={homeLink.join(" ")} href="/">
            <FontAwesomeIcon icon={faHome} onClick={handleChange} />
          </Link>
        </Zoom>

        <Zoom in={isOpen} style={{ transitionDelay: isOpen ? "200ms" : "0ms" }}>
          <Link className={aboutLink.join(" ")} href="/about">
            <FontAwesomeIcon
              icon={faPersonCircleQuestion}
              onClick={handleChange}
            />
          </Link>
        </Zoom>

        <Zoom in={isOpen} style={{ transitionDelay: isOpen ? "400ms" : "0ms" }}>
          <Link className={workLink.join(" ")} href="/work">
            <FontAwesomeIcon icon={faBriefcase} onClick={handleChange} />
          </Link>
        </Zoom>

        <Zoom in={isOpen} style={{ transitionDelay: isOpen ? "600ms" : "0ms" }}>
          <Link className={contactLink.join(" ")} href="/contact">
            <FontAwesomeIcon icon={faEnvelope} onClick={handleChange} />
          </Link>
        </Zoom>
      </div>
    </div>
  );
};

export default BottomNavBar;
