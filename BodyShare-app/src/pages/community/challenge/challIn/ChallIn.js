import styled from "styled-components";
import FeedCard from "components/commons/FeedCard";
import previous from "assets/Img/Previous.png";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

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
  const [feedData, setFeedData] = useState();
  const location = useLocation();
  const feedNo = 1
  const navigate = useNavigate();
  const year = feedData ? String(feedData.createdDate.split('-')[0]) : 0
  const month = feedData ? String(feedData.createdDate.split('-')[1]) : 0
  const day = feedData ? String(feedData.createdDate.split('-')[2]) : 0
  const feedTime = feedData ? year + "년" + month + "월" + day.substring(0,2) + "일" : 0

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
    <Container>
      <Previous
        src={previous}
        alt="뒤로가기"
        onClick={() => navigate("/community/commuIn/1")}
      />

    {feedData?
      <FeedCard
        img={`http://localhost:33000/images/posts/${feedData.contentImageUrl}`}
        title={feedData.title}
        contents={feedData.content}
        exercise="3개"
        time="30분"
        upload={feedTime}
      />
      :null
    }
    </Container>
  );
};

export default ChallIn;
