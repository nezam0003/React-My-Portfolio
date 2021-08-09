import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import { MainLayout } from "../styles/Layouts";

const Portfolios = () => {
  return (
    <MainLayout>
      <PortfolioStyled>
        <Title title="my" subtitle="portfolios" />
      </PortfolioStyled>
    </MainLayout>
  );
};
const PortfolioStyled = styled.section``;

export default Portfolios;
