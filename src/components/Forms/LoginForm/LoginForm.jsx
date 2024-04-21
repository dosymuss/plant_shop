import styled from "styled-components";
import { Link } from "react-router-dom";

import AuthButton from "../../../ui/AuthButton/AuthButton";
import AuthSwitchText from "../../../ui/AuthSwitchText/AuthSwitchText";
import AuthTitleDesc from "../../../ui/AuthTitleDesc/AuthTitleDesc";
import Input from "../../../ui/Input/Input";
import OrLoyaut from "../../../ui/OrLoyaut/OrLoyaut";

const InpForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const StyledLink = styled(Link).attrs({ to: "/confirm" })`
  font-family: var(--space);
  font-weight: 600;
  text-decoration: none;
  text-align: right;
  font-size: 20px;
  color: var(--green);
`;

const LoginForm = ({ click, setClick }) => {
  return (
    <div style={{ width: "450px" }}>
      <AuthTitleDesc
        title={"Log in to your Account"}
        desc={"Hello, Welcome back !"}
      />
      <InpForm>
        <Input placeholder={"Email"} type={"text"} />
        <Input placeholder={"Password"} type={"password"} />
        <StyledLink>Forgot password</StyledLink>
        <AuthButton text={"Enter"} />
      </InpForm>
      <OrLoyaut />
      <AuthSwitchText
        text={"Don’t have an account?"}
        gText={"Create account"}
        setFunc={() => setClick(!click)}
      />
    </div>
  );
};

export default LoginForm;
