import styled from "styled-components";
import circle from "assets/Img/circletgo.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const instance = axios.create({
  baseURL: "http://localhost:33000/api",
  withCredentials: true,
});

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
  const [commentData, setCommentData] = useState();
  const location = useLocation();
  const feedNo = location.pathname.split("/")[3];

  const commentList = async function () {
    try {
      const commentResponse = await instance.get(
        `comment/post/${feedNo}`
      );
      console.log(commentResponse.data);
      setCommentData(commentResponse.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    commentList();
  }, []);

  return (
    <CommentContainer>
      <Count>댓글 {commentData ? commentData[0].commentCnt : 0}개</Count>
      <InputBox>
        <Input />
        <Circle src={circle} />
      </InputBox>
      <CommentList>
        {commentData ? commentData.map((comment, idx) => (
          <Profile key={idx}>
          <Nick>{comment.commenter_nickname}</Nick>
          <Commend>{comment.content}</Commend>
        </Profile>
        )) : null}
        
      </CommentList>
    </CommentContainer>
  );
};

export default Comment;