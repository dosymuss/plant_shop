import styled from "styled-components";
import React, { useEffect } from "react";

import Container from "../components/Container/Container";
import BigCard from "../ui/Cards/BigCard/BigCard";
import SmallCard from "../ui/Cards/SmallCard/SmallCard";
import { useQuery } from "@tanstack/react-query";
import { getPlants } from "../api/plantApi";

const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 30px;
  flex-wrap: wrap;
`;

const TestPage = () => {
  const {data} = useQuery({
    queryKey: ["plants"],
    queryFn: () => getPlants(),
    select: (data) => data.data,
  });

  console.log(data);

  const groups = 3;
  return (
    <Container>
      <Wrap>
        {[...Array(groups)].map((_, groupIndex) => (
          <React.Fragment key={groupIndex}>
            <BigCard />
            {[...Array(4)].map((_, cardIndex) => (
              <SmallCard key={cardIndex} />
            ))}
            <BigCard />
          </React.Fragment>
        ))}
      </Wrap>
    </Container>
  );
};

export default TestPage;
