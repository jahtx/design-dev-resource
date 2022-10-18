import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";

import "./TitleBit.scss";

const TitleBit = () => {
  const data = ImageQuery();
  return (
    <header className="titleBit d-flex align-items-center justify-content-center m-0 p-0">
      <h1 className="m-0 p-0">
        <div className="designDevResourceMobile">
          <GatsbyImage
            image={getImage(data.workDesignLogo)}
            alt="Design Dev Resource"
            objectFit="contain"
            className="designDevResourceMobile__img"
          />
        </div>
        <div className="designDevResourceDesktop">
          <GatsbyImage
            image={getImage(data.designDevResourceLogoDesktop)}
            alt="Design Dev Resource"
            objectFit="contain"
            className="designDevResourceDesktop__img"
          />
        </div>
      </h1>
    </header>
  );
};

export default TitleBit;

export const ImageQuery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        workDesignLogo: file(
          relativePath: { eq: "designdevresource-logo-mobile.png" }
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
        designDevResourceLogoDesktop: file(
          relativePath: { eq: "designdevresource-logo-desktop.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
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
