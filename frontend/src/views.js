import styled from "styled-components";

export const AppWrapper = styled.div`
  /* text-align: center;
  display: flex;
  flex-direction: column; */
  display: grid;
  grid-template-areas:
    "header header"
    "nav content";

  grid-template-columns: 2fr 10fr;
  width: 70vw;
  margin: 0 auto;

  @media (max-width: 500px) {
    grid-template-areas:
      "header header"
      "nav nav"
      "content content";
  }
`;
export const Header = styled.header`
  grid-area: header;
  background: #282c34;
  color: white;
`;
export const Wrapper = styled.div`
  display: flex;

  margin: 0 auto;
  justify-content: space-between;
`;
export const Logo = styled.div`
  align-self: center;
  font-family: "Big Shoulders Stencil Display", cursive;
  font-size: 3rem;
`;
export const Auth = styled.div`
  align-self: center;
`;
