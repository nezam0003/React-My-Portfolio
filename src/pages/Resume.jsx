import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import { MainLayout } from "../styles/Layouts";

const Resume = () => {
  return (
    <MainLayout>
      <ResumeStyled>
        <Title title="my" subtitle="resume" />
      </ResumeStyled>
    </MainLayout>
  );
};
const ResumeStyled = styled.section``;

export default Resume;
