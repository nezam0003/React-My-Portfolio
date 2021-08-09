import React from "react";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import YoutubeIcon from "@material-ui/icons/YouTube";
import GithubIcon from "@material-ui/icons/GitHub";

const Home = () => {
  return (
    <HomePageStyled>
      <div className="typography">
        <h1>
          Hi I'm <span>Nezam khan</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          officiis repudiandae eligendi. Omnis labore, delectus reiciendis
          minima ad voluptate est.
        </p>
        <div className="icons">
          <a href="https://www.facebook.com" className="icon i-facebook">
            <FacebookIcon />
          </a>
          <a href="https://www.github.com" className="icon i-github">
            <GithubIcon />
          </a>
          <a href="https://www.youtube.com" className="icon i-youtube">
            <YoutubeIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
};

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    width: 100%;
    max-width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    .icons {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: var(--mainTransition);

        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }

        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          font-size: 1.5rem;
          margin: 0.5rem;
          margin-bottom: 0;
        }
      }
    }
  }
`;

export default Home;
