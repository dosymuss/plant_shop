import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "../api/userApi";

import Container from "../components/Container/Container";
import ProfileInfo from "../components/Profile/ProfileInfo/ProfileInfo";
import Header from "../components/Header/Header";
import ProfileImage from "../components/Profile/ProfileImage/ProfileImage";

const StyledProfileWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: calc(100vh - 80px);
`;

const ProfilePage = () => {
  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUserInfo(),
    select: (data) => data.data[0],
  });

  if (data) {
    return (
      <Container>
        <Header />
        <StyledProfileWrap>
          <ProfileInfo user={data}/>
          <ProfileImage user={data} />
        </StyledProfileWrap>
      </Container>
    );
  }
};

export default ProfilePage;
