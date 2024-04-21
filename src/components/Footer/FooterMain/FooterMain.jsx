import styled from "styled-components";
import FooterLink from "../FooterLink/FooterLink";
import FooterInp from "../FooterInp/FooterInp";
import Container from "../../Container/Container";

const FootMainWrap = styled.div`
  background-color: var(--green);
  padding: 50px 0;
  margin-top: 20px;
`;

const FooterContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const AuthorNames = styled.p`
margin-top: 10px;
  text-align: left;
  font-family: var(--space);
  font-weight: 300;
  font-size: 25px;
  color: var(--white);
`;

const FooterMain = () => {
  return (
    <FootMainWrap>
      <Container>
        <FooterContentDiv>
          <FooterLink />
          <FooterInp />
        </FooterContentDiv>
        <hr />
        <AuthorNames>Dossymus|NZX|</AuthorNames>
      </Container>
    </FootMainWrap>
  );
};

export default FooterMain;
