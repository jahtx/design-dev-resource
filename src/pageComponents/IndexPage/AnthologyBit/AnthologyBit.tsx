import * as React from "react";
import Container from "react-bootstrap/Container";
import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./AnthologyBit.scss";

const AnthologyBit = () => {
  const data = ImageQuery();
  return (
    <section className="anthologyBit text-light">
      <Container>
        <div className="pack d-flex">
          <div className="pack__first d-flex align-items-center justify-content-center">
            <GatsbyImage
              image={getImage(data.spiralImg)}
              alt="spiral"
              objectFit="contain"
              className="testingimg"
            />
          </div>
          <div className="pack__second p-4">
            <p>
              Shortbread chocolate bar marshmallow gingerbread muffin tart
              topping. Sweet cheesecake topping donut shortbread. Macaroon chupa
              chups tiramisu chupa chups toffee chupa chups. Marzipan cupcake
              toffee tart donut. Shortbread pie tiramisu cookie cupcake dragée
              bonbon wafer.
            </p>
            <p>
              Jelly beans muffin bear claw carrot cake sugar plum candy dessert
              cake sesame snaps. Tart cupcake pie soufflé cake. Cheesecake
              cheesecake pudding candy chocolate cake carrot cake apple pie
              chocolate cake shortbread. Lemon drops caramels powder candy
              dessert cake.
            </p>
            <Link className="float-end linkText-white" to="/portfolio">
              Explore
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AnthologyBit;

export const ImageQuery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        spiralImg: file(relativePath: { eq: "spiral.png" }) {
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
