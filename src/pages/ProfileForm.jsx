import styled from "styled-components";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useQuery, useMutation } from "@tanstack/react-query";

import EditProfileBack from "../assets/Profile/EditProfileBack.svg";
import Logo from "../assets/Auth/Logo.svg";
import ExitIcon from "../assets/Auth/ExitIcon.svg";
import AuthTitleDesc from "../ui/AuthTitleDesc/AuthTitleDesc";
import Input from "../ui/Input/Input";
import AuthButton from "../ui/AuthButton/AuthButton";
import { useState } from "react";
import { getUserInfo, patchUser } from "../api/userApi";

const StyledBack = styled.div`
  width: 50vw;
  height: 100vh;
  background-image: url(${EditProfileBack});
  background-position: center;
  transition: 1s ease;
  transform: translateX(${(props) => (props.active ? "48.9313vw" : "0")});
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  font-family: var(--advent);
  font-weight: 600;
  font-size: 70px;
  color: var(--white);
  padding: 15px;
  z-index: 3;
  background-size: cover;
`;

const StyledLogo = styled.img.attrs({ alt: "logo", src: Logo })`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
`;

const BackLink = styled(Link).attrs({ to: "/profile" })`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: var(--white);
  background-image: url(${ExitIcon});
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const InpForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FormWrap = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Desc = styled.p`
  margin-top: 40px;
  font-family: var(--space);
  font-weight: 700;
  font-size: 20px;
  color: #9f9797;
  text-align: left;
`;

const ProfileForm = () => {
  const { data: userData, isLoading: isUserLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUserInfo(),
    select: (data) => data.data[0],
  });

  const { mutate, isSuccess } = useMutation({
    mutationKey: ["patch user"],
    mutationFn: (obj) => patchUser(obj),
  });

  const formik = useFormik({
    initialValues: {
      email: isUserLoading ? "" : userData?.email,
      name: isUserLoading ? "" : userData?.name,
      full_name: isUserLoading ? "" : userData?.full_name,
      number: isUserLoading ? "" : userData?.number,
    },
    onSubmit: (values) => {
      console.log(values);
      mutate(values);
    },
  });

  if (!isUserLoading) {
    return (
      <div style={{ display: "flex" }}>
        <StyledBack>
          <StyledLogo />
          <p>PlantShop</p>
          <BackLink />
        </StyledBack>
        <FormWrap>
          <div style={{ width: "450px" }}>
            <AuthTitleDesc
              title={"Update your profile"}
              desc={"Edit your profile as you like"}
            />
            <InpForm>
              <Input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                name={"email"}
                placeholder={"Email"}
                type={"text"}
              />
              <Input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                name={"name"}
                placeholder={"Nickname"}
                type={"text"}
              />
              <Input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.full_name}
                name={"full_name"}
                placeholder={"Name"}
                type={"text"}
              />
              <Input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.number}
                name={"number"}
                placeholder={"Number"}
                type={"text"}
              />
              <AuthButton onClick={formik.handleSubmit} text={"Update"} />
            </InpForm>
            <Desc>Fill out the fields and we will update your profile</Desc>
          </div>
        </FormWrap>
      </div>
    );
  }
};

export default ProfileForm;
