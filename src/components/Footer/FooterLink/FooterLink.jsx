import styled from "styled-components";
import { Link } from "react-router-dom";

const FootTitle = styled.h2`
  font-family: var(--advent);
  font-weight: 600;
  font-size: 50px;
  color: var(--white);
  margin-bottom: 20px;
`;

const FootLinkDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const FootLink = styled.a`
  font-family: var(--space);
  font-weight: 500;
  font-size: 25px;
  color: #9f9797;
  text-decoration: none;
  cursor: pointer;
`;
const FootWrap = styled.div`
  width: 300px;
  text-align: left;
`;

const FooterLink = () => {
  return (
    <FootWrap>
      <FootTitle>PlantShop</FootTitle>
      <FootLinkDiv>
        <FootLink>Catalog</FootLink>
        <FootLink>About us</FootLink>
        <FootLink>Sponsors</FootLink>
        <FootLink>Admin</FootLink>
        <FootLink>Ps Bishkek</FootLink>
        <FootLink>Ps IK</FootLink>
      </FootLinkDiv>
    </FootWrap>
  );
};

export default FooterLink;
