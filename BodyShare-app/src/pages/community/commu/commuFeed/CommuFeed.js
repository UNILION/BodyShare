import styled from "styled-components";
import FeedCard from "components/commons/FeedCard";
import previous from "assets/Img/Previous.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userSelector } from "recoil/userRecoil";
import Comment from "./Comment";
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

const CommuFeed = function () {
  const [feedData, setFeedData] = useState();
  const [recordData, setRecordData] = useState();
  const location = useLocation();
  const feedNo = location.pathname.split("/")[3];
  const navigate = useNavigate();
  const userNo = useRecoilValue(userSelector);
  const year = feedData ? String(feedData.createdDate.split('-')[0]) : 0
  const month = feedData ? String(feedData.createdDate.split('-')[1]) : 0
  const day = feedData ? String(feedData.createdDate.split('-')[2]) : 0
  const feedTime = feedData ? year + "년" + month + "월" + day.substring(0,2) + "일" : 0
  const createTime = feedData ? year + ". " + month + ". " + day.substring(0,2) + ". " : 0


   const feedList = async function () {
    try {
      const feedResponse = await instance.get(
        `/post/${feedNo}`
      );
      setFeedData(feedResponse.data);
    } catch (error) {
      console.error(error);
    }
  }

  const recordList = async function () {
    try {
      const recordResponse = await instance.get(
        `/record/sports/recentToday/${userNo}/${createTime}`
      );
      setRecordData(recordResponse.data);
      console.log(recordResponse.data)

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    feedList();
  }, []);
  
  useEffect(() => {
    recordList();
  }, [feedData]);

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
        exercise= {(recordData.length > 0) ? recordData[0].cnt_exercise : 0}
        time={(recordData.length > 0) ? recordData[0].total_time : 0}
        upload={feedTime}
        recordData={recordData}
      />
      :null
    }
      <Comment />
    </Container>
  );
};

export default CommuFeed;
