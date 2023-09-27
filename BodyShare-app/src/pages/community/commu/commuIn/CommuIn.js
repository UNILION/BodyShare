import styled from "styled-components";
import { useState } from "react";
import bannerPic from "assets/Img/card_image2.png";
import userPic from "assets/Img/user.png";
import Plus from "assets/Img/buttonplus.png";
import { useNavigate } from "react-router-dom";
import Profile from "./Profile";
import Mainbar from "./Mainbar";
import Groups from "./Groups";

const BannerPic = styled.div`
  width: 100%;
  height: 100px;
  overflow: hidden;
  position: relative;
`;

const Banner = styled.img`
  width: 100%;
  position: absolute;
  top: -100px;
`;

const Pf = styled.ul`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 90%;
`;

const Pfpic = styled.img`
  width: 108px;
  height: 108px;
`;

const Img = styled.img`
  display: grid;
  align-items: end;
  margin: 20px 20px 20px auto;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const CommuHome = function () {
  const [page, setPage] = useState(1);
  const [register, setRegister] = useState(false);
  const navigate = useNavigate();

  const handleChange = (page) => {
    setPage(page);
  };

  const registerChange = (register) => {
    setRegister(!register);
  };

  return (
    <>
      <BannerPic>
        <Banner src={bannerPic} />
      </BannerPic>
      <Pf>
        <Pfpic src={userPic} />
        <Profile />
      </Pf>
      <Mainbar register={register} registerChange={registerChange} />
      <Groups />
      <Img src={Plus} onClick={() => navigate("/community/feedAdd")} />
    </>
  );
};

export default CommuHome;
