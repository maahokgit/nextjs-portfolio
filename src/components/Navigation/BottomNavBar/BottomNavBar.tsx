"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCircleUser,
  faEnvelope,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import Style from "./BottomNavBar.module.scss";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { Tooltip } from "@mui/material";
import { usePathname } from "next/navigation";

const BottomNavBar = () => {
  const currentPath = usePathname();

  return (
    <ul className={Style.DrawerToggle}>
      <li className={Style.BottomLink}>
        <Tooltip title="Home" placement="top">
          <Link href="/" className={currentPath === "/" ? Style.active : ""}>
            <FontAwesomeIcon icon={faHouse} color="white" />
          </Link>
        </Tooltip>
      </li>
      <li className={Style.BottomLink}>
        <Tooltip title="About Me" placement="top">
          <Link
            href="/about"
            className={currentPath === "/about" ? Style.active : ""}
          >
            <FontAwesomeIcon icon={faCircleUser} color="white" />
          </Link>
        </Tooltip>
      </li>
      <li className={Style.BottomLink}>
        <Tooltip title="My Work" placement="top">
          <Link
            href="/work"
            className={currentPath === "/work" ? Style.active : ""}
          >
            <FontAwesomeIcon icon={faBriefcase} color="white" />
          </Link>
        </Tooltip>
      </li>
      <li className={Style.BottomLink}>
        <Tooltip title="Contact Me" placement="top">
          <Link
            href="/contact"
            className={currentPath === "/contact" ? Style.active : ""}
          >
            <FontAwesomeIcon icon={faEnvelope} color="white" />
          </Link>
        </Tooltip>
      </li>
      <li className={Style.BottomLink}>
        <Tooltip title="LinkedIn" placement="top">
          <a
            href="https://www.linkedin.com/in/maahokgit"
            target="_blank"
            rel="noopener noreferrer"
            className={Style.Icon}
          >
            <FontAwesomeIcon icon={faLinkedinIn} color="white" />
          </a>
        </Tooltip>
      </li>
      <li className={Style.BottomLink}>
        <Tooltip title="GitHub" placement="top">
          <a
            href="https://github.com/maahokgit"
            target="_blank"
            rel="noopener noreferrer"
            className={Style.Icon}
          >
            <FontAwesomeIcon icon={faGithub} color="white" />
          </a>
        </Tooltip>
      </li>
    </ul>
  );
};

export default BottomNavBar;
