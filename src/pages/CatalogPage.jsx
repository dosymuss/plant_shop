import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import Header from "../components/Header/Header";
import Container from "../components/Container/Container";
import BigCard from "../ui/Cards/BigCard/BigCard";
import SmallCard from "../ui/Cards/SmallCard/SmallCard";
import FooterMain from "../components/Footer/FooterMain/FooterMain";
import { getPlantByCategory, getPlants } from "../api/plantApi";
import Loader from "../ui/Loader/Loader";

const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  margin: 30px 0;
`;

const LoaderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
`;

const CatalogPage = () => {
  const [category, setCategory] = useState("All");
  const [plants, setPlants] = useState(null);
  const [groups, setGroups] = useState(0);

  const queryClient = useQueryClient();

  const { data: allPlantsData, isLoading: isAllPlantLoading } = useQuery({
    queryKey: ["plants"],
    queryFn: () => getPlants(),
    enabled: category === "All",
  });

  const { data: categoryPlantsData, isLoading: isCategoryLoading } = useQuery({
    queryFn: ["plantCategory", category],
    queryFn: () => getPlantByCategory(category),
    enabled: category !== "All",
  });

  useEffect(() => {
    queryClient.invalidateQueries(["plantCategory"]);
  }, [category]);

  useEffect(() => {
    if (category === "All") {
      setPlants(allPlantsData?.data);
    } else {
      setPlants(categoryPlantsData?.data);
    }
  }, [allPlantsData, categoryPlantsData, category]);

  useEffect(() => {
    if (plants) {
      setGroups(Math.ceil(plants.length / 3));
    } else {
      setGroups(0); // Задаем начальное состояние, когда растений нет
    }
  }, [plants]);

  return (
    <>
      <Container>
        <Header setCategory={setCategory} />
        <Wrap>
          {(isAllPlantLoading || isCategoryLoading) && (
            <LoaderWrap>
              <Loader />
            </LoaderWrap>
          )}
          {plants &&
            plants.map((plant, index) => {
              // Определяем, когда нужно отобразить BigCard
              if (index % 5 === 0) {
                // Например, каждый пятый элемент (0, 5, 10, ...)
                return <BigCard key={index} plant={plant} />;
              } else {
                // Иначе показываем SmallCard
                return <SmallCard key={index} plant={plant} />;
              }
            })}
        </Wrap>
      </Container>
      <FooterMain />
    </>
  );
};

export default CatalogPage;
