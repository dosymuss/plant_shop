import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import styled from "styled-components";

import outLike from "../../../assets/Plant/outlLike.svg";
import fullLike from "../../../assets/Plant/fullLike.svg";
import { patchPlant } from "../../../api/plantApi";
import { postBasket } from "../../../api/basketApi";

const PlantWrap = styled.div`
  width: 550px;
  height: 500px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background: var(--white);
  border-radius: 20px;
  position: relative;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledBText = styled.h3`
  text-align: left;
  font-family: var(--space);
  font-weight: 600;
  font-size: 30px;
  color: #000;
`;

const StyledDesc = styled.p`
  text-align: left;
  font-family: var(--advent);
  font-weight: 600;
  font-size: 20px;
  color: #9f9797;
  margin-top: 5px;
`;

const StyledBtnDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const StyledBtn = styled.button`
  border: 4px solid var(--green);
  border-radius: 10px;
  width: 220px;
  height: 64px;
  font-family: var(--space);
  background-color: ${(props) =>
    props.outlined ? "transparent" : "var(--green)"};
  font-weight: 700;
  font-size: 20px;
  color: ${(props) => (props.outlined ? "var(--green)" : "var(--white)")};
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const LikeBtn = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--black);
  position: absolute;
  top: 10px;
  right: 10px;
`;

const PalntDesc = ({ plant }) => {
  const [like, setLike] = useState(JSON.parse(plant.is_liked));

  const { mutate: plantPatch } = useMutation({
    mutationKey: ["patch plant"],
    mutationFn: (obj) => patchPlant(plant.id, obj),
  });

  const { mutate: postPlantBasket } = useMutation({
    mutationKey: ["post basket"],
    mutationFn: (obj) => postBasket(obj),
  });

  console.log(plant);

  const handleLike = () => {
    setLike((prev) => {
      const newLike = !prev; // Получаем актуальное значение после обновления
      plantPatch({ is_liked: JSON.stringify(newLike) }); // Отправляем запрос с актуальным значением
      return newLike; // Возвращаем новое значение для обновления состояния
    });
  };

  const handleAddBasket = () => {
    postPlantBasket(plant);
  };

  return (
    <PlantWrap>
      <LikeBtn onClick={handleLike}>
        <img src={like ? fullLike : outLike} alt="" />
      </LikeBtn>
      <ContentWrap>
        <div>
          <StyledBText>{plant.name}</StyledBText>
          <StyledDesc>{plant.desc}</StyledDesc>
        </div>
        <StyledBText>${plant.price}</StyledBText>
        <StyledBtnDiv>
          <StyledBtn outlined={true}>Buy now</StyledBtn>
          <StyledBtn onClick={handleAddBasket}>Add to basket</StyledBtn>
        </StyledBtnDiv>
      </ContentWrap>
    </PlantWrap>
  );
};

export default PalntDesc;
