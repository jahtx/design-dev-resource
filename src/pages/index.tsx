import React from "react";
import type { HeadFC } from "gatsby";
import { useLocation } from "@reach/router";
import MainLayout from "../layouts/MainLayout";

const IndexPage = () => {
  const siteLocation = useLocation();
  return <MainLayout siteLocation={siteLocation.pathname}>here</MainLayout>;
};

export default IndexPage;
