import React from "react";
import styled from "styled-components";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/Home";

import { Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolios from "./pages/Portfolios";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <Sidebar />
      <MainContentStyled>
        {/* <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
          <Route exact path="/portfolios">
            <Portfolios />
          </Route>
          <Route exact path="/blogs">
            <Blogs />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </MainContentStyled>
    </>
  );
};

const MainContentStyled = styled.main`
  position: relative;
  min-height: 100vh;
  margin-left: 16.3rem;

  .lines {
    position: absolute;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: space-evenly;

    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default App;
