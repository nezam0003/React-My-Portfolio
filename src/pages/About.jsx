import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import { MainLayout } from "../styles/Layouts";

const About = () => {
  return (
    <MainLayout>
      <AboutStyled>
        <Title title="about" subtitle="me" />
      </AboutStyled>
    </MainLayout>
  );
};

const AboutStyled = styled.section``;
export default About;
