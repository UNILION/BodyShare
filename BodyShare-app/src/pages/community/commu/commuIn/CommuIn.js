import styled from "styled-components";
import { useEffect, useState } from "react";
import Plus from "assets/Img/buttonplus.png";
import { useLocation, useNavigate } from "react-router-dom";
import Profile from "./Profile";
import Mainbar from "./Mainbar";
import Groups from "./Groups";
import previous from "assets/Img/Previous.png";
import useCustomAxios from "components/commons/CustomAxios"
import { useRecoilValue } from "recoil";
import { userSelector } from "recoil/userRecoil";

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

const Previous = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin: 10px;
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
  const instance = useCustomAxios();
  const [communityData, setCommunityData] = useState([]);
  const [groupData, setGroupData] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const userNo = useRecoilValue(userSelector);
  const [register, setRegister] = useState(0);
  const commuNo = location.pathname.split("/")[3];

  const deleteCommu = async function () {
    try {
      if (register > 0) {
        await instance.delete(`users/communitydel/${commuNo}/${userNo}`);
        setRegister(!register)
      }
    } catch (error) {
      console.error(error);
    }
  };

  const registerCommu = async function () {
    try {
      if (register == 0) {
        await instance.post(`users/communityadd/${commuNo}/${userNo}`);
        setRegister(!register)
      }
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
        <Previous
          src={previous}
          alt="뒤로가기"
          onClick={() => navigate("/community")}
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
        {groupData ?
          <Groups groupLists={groupData} />
          : null}
        <Img src={Plus} onClick={() => navigate(`/community/feedAdd/${communityData.communityNo}`)} />
      </Container>
    </>
  );
};

export default CommuIn;