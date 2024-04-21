import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

import logo from "../../assets/Header/Logo.svg";
import likeIcon from "../../assets/Header/headerLikeIcon.svg";
import profileIcon from "../../assets/Header/headerProfileIcon.svg";
import basketIcon from "../../assets/Header/headerBasketIcon.svg";

import likeAtiveIcon from "../../assets/Header/hLikeActiveIcon.svg";
import profileActiveIcon from "../../assets/Header/hProfileActiveIcon.svg";
import basketActiveIcon from "../../assets/Header/hBasketActiveIcon.svg";

const StyledHeader = styled.header`
  border-radius: ${(props) =>
    props.path === "/catalog" ? "20px 20px 0px 0px" : "40px"};
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--white);
  padding: 0 13px;
  font-family: var(--space);
  font-weight: 500;
  font-size: 20px;
  color: #000;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;

const LogoDiv = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  && {
    font-size: 22px;
  }
`;

const LinkDiv = styled.div`
  display: flex;
  gap: 20px;
`;

// ${(props) => (props.isActive ? "var(--emerald)" : "black")}

const LinkItem = styled(NavLink).attrs({ activeClassName: "active" })`
  color: black;
  text-decoration: none;

  &.active {
    color: ${(props) => (props.logo ? "black" : "var(--emerald)")};
  }
`;

const LinkBtn = styled(NavLink)`
  width: 45px;
  height: 45px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

const HeaderWrap = styled.div`
  padding-top: 20px;
`;

const CategoryWrap = styled.div`
  height: 70px;
  padding: 28px 20px;
  border-radius: 0 0 20px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--white);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;

const CategoryBtn = styled.button`
  background: #dff2eb;
  border-radius: 10px;
  padding: 10px 29px;
  font-family: var(--space);
  font-weight: 500;
  font-size: 15px;
  color: #000;
  border: none;
  outline: none;
`;

const Header = ({ setCategory }) => {
  const [page, setPage] = useState("");

  const { pathname } = useLocation();

  const category = [
    "All",
    "Flowers",
    "Houseplants",
    "Trees",
    "Aquatic Plants",
    "Cacti",
    "Ferns",
    "Rare",
    "Artificial",
  ];

  return (
    <HeaderWrap>
      <StyledHeader path={pathname}>
        <LogoDiv>
          <img src={logo} alt="logo" />
          <LinkItem logo={true} to={"/main"}>
            PlantShop
          </LinkItem>
        </LogoDiv>

        <LinkDiv>
          <LinkItem
            isActive={page === "catalog"}
            onClick={() => setPage("catalog")}
            to={"/catalog"}
          >
            Catalog
          </LinkItem>
          <LinkItem
            isActive={page === "about"}
            onClick={() => setPage("about")}
            to={"/about"}
          >
            About Us
          </LinkItem>
          <LinkItem
            to={"/search"}
            isActive={page === "like"}
            onClick={() => setPage("search")}
          >
            Search
          </LinkItem>
        </LinkDiv>

        <LinkDiv>
          <LinkBtn to={"/like"} onClick={() => setPage("likePage")}>
            <img
              src={pathname === "/like" ? likeAtiveIcon : likeIcon}
              alt="likeActiveIcon"
            />
          </LinkBtn>
          <LinkBtn to={"/profile"} onClick={() => setPage("profile")}>
            <img
              src={pathname === "/profile" ? profileActiveIcon : profileIcon}
              alt="profileActiveIcon"
            />
          </LinkBtn>
          <LinkBtn to={"/basket"} onClick={() => setPage("basket")}>
            <img
              src={page === "basket" ? basketActiveIcon : basketIcon}
              alt="basketActiveIcon"
            />
          </LinkBtn>
        </LinkDiv>
      </StyledHeader>
      {pathname === "/catalog" && (
        <CategoryWrap>
          {category.map((category) => (
            <CategoryBtn onClick={() => setCategory(category)}>
              {category}
            </CategoryBtn>
          ))}
        </CategoryWrap>
      )}
    </HeaderWrap>
  );
};

export default Header;
