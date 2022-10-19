import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Container from "react-bootstrap/Container";
import ReCAPTCHA from "react-google-recaptcha";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./ContactBit.scss";

const ContactBit = () => {
  const recaptchaRef = React.createRef();

  const [human, setHuman] = useState(false);

  const [state, handleSubmit] = useForm("mjvzewpo");

  const handleCaptcha = (value: boolean) => {
    value ? setHuman(true) : setHuman(false);
  };

  const handleSubmitButton = (data: any) => {
    if (human) {
      handleSubmit(data);
    } else {
      console.log("handleSubmit error");
    }
  };
  return (
    <section id="contact" className="contactBit pt-9-rem pt-4 pb-2">
      <Container className="text-center">
        <h2 className="sectionHeading mt-1">Contact</h2>
      </Container>
      <Container className="contactBit__cont">
        {!state.succeeded ? (
          <div className="multiBox d-flex justify-content-center">
            <div className="multiBox__contForm w-100">
              <Form className="m-0 p-0" onSubmit={handleSubmitButton}>
                <Form.Group>
                  <Form.Label className="contactBit__formLabel">
                    Your name *
                  </Form.Label>
                  <Form.Control
                    className="contactBit__formControl"
                    type="text"
                    placeholder="enter first/last name"
                    name="yourName"
                    required
                  />
                  <ValidationError
                    prefix="Name"
                    field="yourName"
                    errors={state.errors}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="contactBit__formLabel">
                    Email address *
                  </Form.Label>
                  <Form.Control
                    className="contactBit__formControl"
                    type="email"
                    name="_replyto"
                    placeholder="Enter email"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ControlTextarea1">
                  <Form.Label className="contactBit__formLabel">
                    Message *
                  </Form.Label>
                  <Form.Control
                    className="contactBit__formControl"
                    as="textarea"
                    rows={3}
                    name="message"
                    required
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </Form.Group>
                <div className="contactBit__captchaCont d-flex">
                  <ReCAPTCHA
                    className="mb-3"
                    ref={recaptchaRef}
                    sitekey="6Ldt17shAAAAAD8m4xqV0VA8qSRzJye0JQoo82NI"
                    onChange={handleCaptcha}
                  />
                </div>

                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
                <div className="w-100 d-flex buttonContainer justify-content-end">
                  <Button
                    className="sendButton"
                    variant="primary"
                    type="submit"
                    disabled={state.submitting || !human}
                  >
                    Send
                  </Button>
                </div>
                <ValidationError errors={state.errors} />
              </Form>
            </div>
          </div>
        ) : (
          <div className="sentResponse mt-3 d-flex">
            <div className="sentResponse__messageSection">
              <p className="mt-4">
                Thanks for your message! You will receive a response in less
                than 24 hours.
              </p>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default ContactBit;
