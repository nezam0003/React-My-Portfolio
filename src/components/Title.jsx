import React from "react";
import styled from "styled-components";

const Title = ({ title, subtitle }) => {
  return (
    <TitleStyled>
      <h2>
        {title} <span>{subtitle}</span>
      </h2>
    </TitleStyled>
  );
};

const TitleStyled = styled.div`
  position: relative;

  h2 {
    font-size: 2.5rem;
    color: var(--white-color);
    font-weight: 600;
    text-transform: uppercase;
    padding-bottom: 0.4rem;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 8.5rem;
      height: 0.33rem;
      background-color: var(--background-light-color-2);
      border-radius: 15px;
      left: 0;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      width: 4.5rem;
      height: 0.33rem;
      background-color: var(--primary-color);
      border-radius: 15px;
      left: 0;
    }

    span {
      color: var(--primary-color);
      font-size: inherit;
      font-weight: inherit;
      text-transform: inherit;
    }
  }
`;

export default Title;
