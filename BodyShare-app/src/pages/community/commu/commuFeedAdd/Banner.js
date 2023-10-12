import styled from "styled-components";
import useCustomAxios from "components/commons/CustomAxios"
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const BannerContainer = styled.div`
  width: 100%;
  height: 100px;
  overflow: hidden;
  position: relative;
`;

const BannerPic = styled.img`
  position: absolute;
  width: 100%;
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
  const instance = useCustomAxios();
  const [postData, setPostData] = useState([]);
  const location = useLocation();
  let commuNo = location.pathname.split("/")[3];
  const post = async function () {
    try {
      const postResponse = await instance.get(`/post/postadd/${commuNo}`);
      setPostData(postResponse.data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    post();
  }, []);
  return (
    <BannerContainer>
      <BannerPic
        src={`${process.env.REACT_APP_IMAGE_SERVER}/communitys/${postData.bannerImageUrl}`}
      />
      <Text>{postData.communityName}</Text>
    </BannerContainer>
  );
};

export default Banner;
