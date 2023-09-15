import styled from "styled-components";
import FeedCard from "../../../components/commons/FeedCard"
import previous from "../../../assets/Img/Previous.png";
import { useNavigate } from "react-router-dom";
import Image1 from "../../../assets/Img/Climing1.jpg";
import circle from "../../../assets/Img/circletgo.png"

const Container = styled.div`
  padding: 10px;
`

const Previous = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Comment = styled.div`
  color: #878787;
`

const Count = styled.div`
  margin: 20px 0 10px 0;
`

const InputBox = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  place-items: center;
  margin-bottom: 20px;
`

const Input = styled.input`
  border-radius: 15px;
  width: 270px;
  height: 20px;
  padding: 5px 20px;
`

const Circle = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`

const CommentList = styled.div`
`

const Profile = styled.div`
  margin: 10px 0;
  font-size: 12px;
  display: grid;
  grid-template-columns: 1fr 3fr;
`

const Nick = styled.span`
  font-weight: bold;
  margin-right: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;  /* 말줄임 적용 */
`

const Commend = styled.span`
`

const CommuFeed = function () {
  const navigate = useNavigate();
  return(
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
          upload="2023년 9월 16일"
          onClick={() => navigate("/community/feed")}
        />

        <Comment>
          <Count>댓글 2개</Count>
          <InputBox>
            <Input />
            <Circle src={circle} />
          </InputBox>
          <CommentList>
            <Profile>
              <Nick>ho.jae_</Nick>
              <Commend>이야 재밌었겠네요~!</Commend>
            </Profile>
            
            <Profile>
              <Nick>to_see_tt</Nick>
              <Commend>저도 한번 배워봐야겠네요</Commend>
            </Profile>
          </CommentList>
        </Comment>
    </Container>
  );
};

export default CommuFeed;