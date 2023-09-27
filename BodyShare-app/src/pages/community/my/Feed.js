import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Mini = styled.div`
  font-size: 13px;
  margin-top: 10px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  font-weight: bold;
`;

const MiniTitle = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* 말줄임 적용 */
  cursor: pointer;
`;

const MiniMember = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* 말줄임 적용 */
`;

const Writing = styled.div``;

const Feed = function ({ feed }) {
  const navigate = useNavigate();

  return (
    <>
      <Writing>
        <Mini>
          <MiniTitle onClick={() => navigate("/community/feed")}>
            {feed.title}
          </MiniTitle>
          <MiniMember>{feed.nickname}</MiniMember>
        </Mini>
      </Writing>
    </>
  );
};

export default Feed;
