import styled from "styled-components";
import { Link } from "react-router-dom";

import ConfirmBack from "../assets/Auth/ConfirmBack.svg";
import Logo from "../assets/Auth/Logo.svg";
import ExitIcon from "../assets/Auth/ExitIcon.svg";
import AuthTitleDesc from "../ui/AuthTitleDesc/AuthTitleDesc";
import Input from "../ui/Input/Input";
import AuthButton from "../ui/AuthButton/AuthButton";

const StyledBack = styled.div`
  width: 50vw;
  height: 100vh;
  background-image: url(${ConfirmBack});
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

const BackLink = styled(Link).attrs({to:'/'})`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: var(--white);
  background-image: url(${ExitIcon});
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const InpForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Desc = styled.p`
  margin-top: 40px;
  font-family: var(--space);
  font-weight: 700;
  font-size: 20px;
  color: #9f9797;
  text-align: left;
`;

const FormWrap = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ConfirmPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <StyledBack>
        <StyledLogo />
        <p>PlantShop</p>
        <BackLink />
      </StyledBack>
      <FormWrap>
        <div style={{ width: "450px" }}>
          <AuthTitleDesc
            title={"Confirm your Email"}
            desc={"It's just part of the test"}
          />
          <InpForm>
            <Input placeholder={"Email"} type={"text"} />
            <AuthButton text={"Send"} />
          </InpForm>
          <Desc>
            We will send you a code by email to check and confirm your email.
          </Desc>
        </div>
      </FormWrap>
    </div>
  );
};

export default ConfirmPage;
