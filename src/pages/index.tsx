import React from "react";
import type { HeadFC } from "gatsby";
import { graphql, PageProps } from "gatsby";
import MainLayout from "../layouts/MainLayout";
import GoBit from "../pageComponents/IndexPage/GoBit";
import AnthologyBit from "../pageComponents/IndexPage/AnthologyBit";
import DigestBit from "../pageComponents/IndexPage/DigestBit";
import { DataProps } from "../types/GenTypes";
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

export const Head: HeadFC = ({ data: { site } }: PageProps<DataProps>) => (
  <>
    <meta charSet="UTF-8" />
    <meta httpEquiv="cache-control" content="no-cache" />
    <meta name="description" content={site.siteMetadata.description} />
    <meta name="keywords" content={site.siteMetadata.keywords} />
    <meta name="author" content={site.siteMetadata.author} />
    <meta name="robots" content="index, follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{site.siteMetadata.title}</title>
  </>
);

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        siteUrl
        keywords
        author
        description
      }
    }
  }
`;
