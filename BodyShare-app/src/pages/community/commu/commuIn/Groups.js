import styled from "styled-components";
import Card from "components/commons/Card";
import Image1 from "assets/Img/Climing1.jpg";
import Image2 from "assets/Img/Climing2.jpg";
import Image3 from "assets/Img/Climing3.jpg";
import Image4 from "assets/Img/Climing4.jpg";
import { useNavigate } from "react-router-dom";

const Group = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 10px;
  max-height: 500px; /* 스크롤 가능한 최대 높이 설정 */
  overflow-y: auto;
`;

const Groups = function () {
  const navigate = useNavigate();
  return (
    <>
      <Group>
        <Card
          img={Image1}
          title="오늘의 기록"
          contents="클라이밍  50m 등반 성공!"
          footer="2023년 9월 16일"
          onClick={() => navigate("/community/feed")}
        />
        <Card
          img={Image2}
          title="내일 같이 클라이밍 하실 분?"
          contents="대전역 6시에 모여서 같이 하실 분 댓글 달아주세요"
          footer="2023년 9월 15일"
          onClick={() => navigate("/community/feed")}
        />
      </Group>

      <Group>
        <Card
          img={Image3}
          title="실내 클라이밍장"
          contents="처음 가봤는데 재밌네요 :)"
          footer="2023년 9월 15일"
          onClick={() => navigate("/community/feed")}
        />
        <Card
          img={Image4}
          title="정기적으로 클라이밍 하실 분?"
          contents="요즘 클라이밍의 매력에 빠졌네요"
          footer="2023년 9월 14일"
          onClick={() => navigate("/community/feed")}
        />
      </Group>
    </>
  );
};

export default Groups;
