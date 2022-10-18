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
              image={getImage(data.basicImg)}
              alt="spiral"
              objectFit="contain"
              className="niceImg"
            />
          </div>
          <div className="pack__second p-4">
            <p>
              Toffee halvah topping sugar plum donut toffee sweet roll.
              Liquorice fruitcake marshmallow chupa chups topping toffee sugar
              plum bear claw carrot cake. Gingerbread cheesecake gummies candy
              canes tiramisu. Jelly biscuit macaroon ice cream jelly gingerbread
              lollipop dragée tart.
            </p>
            <p>
              Vestibulum ullamcorper ornare risus, ut tristique ex ornare sit
              amet. Donec rhoncus vestibulum aliquam. Nullam varius erat a lorem
              sollicitudin elementum. Nunc nec magna ipsum. Fusce finibus leo ac
              massa consectetur semper.
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
        basicImg: file(relativePath: { eq: "basic-ui-design.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 100
              width: 300
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
