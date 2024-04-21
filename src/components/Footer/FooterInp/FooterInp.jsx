import styled from "styled-components";

import pinterest from "../../../assets/Footer/pinterest.svg";
import telega from "../../../assets/Footer/telega.svg";
import what from "../../../assets/Footer/watsUp.svg";
import insta from "../../../assets/Footer/insta.svg";

const Title = styled.h3`
  font-family: var(--space);
  font-weight: 700;
  font-size: 25px;
  color: var(--white);
`;

const Desc = styled.p`
  font-family: var(--space);
  font-weight: 300;
  font-size: 16px;
  color: var(--white);
`;

const FootInpDiv = styled.div`
  display: flex;
  align-items: center;
  input {
    border: 1px solid var(--white);
    border-radius: 10px 0 0 10px;
    padding-left: 10px;
    width: 358px;
    height: 42px;
    background-color: transparent;

    font-family: var(--space);
    font-weight: 300;
    font-size: 25px;
    color: var(--white);
  }
  button {
    border: 1px solid var(--white);
    border-radius: 0 10px 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 126px;
    height: 42px;
    background-color: transparent;
    font-family: var(--space);
    font-weight: 300;
    font-size: 25px;
    color: var(--white);
  }
`;

const Wrap = styled.div`
  display: flex;
  padding: 30px 30px 0 0 ;
  flex-direction: column;
  gap: 15px;
  align-items: start;
`;

const LinkImg = styled.img`
  height: 45px;
`;

const LinkDiv = styled.div`
  display: flex;
  gap: 15px;
`;

const FooterInp = () => {
  const links = [
    {
      path: "",
      src: pinterest,
    },
    {
      path: "",
      src: telega,
    },
    {
      path: "",
      src: what,
    },
    {
      path: "",
      src: insta,
    },
  ];

  return (
    <>
      <Wrap>
        <Title>Write to us</Title>
        <FootInpDiv>
          <input placeholder="Message" type="text" />
          <button>Send</button>
        </FootInpDiv>
        <Desc>Thank you for choosing us</Desc>
        <LinkDiv>
          {links.map((item, index) => (
            <a key={index} href={item.path}>
              <LinkImg src={item.src} alt="" />
            </a>
          ))}
        </LinkDiv>
      </Wrap>
    </>
  );
};

export default FooterInp;
