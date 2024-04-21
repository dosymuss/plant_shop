import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 0 100px;
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
