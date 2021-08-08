import React from "react";
import styled from "styled-components";

const NavFooter = () => {
  return (
    <>
      <FooterStyled className="footer">
        <p>&copy; {new Date().getFullYear()} my portfolio website</p>
      </FooterStyled>
    </>
  );
};

const FooterStyled = styled.footer`
  width: 100%;
  text-align: center;
  border-top: 1px solid var(--border-color);

  p {
    padding: 1rem 0;
    font-size: 1rem;
  }
`;

export default NavFooter;
