import styled from "styled-components";

const StyledText = styled.span`
  font-family: var(--space);
  font-weight: 600;
  font-size: 20px;
  color: #9f9797;
  margin-right: 3px;
`;

const StyledBtn = styled.button`
  font-family: var(--space);
  font-weight: 600;
  font-size: 20px;
  color: var(--green);
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;



const AuthSwitchText = ({ text, gText, setFunc }) => {
  return (
    <div>
      <StyledText>{text}</StyledText>
      <StyledBtn onClick={setFunc}>{gText}</StyledBtn>
    </div>
  );
};

export default AuthSwitchText;
