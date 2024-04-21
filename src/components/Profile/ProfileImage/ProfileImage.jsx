import { useState } from "react";
import styled from "styled-components";

import EditIcon from "../../../assets/Profile/EditIcon.svg";
import { useMutation } from "@tanstack/react-query";
import { patchUser } from "../../../api/userApi";

const StyledImage = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 200px 0 200px 200px;
  background-color: #17cf97;
  background-image: url(${(props) => props.url});
  background-position: center;
  background-size: cover;
`;

const StyledLabel = styled.label`
  width: 40px;
  height: 40px;
  border-radius: ${(props) => (props.isOpen ? "0 20px 20px 0" : "20px")};
  background-color: var(--black);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 20px;
  }
`;

const StyledWrap = styled.div`
  width: 500px;
  height: 500px;
  position: relative;
`;

const InpWrap = styled.div`
  display: flex;
  margin-top: 40px;
  position: absolute;
  bottom: 10px;
  right: 0;

  input {
    height: 40px;
    background-color: black;
    color: white;
    font-family: var(--space);
    font-weight: 300;
    font-size: 20px;
    border-radius: 20px 0 0 20px;
    border: none;
    outline: none;
    padding-left: 15px;
    transition: transform 1s ease;
    transform: ${(props) => (props.isOpen ? "scaleX(100%)" : "scaleX(0)")};
  }
`;

const ProfileImage = ({ user }) => {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState(user.image);

  const { mutate, isSuccess } = useMutation({
    mutationKey: ["patch user"],
    mutationFn: (obj) => patchUser(obj),
  });

  const handleBlur = () => {
    setOpen(!open);
    mutate({ image: url });
  };

  return (
    <StyledWrap>
      <StyledImage url={url ? url : ""}></StyledImage>
      <InpWrap isOpen={open}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onBlur={handleBlur}
        />
        <StyledLabel isOpen={open} as={"button"} onClick={() => setOpen(!open)}>
          <img src={EditIcon} alt="" />
        </StyledLabel>
      </InpWrap>
    </StyledWrap>
  );
};

export default ProfileImage;
