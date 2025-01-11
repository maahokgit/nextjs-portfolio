import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

import NavigationItem from "./NavigationItem/NavigationItem";

import Style from "./NavigationItems.module.scss";

const NavigationItems = () => (
  <ul className={Style.NavigationItems}>
    <li>
      <NavigationItem link="/">Home</NavigationItem>
    </li>
    <li>
      <NavigationItem link="/about">About Me</NavigationItem>
    </li>
    <li>
      <NavigationItem link="/work">My Work</NavigationItem>
    </li>
    <li>
      <NavigationItem link="/contact">Contact Me</NavigationItem>
    </li>

    <li className={Style.noPadding}>
      <ul className={Style.FontAwesomeIcon}>
        <li>
          <a
            href="https://www.linkedin.com/in/maahokgit"
            target="_blank"
            rel="noopener noreferrer"
            className={Style.Icon}
            title="LinkedIn Profile"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" color="white" />
          </a>
        </li>
        <li className={Style.noPadding}>
          <a
            href="https://github.com/maahokgit"
            target="_blank"
            rel="noopener noreferrer"
            className={Style.Icon}
            title="GitHub Profile"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" color="white" />
          </a>
        </li>
      </ul>
    </li>
  </ul>
);

export default NavigationItems;
