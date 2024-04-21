import { useState } from "react";
import styled from "styled-components";
import PinInput from "react-pin-input";

const PinInpStyled = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const PinInp = () => {
  const [value, setValue] = useState("");

  return (
    <PinInpStyled>
      <PinInput
        length={4}
        onChange={(value, index) => {
          setValue(value);
        }}
        inputStyle={{
          border: "2px solid black",
          borderRadius: "10px",
          marginRight: "15px",
          fontSize: "15px",
          fontFamily: "var(--space)",
          fontWeight:"600"
        }}
        inputFocusStyle={{ borderColor: "var(--green)" }}
      />
    </PinInpStyled>
  );
};

export default PinInp;
