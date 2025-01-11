import Main from "@/components/Main/Main";
import Navigation from "@/components/Navigation/Navigation";

interface IRootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = (props: IRootLayoutProps) => {
  return (
    <>
      <Navigation />
      <Main {...props} />
    </>
  );
};

export default RootLayout;
