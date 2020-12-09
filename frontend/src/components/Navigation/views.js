import styled from "styled-components";

export const NavigationWrapper = styled.div`
  grid-area: nav;
  display: flex;
  align-items: center;
  height: 100px;
`;
export const NavigationList = styled.ul`
  list-style-type: none;
`;
export const NavigationItem = styled.li`
  font-size: 22px;

  & > a {
    text-decoration: none;
    color: #58a6ff;
  }
`;
