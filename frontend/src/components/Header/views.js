import styled from "styled-components";

export const AppWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;
export const Header = styled.header`
  grid-area: header;
  height: 10vh;
  color: black;
  display: flex;
`;
export const Wrapper = styled.div`
  display: flex;
  width: 70vw;
  margin: 0 auto;
  justify-content: space-between;
  align-self: center;

  & > a {
    text-decoration: none;
    color: #cdd0d2;
  }
`;
export const Logo = styled.div`
  cursor: pointer;
  align-self: center;
  font-family: "Big Shoulders Stencil Display", cursive;
  font-size: 3rem;
`;
export const Auth = styled.button`
  align-self: center;
  color: #03a9f4;
  border-radius: 5px;
  border: 1px solid #03a9f4;
  padding: 10px 25px;
  cursor: pointer;
  background: transparent;

  &:hover {
    background: #fefefe1f;
  }
  &:focus {
    outline: none !important;
  }
`;
