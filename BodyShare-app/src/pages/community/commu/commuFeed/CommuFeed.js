import styled from "styled-components";
import FeedCard from "components/commons/FeedCard";
import previous from "assets/Img/Previous.png";
import { useNavigate } from "react-router-dom";
import Image1 from "assets/Img/Climing1.jpg";
import Comment from "./Comment";

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
  const navigate = useNavigate();
  return (
    <Container>
      <Previous
        src={previous}
        alt="뒤로가기"
        onClick={() => navigate("/community/commuIn")}
      />
      <FeedCard
        img={Image1}
        title="클라이밍 좋아하는 모임"
        contents="클라이밍 좋아하는 사람 모두 모여라
          앞으로도 열심히 다닐 사람만 신청해주세요!
          오늘 과제 너무 어려워서 여기에 투정중..
          겨우겨우 자세잡고 찍은 사진입니다 하하...
          "
        exercise="클라이밍 30분"
        upload="2023년 9월 16일"
        onClick={() => navigate("/community/feed")}
      />
      <Comment />
    </Container>
  );
};

export default CommuFeed;
