import styled from "styled-components";
import circle from "assets/Img/circletgo.png";

const CommentContainer = styled.div`
  color: #878787;
`;

const Count = styled.div`
  margin: 20px 0 10px 0;
`;

const InputBox = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  place-items: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  border-radius: 15px;
  width: 270px;
  height: 20px;
  padding: 5px 20px;
`;

const Circle = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const CommentList = styled.div``;

const Profile = styled.div`
  margin: 10px 0;
  font-size: 12px;
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const Nick = styled.span`
  font-weight: bold;
  margin-right: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* 말줄임 적용 */
`;

const Commend = styled.span``;

const Comment = function () {
  return (
    <CommentContainer>
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
    </CommentContainer>
  );
};

export default Comment;