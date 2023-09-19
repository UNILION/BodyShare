import styled from "styled-components";
import bannerPic from "assets/Img/banner.jpg";
import { useNavigate } from "react-router-dom";
import Button from "components/commons/Button";
import Image5 from "assets/Img/right.png";
import Icon from "pages/mypage/mypage/Icon";
import InfoCard from "pages/mypage/mypage/InfoCard";

const Banner = styled.img`
    height: 87px;
    width: 390px;
`;

const Title = styled.p`
    margin-top: 8px;
    margin-left: 5px;
    height: 45px;
    font-size: 23px;
`;

const Buttons = styled.ul`
  margin-top: 20px;
  margin-left: 170px;
`;

const MyPage = function () {
  const navigate = useNavigate();

  const profileInfo = {
    id: "아이디",
    nickname: "닉네임",
    height: "167",
    weight: "50"
  };

  return (
    <>
      <Banner src={bannerPic} />
      <Title>마이페이지</Title>
      <Icon
        id={profileInfo.id} 
      />
      <InfoCard 
        id={profileInfo.id}
        nickname={profileInfo.nickname}
        height={profileInfo.height}
        weight={profileInfo.weight}
      />
      <Buttons>
        <Button
          name="프로필 수정"
          img={Image5}
          onClick={() => navigate("/mypage/modify")}
          mb="5px"
        />
        <Button
          name="로그아웃"
          img={Image5}
          onClick={() => navigate("/mypage/logout")}
        />
      </Buttons>
    </>
  );
};

export default MyPage;