import styled from "styled-components";

export const WrapperCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;
export const Form = styled.form`
  padding: 40px 40px 10px 40px;
  border-radius: 10px;
  max-width: 50vw;
  background: #03a9f48f;
`;
export const Input = styled.input`
  margin-top: 10px;
  padding: 5px;
  font-size: 1.5rem;
  border-radius: 5px;
  outline: none !important;
  border: none;
`;
export const Button = styled.button`
  margin-top: 20px;
  padding: 5px;
  font-size: 1.5rem;
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
