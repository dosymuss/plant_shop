import styled from "styled-components";
import eyeOpen from "../../assets/Auth/eyeOpen.svg";
import eyeClose from "../../assets/Auth/eyeClose.svg";
import { useState } from "react";

const StyledInp = styled.input`
  border: 2px solid #000;
  border-radius: 5px;
  padding-left: 10px;
  font-family: var(--advent);
  font-weight: 500;
  font-size: 20px;
  width: 100%;
  height: 50px;
  background-color: transparent;
`;

const StyledPassDiv = styled.div`
  width: 100%;
  height: 50px;
  border: 2px solid #000;
  border-radius: 5px;
  padding: 0 10px;
  font-family: var(--advent);
  font-weight: 500;
  font-size: 20px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;

  & input {
    font-family: var(--advent);
    font-weight: 500;
    font-size: 20px;
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;
  }
  & button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    background-color: transparent;
  }
`;

const Input = ({ type, ...props }) => {
  const [inpType, setInpType] = useState(false);

  return (
    <div>
      {type === "password" ? (
        <StyledPassDiv>
          <input {...props} type={inpType ? "text" : "password"} />
          <button onClick={() => setInpType(!inpType)}>
            <img src={inpType ? eyeClose : eyeOpen} alt="eyes" />
          </button>
        </StyledPassDiv>
      ) : (
        <StyledInp {...props} />
      )}
    </div>
  );
};

export default Input;
