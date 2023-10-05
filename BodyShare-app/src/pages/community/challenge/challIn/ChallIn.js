import styled from "styled-components";
import ChallCard from "components/commons/ChallCard";
import previous from "assets/Img/Previous.png";
import { useLocation, useNavigate } from "react-router-dom";
import Image1 from "assets/Img/Climing4.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
import ButtonTT from "pages/mypage/newverst/ButtonTT"

const instance = axios.create({
  baseURL: "http://localhost:33000/api",
  withCredentials: true,
});

const Container = styled.div`
  padding: 10px;
`;

const Previous = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-bottom: 10px;
`;

const ChallIn = function () {
  const [Condition, setCondition] = useState(false); // 클릭 상태를 관리합니다.

  // 버튼 클릭 시 클릭 상태를 토글합니다.
  const handleButtonClick = () => {
    setCondition(!Condition);
  };

  const [feedData, setFeedData] = useState();
  const location = useLocation();
  const feedNo = location.pathname.split("/")[3];
  const navigate = useNavigate();
  // const year = feedData ? String(feedData.createdDate.split('-')[0]) : 0
  // const month = feedData ? String(feedData.createdDate.split('-')[1]) : 0
  // const day = feedData ? String(feedData.createdDate.split('-')[2]) : 0
  // const feedTime = feedData ? year + "년" + month + "월" + day.substring(0,2) + "일" : 0

  const feedList = async function () {
    try {
      const feedResponse = await instance.get(
        `/post/${feedNo}`
      );
      console.log(feedResponse.data);
      setFeedData(feedResponse.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    feedList();
  }, []);

  return (
    <>
      <Container>
        <Previous
          src={previous}
          alt="뒤로가기"
          onClick={() => navigate("/community")}
        />

        {feedData ?
          <ChallCard
            // img={`http://localhost:33000/images/posts/${feedData.contentImageUrl}`}
            img={Image1}
            title="클라이밍 매일 1시간"
            exercise="3"
            time="8"
            upload="2023/09/03 ~ 2023/09/10"
            dday="3"
            contents="매일 요가를 1시간씩 즐겨보아요"
          />
          : null
        }
        <ButtonTT
        name={Condition ? "챌린지 종료하기" : "챌린지 참여하기"}
        bc={Condition ? "#FF3131" : "#556FFF"}
        hovercolor={Condition ? "#FF0000" : ""}
        iwidth={Condition ? "40px" : "30px"}
        iheight={Condition ? "40px" : "30px"}
        imt={Condition ? "5px" : "0"}
        width="270px"
        fs="15px"
        ml="50px"
        mt="30px"
        onClick={handleButtonClick} // condition을 전달
      />
      </Container>
      
    </>

  );
};

export default ChallIn;
