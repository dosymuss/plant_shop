import styled from "styled-components";

import arrowTop from "../../../assets/Basket/arrowTop.svg";
import arrowBottom from "../../../assets/Basket/arrowBottom.svg";
import x from "../../../assets/Basket/x.svg";
import { useEffect, useState } from "react";
import { deletePlantBasket } from "../../../api/basketApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const MainWrap = styled.div`
  display: flex;
  align-items: flex-start;
  height: 173px;
  border-bottom: 1px solid var(--grey);
  width: 900px;
`;
const CardWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 39px;
`;

const StyledImage = styled.img`
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  width: 228px;
  height: 153px;
  object-fit: cover;
`;

const TextDiv = styled.div`
  width: 300px;
  p {
    font-family: var(--advent);
    font-weight: 700;
    font-size: 30px;
    color: #000;
  }
  span {
    font-family: var(--space);
    font-weight: 700;
    font-size: 15px;
    color: #9f9797;
  }
`;

const Price = styled.p`
  font-family: var(--advent);
  font-weight: 700;
  font-size: 35px;
  color: #000;
  width: 90px;
`;

const CountDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 15px;
  width: 70px;
  height: 140px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background: var(--white);

  p {
    font-family: var(--space);
    font-weight: 700;
    font-size: 20px;
    color: #000;
  }

  button {
    background: transparent;
    border: none;
    outline: none;
  }
  img {
    width: 25px;
  }
`;

const DeleteBtn = styled.button`
  width: 70px;
  height: 140px;
  background: transparent;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  border-radius: 15px;

  img {
    width: 35px;
  }
`;

const BasketCardItem = ({ plant }) => {
  const price = plant.price;
  const [count, setCount] = useState(1);

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["delete basket"],
    mutationFn: (id) => deletePlantBasket(id),
  });

  const handleDelete = () => {
    mutate(plant.id);
    queryClient.invalidateQueries(["getBasketPlant"]);
  };

  useEffect(() => {
    if (!count) {
      mutate(plant.id);
      queryClient.invalidateQueries(["getBasketPlant"]);
    }
  }, [count]);

  return (
    <MainWrap>
      <CardWrap>
        <StyledImage src={plant.image} alt="" />

        <TextDiv>
          <p>{plant.name}</p>
          <span>{plant.desc}</span>
        </TextDiv>

        <Price>${price * count}</Price>

        <CountDiv>
          <button onClick={() => setCount((prev) => prev + 1)}>
            <img src={arrowTop} alt="arrowTop" />
          </button>
          <p>{count}</p>
          <button
            onClick={() => {
              if (count > 0) {
                setCount((prev) => prev - 1);
              }
            }}
          >
            <img src={arrowBottom} alt="arrowBottom" />
          </button>
        </CountDiv>

        <DeleteBtn onClick={handleDelete}>
          <img src={x} alt="" />
        </DeleteBtn>
      </CardWrap>
    </MainWrap>
  );
};

export default BasketCardItem;
