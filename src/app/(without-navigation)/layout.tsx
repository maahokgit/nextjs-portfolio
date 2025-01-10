import Footer from "@/components/Footer/Footer";
import Style from "./layout.module.scss";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = (props: ILayoutProps) => {
  return (
    <>
      <main className={Style.main}>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
