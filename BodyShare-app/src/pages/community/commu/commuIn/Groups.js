import styled from "styled-components";
import Card from "components/commons/Card";
import {  useNavigate } from "react-router-dom";

const Group = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 10px;
  max-height: 500px; /* 스크롤 가능한 최대 높이 설정 */
  overflow-y: auto;
`;

const Groups = function ({groupLists}) {
  const navigate = useNavigate();

  return (
    <>
      <Group>
        {groupLists.map((data, idx) => (
      <Card
          key = {idx}
          img={`http://localhost:33000/images/posts/${data.contentImageUrl}`}
          title={data.title}
          contents={data.content}
          footer={data.createdDate}
          onClick={() => navigate("/community/feed")}
          mb="10px"
        />
        ))}
      </Group>
    </>
  );
};

export default Groups;
