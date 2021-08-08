import React from "react";
import styled from "styled-components";
import avater from "../../images/avater.jpg";

const NavProfile = () => {
  return (
    <>
      <AvaterDiv>
        <img src={avater} alt="avater" />
      </AvaterDiv>
    </>
  );
};

const AvaterDiv = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--border-color);
  text-align: center;
  padding: 1rem 0;

  img {
    width: 70%;
    border: 0.5rem solid var(--border-color);
    border-radius: 50%;
  }
`;

export default NavProfile;
