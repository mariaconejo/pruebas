import React from "react";
import styled from "styled-components";
import { Wrapper } from "./Hero";

function Suscriber() {
  const user = process.env.REACT_APP_API_USER
  const id = process.env.REACT_APP_API_ID
  const info = {
    name: "Suscribete a nuestro newsletter",
    label: "Ingrese su Email:",
    image: "img/subscriber.svg",
    url: `https://gmail.us5.list-manage.com/subscribe/post?u=${user}&id=${id}`,
    paragraph:"We have so many ideas for new features that can help our partners manage their units even more efficiently. We promise you that we wont mail bomb you, just once in a month.",
  };

  return (
    <Wrapper>
      <Mailchimp id="mc_embed_signup">
        <Container>
          <Image src={info.image} alt="Subscribir" />
        </Container>
        <Form
          action={info.url}
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <Title>{info.name}</Title>
            <Paragraph>{info.paragraph}</Paragraph>
            <div className="mc-field-group">
              <Label htmlFor="mce-EMAIL">{info.label}</Label>
              <Flex>
                <Email
                  type="email"
                  defaultValue=""
                  name="EMAIL"
                  className="required email"
                  id="mce-EMAIL"
                  placeholder="E-mail"
                />
                <SuscribeButton className="clear">
                  <Button
                    type="submit"
                    value="Suscribirse"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button"
                  />
                </SuscribeButton>
              </Flex>
            </div>
            <div id="mce-responses" className="clear">
              <Error className="response" id="mce-error-response"></Error>
              <Success className="response" id="mce-success-response"></Success>
            </div>
            {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
            <Aria aria-hidden="true">
              <input
                type="text"
                name="b_89a21ad8fc7a9ac4952f237b8_3db6decf58"
                tabIndex={-1}
                defaultValue=""
              />
            </Aria>
          </div>
        </Form>
      </Mailchimp>
    </Wrapper>
  );
}

const Title = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 1.625rem;
  color: #292929;
  font-weight: 700;
  @media (min-width: 834px) {
    font-size: 2.313rem;
  }
`;
const Label = styled.label`
  display: block;
  font-size: 1.125rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
  margin-top: 10px;
`;

const Email = styled.input`
  width: 100%;
  height: 54px;
  border: 2px solid #7c7c7c;
  border-radius: 8px;
  margin-top: 10px;
  font-size: 1rem;
  color: #292929;
  font-family: "Open Sans", sans-serif;
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    padding-left: 10px;
  }
  @media (min-width: 834px) {
    width: 60%;
    margin-top: 0;
  }
  @media (min-width: 1440px) {
    width: 70%;
  }
`;

const Paragraph = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 1rem;
  color: #5e5e5e;
  margin-top: 14px;
`;

const Button = styled.input`
  background: #5755cc;
  border-radius: 5px;
  padding: 8px 16px 8px 16px;
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 22px;
  border: none;
  margin-left: 188px;
  margin-top: 20px;
  @media (min-width: 834px) {
    margin-left: 0;
    margin-top: 0;
    padding: 12px 16px 12px 16px;
  }
`;
const Error = styled.div`
  display: "none";
`;
const Success = styled.div`
  display: "none";
`;

const Aria = styled.div`
  position: absolute;
  left: -5000px;
`;
const Container = styled.div`
  width: 50%;
`;
const Form = styled.form`
  @media (min-width: 834px) {
    width: 50%;
  }
`;
const Image = styled.img`
  display: none;
  @media (min-width: 834px) {
    display: block;
    padding-top: 38px;
    width: 90%;
  }
`;
const Mailchimp = styled.div`
  margin-bottom: 48px;
  @media (min-width: 834px) {
    display: flex;
    align-items: center;
  }
`;
const SuscribeButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Flex = styled.div`
  @media (min-width: 834px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }
`;
export default Suscriber;
