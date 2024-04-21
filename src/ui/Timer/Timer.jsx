import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledText = styled.p`
  font-family: var(--space);
  font-weight: 700;
  font-size: 18px;
  color: var(--green);
`;

const StyledBtn = styled.button`
  font-family: var(--space);
  font-weight: 700;
  font-size: 18px;
  color: var(--green);
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const Timer = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let intervalId;

    if (timer > 0) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId); // Это очистка происходит при размонтировании компонента или перед рестартом таймера
  }, [timer]);

  return (
    <div>
      {timer === 0 ? (
        <StyledBtn onClick={() => setTimer(59)}>Send again</StyledBtn>
      ) : (
        <StyledText>{`00:${timer}`}</StyledText>
      )}
    </div>
  );
};

export default Timer;
