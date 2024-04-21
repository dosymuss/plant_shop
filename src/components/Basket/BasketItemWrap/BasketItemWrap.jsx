import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import noDataSvg from "../../../assets/Basket/noData.svg";

import BasketCardItem from "../BasketCardItem/BasketCardItem";
import { getBasketPlant } from "../../../api/basketApi";
import Loader from "../../../ui/Loader/Loader";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

const LoaderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 800px;
`;

const NoDataDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 480px;
  width: 800px;

  img {
    width: 400px;
  }
`;

const BasketItemWrap = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["getBasketPlant"],
    queryFn: () => getBasketPlant(),
    select: (data) => data.data,
  });

  return (
    <Wrap>
      {isLoading ? (
        <LoaderWrap>
          <Loader />
        </LoaderWrap>
      ) : data && data.length > 0 ? (
        data.map((plant) => <BasketCardItem plant={plant} />)
      ) : (
        <NoDataDiv>
          <img src={noDataSvg} alt="" />
        </NoDataDiv>
      )}
    </Wrap>
  );
};

export default BasketItemWrap;
