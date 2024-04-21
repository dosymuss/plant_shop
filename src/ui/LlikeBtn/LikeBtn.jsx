import styled from "styled-components";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import plantLikeIcon from "../../assets/Plant/plantLike.svg";
import plantLikeAccIcon from "../../assets/Plant/plantLikeAcc.svg";
import { patchPlant } from "../../api/plantApi";

const StyledLikeBtn = styled.button`
  && {
    height: 42px;
    width: 42px;
    border-radius: 15px;
    background-color: var(--black);
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      position: static;
    }
  }
`;

const LikeBtn = ({ isLiked, id }) => {
  const [like, setLike] = useState(JSON.parse(isLiked));

  const { mutate } = useMutation({
    mutationKey: ["patch plant"],
    mutationFn: (obj) => patchPlant(id, obj),
  });

  const handleLike = () => {
    setLike((prev) => {
      const newLike = !prev;
      mutate({ is_liked: JSON.stringify(newLike) });
      return newLike;
    });
  };

  return (
    <StyledLikeBtn onClick={handleLike}>
      <img src={like ? plantLikeAccIcon : plantLikeIcon} alt="" />
    </StyledLikeBtn>
  );
};

export default LikeBtn;
