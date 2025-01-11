import Styles from "./not-found.module.scss";
import Navigation from "@/components/Navigation/Navigation";
import Main from "@/components/Main/Main";

const NotFound: React.FC = () => {
  return (
    <>
      <Navigation />
      <Main>
        <div className={Styles.error}>
          <div className={Styles.mobile}>
            <h1 className={`next-error-h1 ${Styles.h1}`}>404</h1>
            <div className={Styles.desc}>
              <h2 className={Styles.h2}>This page could not be found</h2>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
};

export default NotFound;
