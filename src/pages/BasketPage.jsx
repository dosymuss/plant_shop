import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from "../assets/Header/Logo.svg";
import BasketItemWrap from "../components/Basket/BasketItemWrap/BasketItemWrap";
import BasketPatment from "../components/Basket/BasketPayment/BasketPatment";

const LogoDiv = styled(Link).attrs({ to: "/main" })`
  display: flex;
  gap: 8px;
  align-items: center;
  text-decoration: none;

  p {
    font-family: var(--space);
    font-weight: 500;
    font-size: 20px;
    color: #000;
  }
`;

const Title = styled.h3`
  margin-top: 15px;
  font-family: var(--advent);
  font-weight: 700;
  font-size: 45px;
  color: #000;
`;

const StyledContainer = styled.div`
  padding: 40px 100px;
  text-align: left;
`;

const BasketPage = () => {

  return (
    <div>
      <StyledContainer>
        <LogoDiv>
          <img src={logo} alt="logo" />
          <p>PlantShop</p>
        </LogoDiv>
        <Title>Shoping card</Title>
        <BasketItemWrap />
      </StyledContainer>
      <BasketPatment />
    </div>
  );
};

export default BasketPage;
