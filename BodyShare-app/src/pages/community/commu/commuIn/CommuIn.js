import styled from "styled-components";
import { useEffect, useState } from "react";
import Plus from "assets/Img/buttonplus.png";
import { useLocation, useNavigate } from "react-router-dom";
import Profile from "./Profile";
import Mainbar from "./Mainbar";
import Groups from "./Groups";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { userSelector } from "recoil/userRecoil";

const instance = axios.create({
  baseURL: "http://localhost:33000/api",
  withCredentials: true,
});

const Container = styled.div`
  margin: 10px;
`;

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
  const [communityData, setCommunityData] = useState([]);
  const [groupData, setGroupData] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  let userNo = useRecoilValue(userSelector);
  const [register, setRegister] = useState(0);
  let commuNo = location.pathname.split("/")[3];

  const deleteCommu = async function () {
    try {
      await instance.delete(`users/communitydel/${commuNo}/${userNo}`);
    } catch (error) {
      console.error(error);
    }
  };

  const registerCommu = async function () {
    try {
      await instance.post(`users/communityadd/${commuNo}/${userNo}`);
    } catch (error) {
      console.error(error);
    }
  };
  const commuList = async function () {
    try {
      const communityResponse = await instance.get(
        `/community/${commuNo}/${userNo}`
      );
      setCommunityData(communityResponse.data);
      setRegister(communityData.RegisterMember);
      groupList();
    } catch (error) {
      console.error(error);
    }
  };

  const groupList = async function () {
    try {
      const groupResponse = await instance.get(
        `/community/${commuNo}/feeds/1000`
      );
      setGroupData(groupResponse.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    commuList();
  }, [register]);

  const registerChange = (registerMember) => {
    {
      registerMember ? deleteCommu() : registerCommu();
    }
    setRegister(!registerMember);
  };

  return (
    <>
      <BannerPic>
        <Banner
          src={`http://localhost:33000/images/communitys/${communityData.bannerImageUrl}`}
        />
      </BannerPic>
      <Container>
        <Pf>
          <Pfpic
            src={`http://localhost:33000/images/communitys/${communityData.profileImageUrl}`}
          />
          <Profile
            title={communityData.communityName}
            intro={communityData.intro}
            sports={communityData.sportsName}
          />
        </Pf>
        <Mainbar
          registerMember={communityData.RegisterMember}
          userCnt={communityData.userCount}
          postCnt={communityData.postCount}
          registerChange={registerChange}
        />
        <Groups groupLists={groupData} />
        <Img src={Plus} onClick={() => navigate("/community/feedAdd/1")} />
      </Container>
    </>
  );
};

export default CommuIn;
