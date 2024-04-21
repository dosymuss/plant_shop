import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import CardImg from "../../../assets/Plant/CardImg.svg";
import LikeBtn from "../../LlikeBtn/LikeBtn";

const SmallCardWrap = styled.div`
  padding: 20px;
  background: ${(props) => props.gradient};
  border-radius: 30px;
  width: 260px;
  height: 423px;
  position: relative;
  overflow: hidden;
  text-align: left;

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
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
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
    border-radius: 125px 125px 0 125px;
    position: absolute;
    right: -20px;
    bottom: -30px;
    transition: scale 1s ease;

    &:hover {
      scale: 1.5;
    }
  }
`;

const BtnDiv = styled.div`
  && {
    display: flex;
    gap: 15px;
    flex-direction: row;
  }
`;

const SmallCard = ({ plant }) => {
  const [gradient, setGradient] = useState(
    "linear-gradient(135deg, #053f33 0%, #17cf97 100%)"
  );

  const navigate = useNavigate();

  function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  const randomNumber = getRandomNumber();

  useEffect(() => {
    if (randomNumber > 0 && randomNumber < 4) {
      setGradient("linear-gradient(135deg, #053f33 0%, #17cf97 100%)");
    }
    if (randomNumber > 3 && randomNumber < 7) {
      setGradient("linear-gradient(135deg, #000 0%, #504c4c 100%)");
    }
    if (randomNumber > 6) {
      setGradient("linear-gradient(135deg, #17cf97 0%, #acef9b 100%)");
    }
  }, []);

  if (plant) {
    return (
      <SmallCardWrap gradient={gradient}>
        <div>
          <span>{plant.category}</span>
          <p>{plant.name}</p>
          <BtnDiv>
            <button onClick={() => navigate(`/plant/${plant.id}`)}>
              Buy ${plant.price}
            </button>
            <LikeBtn isLiked={plant.is_liked} id={plant.id} />
          </BtnDiv>
        </div>
        <StyledImage url={plant.image} />
      </SmallCardWrap>
    );
  }
};

export default SmallCard;
