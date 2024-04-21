import styled from "styled-components";

import logo from "../../../assets/Header/Logo.svg";
import searchIcon from "../../../assets/Search/searchIcon.svg";

const StyledWrap = styled.header`
  border-radius: ${(props) =>
    props.path === "/catalog" ? "20px 20px 0px 0px" : "40px"};
  height: 60px;
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  background-color: var(--white);
  padding: 0 25px 0 13px;
  font-family: var(--space);
  font-weight: 500;
  font-size: 20px;
  color: #000;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  margin: 30px 0;
`;
const LogoDiv = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  && {
    font-size: 22px;
  }
`;
const LinkItem = styled.p`
  color: black;
  text-decoration: none;
`;

const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  input {
    height: 40px;
    border-radius: 15px;
    outline: none;
    border: 1px solid var(--grey);
    padding-left: 15px;
    width: 450px;
    font-family: var(--space);
    font-weight: 500;
    font-size: 20px;
    color: #999797;
  }

  button {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    background-color: var(--black);
  }
`;

const SearchInp = ({ text, setText }) => {
  return (
    <StyledWrap>
      <LogoDiv>
        <img src={logo} alt="logo" />
        <LinkItem>PlantShop</LinkItem>
      </LogoDiv>

      <SearchDiv>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Search"
        />
        <button>
          <img src={searchIcon} alt="" />
        </button>
      </SearchDiv>
    </StyledWrap>
  );
};

export default SearchInp;
