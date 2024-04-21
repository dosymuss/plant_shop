import styled, { keyframes } from "styled-components";

import Sunrise from "../../../assets/Sponsors/Sunrise.svg";
import ItPark from "../../../assets/Sponsors/ItPark.svg";
import Artel from "../../../assets/Sponsors/Artel.svg";
import GreenLabs from "../../../assets/Sponsors/GreenLabs.svg";
import StarBaks from "../../../assets/Sponsors/StarBaks.svg";
import Agro from "../../../assets/Sponsors/Agro.svg";
import Container from "../../Container/Container";

const Title = styled.h2`
  text-align: left;
  font-family: var(--advent);
  font-weight: 600;
  font-size: 40px;
  color: #000;
  margin-bottom: 20px;
`;

const SponsorsCard = styled.div`
  border-radius: 30px;
  width: 260px;
  height: 246px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  img {
    height: 200px;
  }
`;

const SponsorsWrapAnimate = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  overflow: hidden;
  margin-bottom: 30px;
`;

const animate = keyframes`
    from{
        left: -100%;
    }
    to{
        left:100%;
    }
`;

const SponsorsCardWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  white-space: nowrap;
  position: absolute;
  left: 0;
  animation: ${animate} 10s linear infinite alternate;
  &:hover {
    animation-play-state: paused;
  }
`;

const MainSponsor = () => {
  const sponsors = [Sunrise, ItPark, Artel, GreenLabs, StarBaks, Agro];

  return (
    <>
      <Container>
        <Title>Our sponsors</Title>
      </Container>
      <SponsorsWrapAnimate>
        <SponsorsCardWrap>
          {sponsors.map((item, index) => (
            <SponsorsCard key={index}>
              <img src={item} alt="" />
            </SponsorsCard>
          ))}
        </SponsorsCardWrap>
      </SponsorsWrapAnimate>
    </>
  );
};

export default MainSponsor;
