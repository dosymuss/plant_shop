import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import PalntDesc from "../components/PlantPage/PlantDesc/PalntDesc";
import PlantImage from "../components/PlantPage/PalntImage/PlantImage";
import OtherPlantScroll from "../components/PlantPage/OtherPalntScroll/OtherPlantScroll";
import { getPlantById } from "../api/plantApi";
import Loader from "../ui/Loader/Loader";

const StyledMain = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  margin-top: 30px;
  height: var(100vh - 60px);
`;

const LoaderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const PlantPage = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["plant", id],
    queryFn: () => getPlantById(id),
    select: (data) => data.data[0],
  });


  console.log(data);

  if (isLoading) {
    return (
      <LoaderWrap>
        <Loader />
      </LoaderWrap>
    );
  }

  if (data) {
    return (
      <Container>
        <div style={{ height: "100vh" }}>
          <Header />
          <StyledMain>
            <div>
              <PlantImage plant={data} />
              <OtherPlantScroll />
            </div>
            <PalntDesc plant={data} />
          </StyledMain>
        </div>
      </Container>
    );
  }
};

export default PlantPage;
