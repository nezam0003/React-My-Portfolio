import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import { MainLayout } from "../styles/Layouts";

const Blogs = () => {
  return (
    <MainLayout>
      <BlogStyled>
        <Title title="my" subtitle="blogs" />
      </BlogStyled>
    </MainLayout>
  );
};

const BlogStyled = styled.section``;

export default Blogs;
