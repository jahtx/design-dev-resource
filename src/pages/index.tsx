import React from "react";
import MainLayout from "../layouts/MainLayout";
import GoBit from "../pageComponents/IndexPage/GoBit";
import AnthologyBit from "../pageComponents/IndexPage/AnthologyBit";
import DigestBit from "../pageComponents/IndexPage/DigestBit";
import "../styles/main.scss";

const IndexPage = () => {
  return (
    <MainLayout>
      <GoBit />
      <AnthologyBit />
      <DigestBit />
    </MainLayout>
  );
};

export default IndexPage;
