import Style from "./layout.module.scss";
import Navigation from "@/components/Navigation/Navigation";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = (props: ILayoutProps) => {
  return (
    <>
      <Navigation />
      <main className={Style.main}>{props.children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
