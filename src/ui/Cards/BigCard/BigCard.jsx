import styled from "styled-components";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import CardImg from "../../../assets/Plant/CardImg.svg";
import CardDecore from "../CardDecore/CardDecore";
import LikeBtn from "../../LlikeBtn/LikeBtn";

const CardStyle = styled.div`
  border-radius: 30px;
  width: 640px;
  height: 296px;
  padding: 20px;
  position: relative;
  background: ${(props) => props.gradient};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  overflow: hidden;

  span {
    font-family: var(--space);
    font-weight: 500;
    font-size: 15px;
    color: #9f9797;
  }

  p {
    font-family: var(--space);
    font-weight: 700;
    font-size: 25px;
    color: var(--white);
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    border-radius: 15px;
    width: 130px;
    height: 42px;
    background-color: var(--black);
    font-family: var(--space);
    font-weight: 700;
    font-size: 15px;
    color: var(--white);
    outline: none;
    border: none;
    transition: background 1s ease;
  }

  img {
    position: absolute;
    right: 0;
    top: 0;
  }
`;

const StyledImage = styled.div`
  && {
    width: 250px;
    height: 250px;
    background-color: white;
    background-image: url(${(props) => props.url});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 125px 0 125px 125px;
    position: absolute;
    right: -20px;
    top: -30px;
    transition: scale 1s ease;

    &:hover {
      scale: 2;
    }
  }
`;

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
`;

const ButtonDiv = styled.div`
  && {
    display: flex;
    gap: 15px;
    justify-content: flex-end;
  }
`;

const BigCard = ({ plant }) => {
  const [gradient, setGradient] = useState(
    "linear-gradient(135deg, #053f33 0%, #4ea795 100%)"
  );

  const { pathname } = useLocation();

  const navigate = useNavigate();

  function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  const randomNumber = getRandomNumber();

  useEffect(() => {
    if (randomNumber > 0 && randomNumber < 3) {
      setGradient("linear-gradient(135deg, #053f33 0%, #4ea795 100%)");
    }
    if (randomNumber > 2 && randomNumber < 5) {
      setGradient(" linear-gradient(135deg, #2e2b2b 0%, #acef9b 100%)");
    }
    if (randomNumber > 4 && randomNumber < 7) {
      setGradient(" linear-gradient(135deg, #053f33 0%, #9f9797 100%)");
    }
    if (randomNumber > 6) {
      setGradient("linear-gradient(135deg, #000 0%, #767373 100%)");
    }
  }, []);

  console.log(plant);

  if (plant) {
    return (
      <StyledWrap>
        <CardStyle gradient={gradient}>
          <span>{plant.category}</span>
          <div>
            <p>{plant.name}</p>
            <ButtonDiv>
              <button onClick={() => navigate(`/plant/${plant.id}`)}>
                Buy ${plant.price}
              </button>
              <LikeBtn isLiked={plant.is_liked} id={plant.id} />
            </ButtonDiv>
          </div>
          <StyledImage url={plant.image} />
        </CardStyle>
        {pathname !== "/main" && <CardDecore />}
      </StyledWrap>
    );
  }
};

export default BigCard;
