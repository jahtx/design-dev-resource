import * as React from "react";
import { useLocation } from "@reach/router";
import TitleBit from "./TitleBit";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
  const siteLocation = useLocation();
  return (
    <>
      <TitleBit siteLocation={siteLocation} />
      {children}
    </>
  );
};

export default MainLayout;
