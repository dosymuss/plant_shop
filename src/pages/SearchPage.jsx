import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";

import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import SearchInp from "../components/Search/SearchInp/SearchInp";
import Loader from "../ui/Loader/Loader";
import BigCard from "../ui/Cards/BigCard/BigCard";
import SmallCard from "../ui/Cards/SmallCard/SmallCard";
import { useState } from "react";
import { getSearchPlant } from "../api/plantApi";

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

const SearchPage = () => {
  const [text, setText] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["searchPlant", text],
    queryFn: () => getSearchPlant(text),
    select: (data) => data.data,
  });

  return (
    <Container>
      <Header />
      <SearchInp text={text} setText={setText} />
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

export default SearchPage;
