import styled from "styled-components";
import { useEffect, useState } from "react";
import Plus from "assets/Img/buttonplus.png";
import { useLocation, useNavigate } from "react-router-dom";
import Profile from "./Profile";
import Mainbar from "./Mainbar";
import Groups from "./Groups";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:33000/api",
  withCredentials: true,
});

const BannerPic = styled.div`
  width: 100%;
  height: 100px;
  overflow: hidden;
  position: relative;
`;

const Banner = styled.img`
  width: 100%;
  position: absolute;
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

const CommuIn = function () {
  const [register, setRegister] = useState(false);
  const [communityData, setCommunityData] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const commuList = async function () {
    try {
      const communityResponse = await instance.get(
        `/community/${location.pathname.split('/')[3]}`
      );
      console.log(communityResponse)
      setCommunityData(communityResponse.data);
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    commuList();
  }, []);

  const registerChange = (register) => {
    setRegister(!register);
  };

  return (
    <>
      <BannerPic>
        <Banner src={`http://localhost:33000/images/communitys/${communityData.bannerImageUrl}`} />
      </BannerPic>
      <Pf>
        <Pfpic src={`http://localhost:33000/images/communitys/${communityData.profileImageUrl}`} />
        <Profile title={communityData.communityName} intro={communityData.intro} sports={communityData.sportsName}/>
      </Pf>
      <Mainbar register={register} registerChange={registerChange} />
      <Groups />
      <Img src={Plus} onClick={() => navigate("/community/feedAdd")} />
    </>
  );
};

export default CommuIn;
