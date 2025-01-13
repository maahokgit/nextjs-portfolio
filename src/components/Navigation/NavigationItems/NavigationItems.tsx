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
    <li className={Style.noPadding}>
      <NavigationItem link="/contact">Contact Me</NavigationItem>
    </li>
  </ul>
);

export default NavigationItems;
