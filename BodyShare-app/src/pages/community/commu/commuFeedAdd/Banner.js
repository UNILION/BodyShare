import styled from "styled-components";
import bannerImg from "assets/Img/card_image2.png";

const BannerContainer = styled.div`
  width: 100%;
  height: 100px;
  overflow: hidden;
  position: relative;
`;

const BannerPic = styled.img`
  position: absolute;
  width: 100%;
  top: -100px;
`;

const Text = styled.div`
  position: absolute;
  top: 20px;
  left: 10px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 10px 20px;
`;

const Banner = function () {
  return (
    <BannerContainer>
      <BannerPic src={bannerImg} />
      <Text>클라이밍 동아리</Text>
    </BannerContainer>
  );
};

export default Banner;
