import React from "react";
import styled from "styled-components";
import NavFooter from "./NavFooter";
import NavMainContent from "./NavMainContent";
import NavProfile from "./NavProfile";

const Navigation = () => {
  return (
    <NavigationStyled>
      <NavProfile />
      <NavMainContent />
      <NavFooter />
    </NavigationStyled>
  );
};

const NavigationStyled = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-right: 1px solid var(--border-color);
`;

export default Navigation;
