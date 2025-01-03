import Link from "next/link";
import Style from "./Logo.module.scss";

const Logo = () => (
  <div className={Style.Home}>
    <Link href="/">Edward Ma</Link>
  </div>
);

export default Logo;
