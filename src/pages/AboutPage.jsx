import styled from "styled-components";

import Header from "../components/Header/Header";
import Container from "../components/Container/Container";
import FooterMain from "../components/Footer/FooterMain/FooterMain";

import FirstImg from "../assets/About/FirstImg.svg";
import SecondImg from "../assets/About/SecondImg.svg";
import ThirdImg from "../assets/About/ThirdImg.svg";
import FourthImg from "../assets/About/FourthImg.svg";
import SmallCard from "../ui/Cards/SmallCard/SmallCard";

const Title = styled.p`
  font-family: var(--advent);
  font-weight: 600;
  font-size: 60px;
  color: #000;
`;

const Desc = styled.span`
  font-family: var(--space);
  font-weight: 700;
  font-size: 30px;
  color: #9f9797;
`;

const Image = styled.img`
  width: 450px;
`;

const BlockWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: ${(props) => (props.align ? props.align : "flex-start")};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0")};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "0")};
`;

const TextWrap = styled.div`
  width: 550px;
  text-align: ${(props) => (props.align ? props.align : "stretch")};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0")};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "0")};
`;

const AboutPage = () => {
  return (
    <div>
      <Container>
        <Header />
        <BlockWrap marginTop={"40px"}>
          <TextWrap align={"left"} marginTop={"30px"}>
            <Title>Buy plants and breathe freshness</Title>
            <Desc>The best plants on the market. Quality assurance</Desc>
          </TextWrap>
          <Image src={FirstImg} alt="" />
        </BlockWrap>
        <BlockWrap align={"flex-end"}>
          <Image src={SecondImg} alt="" />
          <TextWrap marginBottom={"30px"}>
            <Title>Variety of goods</Title>
            <Desc>
              We are the first on the market to provide such variety and choice.
            </Desc>
          </TextWrap>
        </BlockWrap>
        <BlockWrap align={"center"} marginTop={"20px"}>
          <TextWrap align={"left"}>
            <Title>Trust us</Title>
            <Desc>
              We are responsible for our quality and if you are not satisfied
              with something, we are happy to help you
            </Desc>
          </TextWrap>
          <Image src={ThirdImg} alt="" />
        </BlockWrap>
        <BlockWrap align={"center"} marginBottom={"40px"}>
          <Image src={FourthImg} alt="" />
          <TextWrap align={"center"}>
            <Title>We won't let you down</Title>
            <Desc>
              If you don’t believe us, then look at our sponsors who vouch for
              us
            </Desc>
          </TextWrap>
        </BlockWrap>
      </Container>
      <FooterMain />
    </div>
  );
};

export default AboutPage;
