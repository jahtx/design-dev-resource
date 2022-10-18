import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./TitleBit.scss";

const TitleBit = ({ siteLocation }) => {
  const data = ImageQuery();
  return (
    <header className="titleBit d-flex align-items-center justify-content-center m-0 p-0">
      <h1 className="m-0 p-0">
        <GatsbyImage
          image={getImage(data.workDesignLogo)}
          alt="Work Design Dev"
          objectFit="contain"
          className="workDesignLogo"
        />
        <GatsbyImage
          image={getImage(data.workDesignLogoDesktop)}
          alt="Work Design Dev"
          objectFit="contain"
          className="workDesignLogoDesktop"
        />
      </h1>
    </header>
  );
};

export default TitleBit;

export const ImageQuery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        workDesignLogo: file(relativePath: { eq: "work-design-logo.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 100
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        workDesignLogoDesktop: file(
          relativePath: { eq: "work-design-logo-desktop.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              quality: 100
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
      }
    `
  );
  return data;
};
