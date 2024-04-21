import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { getPlants } from "../../../api/plantApi";

import BigCard from "../../../ui/Cards/BigCard/BigCard";
import Loader from "../../../ui/Loader/Loader";

const ExmpleCard = styled.div`
  border-radius: 30px;
  width: 640px;
  height: 296px;
  background: linear-gradient(135deg, #053f33 0%, #4ea795 100%);
`;

const CardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) => (props.isLoading ? "center" : "space-between")};
  height: ${(props) => (props.isLoading ? "500px" : "auto")};
  align-items: center;
  gap: 20px;
`;
const Title = styled.h2`
  font-family: var(--advent);
  font-weight: 600;
  font-size: 40px;
  color: #000;
  margin-bottom: 20px;
`;

const Wrap = styled.div`
  text-align: left;
  margin: 30px 0;
`;

const MainBestProd = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["plants"],
    queryFn: () => getPlants(),
    select: (data) => data.data.slice(0, 4),
  });

  console.log(data, isLoading);

  return (
    <Wrap>
      <Title>Best products</Title>
      <CardWrap isLoading={isLoading}>
        {isLoading && <Loader />}

        {data &&
          data.length > 0 &&
          !isLoading &&
          data.map((plant) => <BigCard plant={plant} />)}
      </CardWrap>
    </Wrap>
  );
};

export default MainBestProd;
