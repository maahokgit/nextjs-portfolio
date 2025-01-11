"use client"
import Link from "next/link";
import Style from "./NavigationItem.module.scss";
import { usePathname } from "next/navigation";

interface INavigationItemProps {
  link: string;
  children: React.ReactNode;
}

const NavigationItem = (props: INavigationItemProps) => {
  const currentPath = usePathname();
  const className = currentPath === props.link ? Style.active : "";

  return (
    <Link href={props.link} className={[Style.Items, className].join(" ")}>
      {props.children}
    </Link>
  );
};

export default NavigationItem;
