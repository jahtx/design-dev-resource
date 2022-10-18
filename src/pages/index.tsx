import React from "react";
import MainLayout from "../layouts/MainLayout";
import AnthologyBit from "../pageComponents/IndexPage/AnthologyBit";
import "../styles/main.scss";

const IndexPage = () => {
  return (
    <MainLayout>
      <AnthologyBit />
    </MainLayout>
  );
};

export default IndexPage;
