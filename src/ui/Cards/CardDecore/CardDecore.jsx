import styled from "styled-components";

import CardDecoreImg from "../../../assets/Plant/CardDecor.svg";

const StyledDecore = styled.div`
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background: var(--white);
  border-radius: 15px;
  width: 640px;
  height: 82px;
  background: var(--white);
  background-image: url(${CardDecoreImg});
  background-size: cover;
  background-position: center;
`;

const CardDecore = () => {
  return <StyledDecore></StyledDecore>;
};

export default CardDecore;
