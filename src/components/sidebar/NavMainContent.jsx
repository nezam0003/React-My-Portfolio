import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

const NavMainContent = () => {
  return (
    <>
      <UnorderList>
        <li className="nav-item">
          <NavLink exact to="/" activeClassName="active-class">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/about" activeClassName="active-class">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/resume" activeClassName="active-class">
            Resume
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/portfolios" activeClassName="active-class">
            Portfolios
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/blogs" activeClassName="active-class">
            Blogs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/contact" activeClassName="active-class">
            Contact
          </NavLink>
        </li>
      </UnorderList>
    </>
  );
};

const UnorderList = styled.ul`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .active-class {
    background-color: var(--primary-color);
  }
  li {
    width: 100%;
    display: block;

    a {
      display: block;
      padding: 0.5rem 0;
      text-transform: uppercase;
      position: relative;
      z-index: 10;
      transition: var(--mainTransition);

      &:hover {
        cursor: pointer;
        color: var(--white-color);
      }
      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: var(--primary-color);
        transition: var(--mainTransition);
        width: 0;
        height: 50%;
        z-index: 3;
        opacity: 0.21;
      }
    }
    a:hover::before {
      width: 100%;
      height: 100%;
    }
  }
`;

export default NavMainContent;
