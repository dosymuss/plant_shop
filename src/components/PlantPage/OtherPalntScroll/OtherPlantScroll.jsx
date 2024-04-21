import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { getPlants } from "../../../api/plantApi";
import { useNavigate } from "react-router-dom";

const Title = styled.p`
  font-family: var(--advent);
  font-weight: 600;
  font-size: 30px;
  color: #000;
  margin-bottom: 15px;
  text-align: left;
`;

const Wrap = styled.div`
  width: 450px;
`;

const StyledBtnImg = styled.button`
  width: 110px;
  height: 110px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  scroll-snap-align: center;
  /* border: 2px solid var(--green); */
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  img {
    width: 110px;
    height: 110px;
    border-radius: 30px;
    object-fit: cover;
  }
`;

const ScrollDiv = styled.div`
  width: 450px;
  padding: 10px 0;
  display: flex;
  gap: 30px;
  overflow-x: scroll;
  padding-left: 10px;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    width: 2px; /* ширина для вертикального скролла */
    height: 4px; /* высота для горизонтального скролла */
  }

  /* Стилизация ползунка прокрутки */
  &::-webkit-scrollbar-thumb {
    background-color: var(--green); /* цвет ползунка */
    border-radius: 2px; /* закругление углов ползунка */
  }

  /* Стилизация дорожки прокрутки */
  &::-webkit-scrollbar-track {
    background: #dad7d7; /* цвет дорожки */
  }
`;

const OtherPlantScroll = () => {
  const { data } = useQuery({
    queryKey: ["plants"],
    queryFn: () => getPlants(),
    select: (data) => data.data,
  });

  const navigate = useNavigate();

  return (
    <Wrap>
      <Title>Other options</Title>
      <ScrollDiv>
        {data &&
          data.length > 0 &&
          data.map((plant) => (
            <StyledBtnImg onClick={() => navigate(`/plant/${plant.id}`)}>
              <img src={plant.image} alt="smallIMg" />
            </StyledBtnImg>
          ))}
      </ScrollDiv>
    </Wrap>
  );
};

export default OtherPlantScroll;
