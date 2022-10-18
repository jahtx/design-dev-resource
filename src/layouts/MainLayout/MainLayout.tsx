import * as React from "react";
import TitleBit from "./TitleBit";
import Footer from "./Footer";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
  return (
    <>
      <TitleBit />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
