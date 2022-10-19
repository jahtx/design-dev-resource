import * as React from "react";
import NavTitleBit from "./NavTitleBit";
import Footer from "./Footer";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
  return (
    <>
      <NavTitleBit />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
