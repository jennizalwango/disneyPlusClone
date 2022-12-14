import React from "react";
import styled from "styled-components";

function Home() {
  return <Container>Home</Container>;
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;

  &:before {
    background-image: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    roght: 0;
    bottom: 0;
    z-index: -1;  
  }
`;
