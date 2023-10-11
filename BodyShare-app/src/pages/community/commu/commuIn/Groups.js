import styled from "styled-components";
import Card from "components/commons/Card";
import { useNavigate } from "react-router-dom";

const Group = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: -25px;
  max-height: 320px; /* 스크롤 가능한 최대 높이 설정 */
  overflow-y: auto;
  overflow-x: hidden;
  width: 370px;
`;

const Not = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  width: 310px;
  height: 290px;
  margin-top: 30px;
  overflow-y: hidden;
`;

const Groups = function ({ groupLists }) {
  const navigate = useNavigate();

  return (
    <>
      <Group>
        {groupLists ? groupLists.length > 0 ? groupLists.map((data, idx) => (
          <Card
            key={idx}
            img={`http://localhost:33000/images/posts/${data.contentImageUrl}`}
            title={data.title}
            contents={data.content}
            footer={String(data.createdDate.split('-')[0]) + "년" + String(data.createdDate.split('-')[1]) + "월" + String(data.createdDate.split('-')[2]).substring(0, 2) + "일"}
            onClick={() => navigate(`/community/feed/${data.postNo}`)}
            mb="10px"
          />
        )) : <Not>커뮤니티 내부에 피드가 존재하지 않습니다.</Not> : <Not>커뮤니티 내부에 피드가 존재하지 않습니다.</Not>}
      </Group>
    </>
  );
};

export default Groups;