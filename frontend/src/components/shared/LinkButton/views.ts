import styled from "styled-components";

export const LinkButton = styled.button`
  align-self: center;
  color: #03a9f4;
  border-radius: 5px;
  border: 1px solid #03a9f4;
  padding: 10px 25px;
  cursor: pointer;
  background: transparent;
  font-size: ${({ theme }) => theme.fonts.extraSmall};

  &:hover {
    background: #fefefe1f;
  }
  &:focus {
    outline: none !important;
  }

  @media (max-width: 768px) {
    padding: 5px;
  }
`;
