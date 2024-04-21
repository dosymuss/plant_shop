import { useState } from "react";
import styled from "styled-components";

const StyledBImg = styled.img`
  border-radius: 30px;
  width: 400px;
  height: 350px;
  object-fit: cover;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;

const StyledBtnImg = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  /* border: 2px solid var(--green); */
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  img {
    width: 80px;
    height: 80px;
    border-radius: 20px;
    object-fit: cover;
  }
`;

const StyledSImgWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledMainImgWrap = styled.div`
  display: flex;
  align-items: start;
  gap: 30px;
  margin-bottom: 20px;
`;

const PlantImage = ({ plant }) => {
  const [initialUrl, setInitialUrl] = useState(plant.image);

  return (
    <StyledMainImgWrap>
      <StyledBImg src={initialUrl} alt="bigImg" />
      <StyledSImgWrap>
        {plant.images.map((url) => (
          <StyledBtnImg onClick={() => setInitialUrl(url)}>
            <img src={url} alt="smallIMg" />
          </StyledBtnImg>
        ))}
      </StyledSImgWrap>
    </StyledMainImgWrap>
  );
};

export default PlantImage;
