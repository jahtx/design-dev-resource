import * as React from "react";
import Container from "react-bootstrap/Container";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./GoBit.scss";

const GoBit = () => {
  const data = ImageQuery();
  return (
    <section className="goBit">
      <Container>
        <div className="pack d-flex">
          <div className="pack__first d-flex align-items-center justify-content-center">
            <GatsbyImage
              image={getImage(data.screensImg)}
              alt="spiral"
              objectFit="contain"
              className="niceImg"
            />
          </div>
          <div className="pack__second p-4">
            Bacon ipsum dolor amet shankle ground round brisket flank tenderloin
            shoulder. Cow ground round doner spare ribs boudin shank swine flank
            chuck chislic shankle tenderloin rump salami. Jowl short loin doner,
            alcatra cow ham turducken spare ribs shankle shoulder bresaola.
            Tongue beef ribs ground round shank beef tenderloin ribeye.
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GoBit;

export const ImageQuery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        screensImg: file(relativePath: { eq: "whitescreens.png" }) {
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
