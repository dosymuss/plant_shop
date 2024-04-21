import styled from "styled-components";

import MainLinkBtn from "../../../ui/MainLinkBtn/MainLinkBtn";
import heroLogo from "../../../assets/Main/MainLogo.svg";

const Wrap = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;

  & h1 {
    font-family: var(--advent);
    font-weight: 600;
    font-size: 60px;
    color: #000;
  }
  & h2 {
    font-family: var(--space);
    font-weight: 700;
    font-size: 25px;
    color: var(--grey);
    margin-bottom: 30px;
  }
`;

const StyledLogo = styled.img`
  height: 550px;
`;

const MainHero = () => {
  return (
    <Wrap>
      <div style={{ width: "540px" }}>
        <h1>Buy plants and breathe freshness</h1>
        <h2>
          PlantShop provides the best options for you quickly and at the best
          price
        </h2>
        <MainLinkBtn />
      </div>
      <StyledLogo src={heroLogo} alt="heroLogo" />
    </Wrap>
  );
};

export default MainHero;
