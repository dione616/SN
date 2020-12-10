import styled from "styled-components";

export const WrapperCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  flex-direction: column;
`;
export const Form = styled.form`
  border-radius: 10px;
  max-width: 50vw;
`;
export const Input = styled.input`
  margin-top: 10px;
  font-size: ${({ theme }) => theme.fonts.small};
  border-radius: 5px;
  outline: none !important;
  border: none;
`;
export const Button = styled.button`
  margin-top: 20px;
  font-size: ${({ theme }) => theme.fonts.small};
  outline: none !important;
  border: none;
  cursor: pointer;
  height: 40px;
`;
export const LoginWith = styled.div`
  margin: 5px 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
export const Img = styled.img`
  background-image: url(${({ src }) => src});
  height: 40px;
`;
