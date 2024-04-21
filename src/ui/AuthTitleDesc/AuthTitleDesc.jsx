import styled from "styled-components";

const Title = styled.p`
  font-family: var(--advent);
  font-weight: 600;
  font-size: 50px;
  color: #000;
`;

const Desc = styled.p`
  font-family: var(--space);
  font-weight: 700;
  font-size: 20px;
  color: #9f9797;
`;

const Wrap = styled.div`
  text-align: left;
  margin-bottom: 20px;
`;

const AuthTitleDesc = ({ title, desc }) => {
  return (
    <Wrap>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
    </Wrap>
  );
};

export default AuthTitleDesc;
