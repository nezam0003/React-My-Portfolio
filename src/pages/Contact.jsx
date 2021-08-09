import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import { MainLayout } from "../styles/Layouts";

const Contact = () => {
  return (
    <MainLayout>
      <ContactStyled>
        <Title title="contact" subtitle="me" />
      </ContactStyled>
    </MainLayout>
  );
};
const ContactStyled = styled.section``;
export default Contact;
