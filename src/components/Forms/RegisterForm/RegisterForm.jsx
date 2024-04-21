import styled from "styled-components";

import AuthTitleDesc from "../../../ui/AuthTitleDesc/AuthTitleDesc";
import OrLoyaut from "../../../ui/OrLoyaut/OrLoyaut";
import AuthSwitchText from "../../../ui/AuthSwitchText/AuthSwitchText";
import Input from "../../../ui/Input/Input";
import AuthButton from "../../../ui/AuthButton/AuthButton";

const InpForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const RegisterForm = ({ click, setClick }) => {
  return (
    <div style={{ width: "450px" }}>
      <AuthTitleDesc
        title={"Create you Account"}
        desc={"Hello, We are glad to see you!"}
      />
      <InpForm>
        <Input placeholder={"Email"} type={"text"} />
        <Input placeholder={"Nickname"} type={"text"} />
        <Input placeholder={"Password"} type={"password"} />
        <Input placeholder={"Confirm password"} type={"password"} />
        <AuthButton text={"Create"} />
      </InpForm>
      <OrLoyaut />
      <AuthSwitchText
        setFunc={() => setClick(!click)}
        text={"Do you have an account?"}
        gText={"Sign in"}
      />
    </div>
  );
};

export default RegisterForm;
