import * as React from "react";
import Container from "react-bootstrap/Container";
import TitleBit from "./TitleBit";

type MainLayoutProps = {
  siteLocation?: string;
  children: React.ReactNode;
};

const MainLayout = ({
  siteLocation,
  children,
}: MainLayoutProps): JSX.Element => {
  return (
    <>
      <TitleBit siteLocation={siteLocation} />
      {children}
    </>
  );
};

export default MainLayout;
