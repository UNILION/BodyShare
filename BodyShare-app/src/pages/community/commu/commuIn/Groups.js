import styled from "styled-components";
import Card from "components/commons/Card";
import {  useNavigate } from "react-router-dom";

const Group = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 10px;
  max-height: 320px; /* 스크롤 가능한 최대 높이 설정 */
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
          footer={String(data.createdDate.split('-')[0]) + "년" + String(data.createdDate.split('-')[1]) + "월" + String(data.createdDate.split('-')[2]).substring(0,2) + "일"}
          onClick={() => navigate(`/community/feed/${data.postNo}`)}
          mb="10px"
        />
        ))}
      </Group>
    </>
  );
};

export default Groups;
