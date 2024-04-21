import styled from "styled-components";
import { Link } from "react-router-dom";

import EditIcon from "../../../assets/Profile/EditIcon.svg";

const NickName = styled.p`
  font-family: var(--space);
  font-weight: 700;
  font-size: 40px;
  color: #17cf97;
`;

const Name = styled.p`
  font-family: var(--space);
  font-weight: 700;
  font-size: 40px;
  color: #000;
  margin-bottom: 10px;
`;

const Desc = styled.p`
  font-family: var(--advent);
  font-weight: 500;
  font-size: 25px;
  color: #9f9797;
`;

const StyledLink = styled(Link)`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: var(--black);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  img {
    width: 20px;
  }
`;

const ProfileInfoWrap = styled.div`
  text-align: left;
  width: 500px;
  div {
    margin-bottom: 60px;
  }
`;


const ProfileInfo = ({ user }) => {
  return (
    <ProfileInfoWrap>
      <div>
        <NickName>{user.name}</NickName>
        <Name>{user.full_name}</Name>
        <Desc>{user.email}</Desc>
        <Desc>{user.number}</Desc>
      </div>
      <Desc>
        Не важно с какой скоростью ты двигаешься братишка, главное не
        останавливайся
      </Desc>
      <StyledLink to={"/edit_profile"}>
        <img src={EditIcon} alt="" />
      </StyledLink>
    </ProfileInfoWrap>
  );
};

export default ProfileInfo;
