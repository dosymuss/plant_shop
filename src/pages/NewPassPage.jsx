import styled from "styled-components";
import { Link } from "react-router-dom";

import NewPassBack from "../assets/Auth/NewPassBack.svg"
import Logo from "../assets/Auth/Logo.svg";
import ExitIcon from "../assets/Auth/ExitIcon.svg";
import AuthTitleDesc from "../ui/AuthTitleDesc/AuthTitleDesc";
import Input from "../ui/Input/Input";
import AuthButton from "../ui/AuthButton/AuthButton";

const StyledBack = styled.div`
  width: 50vw;
  height: 100vh;
  background-image: url(${NewPassBack});
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

const BackLink = styled(Link).attrs({ to: "/" })`
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

const FormWrap = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NewPassPage = () => {
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
            title={"Enter new password"}
            desc={"Update your password"}
          />
          <InpForm>
            <Input placeholder={"Password"} type={"password"} />
            <Input placeholder={"Confirm password"} type={"password"} />
            <AuthButton text={"Send"} />
          </InpForm>
        </div>
      </FormWrap>
    </div>
  );
};

export default NewPassPage;


// <PinInput 
//   length={4} 
//   initialValue=""
//   secret
//   secretDelay={100} 
//   onChange={(value, index) => {}} 
//   type="numeric" 
//   inputMode="number"
//   style={{padding: '10px'}}  
//   inputStyle={{borderColor: 'red'}}
//   inputFocusStyle={{borderColor: 'blue'}}
//   onComplete={(value, index) => {}}
//   autoSelect={true}
//   regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
// />
