import Link from "next/link";
import Style from "./layout.module.scss";
import Navigation from "@/components/Navigation/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = (props: ILayoutProps) => {
  return (
    <>
      <Navigation />
      <div className={Style.LinksContainer}>
        <div className={Style.Links}>
          <Link href="https://www.linkedin.com/in/maahokgit/">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </Link>
          <Link href="https://github.com/maahokgit">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </Link>
        </div>
      </div>
      <main className={Style.main}>{props.children}</main>
    </>
  );
};

export default Layout;
