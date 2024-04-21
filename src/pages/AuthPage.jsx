import styled from "styled-components";
import { useState } from "react";

import LoginBack from "../assets/Auth/LoginBack.svg";
import RegisterBack from "../assets/Auth/RegisterBack.svg";
import Logo from "../assets/Auth/Logo.svg";
import LoginForm from "../components/Forms/LoginForm/LoginForm";
import RegisterForm from "../components/Forms/RegisterForm/RegisterForm";

const StyledBack = styled.div`
  width: 50vw;
  height: 100vh;
  background-image: url(${(props) => props.active ? RegisterBack : LoginBack});
  transition: 1s ease;
  transform: translateX(${(props) => (props.active ? "48.9313vw" : "0")});
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  font-family: var(--advent);
  font-weight: 600;
  font-size: 70px;
  color: var(--white);
  padding: 15px;
  z-index: 3;
  background-size: cover;
`;

const StyledLogo = styled.img.attrs({ alt: "logo", src: Logo })`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
`;

// const SwitchText

const FormDivWrap = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
  height: 100vh;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;

const FormDivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AuthPage = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <div style={{ position: "relative" }}>
        <StyledBack active={click}>
          <StyledLogo />
          <p>PlantShop</p>
        </StyledBack>
        <FormDivWrap>
          <FormDivContainer>
            <RegisterForm click={click} setClick={setClick} />
          </FormDivContainer>
          <FormDivContainer>
            <LoginForm click={click} setClick={setClick} />
          </FormDivContainer>
        </FormDivWrap>
      </div>
    </>
  );
};

export default AuthPage;
