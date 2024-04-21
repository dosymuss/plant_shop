import styled from "styled-components";

const AuthBtn = styled.button`
  width: 100%;
  border-radius: 10px;
  height: 50px;
  background-color: var(--green);
  font-family: var(--space);
  font-weight: 700;
  font-size: 20px;
  color: var(--white);
  border: none;
  outline: none;
`;

const AuthButton = ({ text, ...props }) => {
  return <AuthBtn {...props}>{text}</AuthBtn>;
};

export default AuthButton;
