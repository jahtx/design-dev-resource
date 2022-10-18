import * as React from "react";
import TitleBit from "./TitleBit";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
  return (
    <>
      <TitleBit />
      {children}
    </>
  );
};

export default MainLayout;
