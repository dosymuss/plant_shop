import styled from "styled-components";
import { Link } from "react-router-dom";
import arrowRight from "../../assets/Main/arrowRight.svg";

const StyledDiv = styled.div`
  border-radius: 20px;
  width: 260px;
  height: 246px;
  padding: 18px 23px;
  background-color: ${(props) => props.backColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

const StyledText = styled.p`
  font-family: var(--space);
  font-weight: 500;
  font-size: 18px;
  color: ${(props) => (props.grey ? "var(--grey)" : "var(--white)")};
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const MainLinkBtn = () => {
  return (
    <Wrap>
      <StyledDiv backColor={"black"}>
        <div>
          <StyledText>Try buy palant</StyledText>
          <Link to={"/catalog"}>
            <img src={arrowRight} alt="arrow" />
          </Link>
        </div>

        <StyledText grey={true}>Watch our catalog</StyledText>
      </StyledDiv>
      <StyledDiv backColor={"#053F33"}>
        <div>
          <StyledText>Try buy palant</StyledText>
          <Link>
            <img src={arrowRight} alt="arrow" />
          </Link>
        </div>

        <StyledText grey={true}>Watch our new plants</StyledText>
      </StyledDiv>
    </Wrap>
  );
};

export default MainLinkBtn;
