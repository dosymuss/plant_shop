import styled from "styled-components";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import { getPlantLiked } from "../api/plantApi";
import Loader from "../ui/Loader/Loader";
import BigCard from "../ui/Cards/BigCard/BigCard";
import SmallCard from "../ui/Cards/SmallCard/SmallCard";

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

const LikedPlantPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["plantLiked"],
    queryFn: () => getPlantLiked(),
    select: (data) => data.data,
  });

  return (
    <Container>
      <Header />

      <Wrap>
        {isLoading ? (
          <LoaderWrap>
            <Loader />
          </LoaderWrap>
        ) : (
          data &&
          data.map((plant, index) => {
            if (index % 5 === 0) {
              return <BigCard key={index} plant={plant} />;
            } else {
              return <SmallCard key={index} plant={plant} />;
            }
          })
        )}
      </Wrap>
    </Container>
  );
};

export default LikedPlantPage;
