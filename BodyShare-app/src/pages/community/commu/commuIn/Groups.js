import styled from "styled-components";
import Pagination from "react-js-pagination";
import Card from "../../../../components/commons/Card";
import Image1 from "../../../../assets/Img/Climing1.jpg";
import Image2 from "../../../../assets/Img/Climing2.jpg";
import Image3 from "../../../../assets/Img/Climing3.jpg";
import Image4 from "../../../../assets/Img/Climing4.jpg";
import { useNavigate } from "react-router-dom";

const Group = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 10px;
`;

const Groups = function ({ page, handleChange }) {
  const navigate = useNavigate();
  return (
    <>
      <Group>
        <Card
          img={Image1}
          title="클라이밍 좋아하는 모임"
          contents="클라이밍 좋아하는 사람들 모두 모두 모여라"
          footer="2023년 9월 16일"
          onClick={() => navigate("/community/feed")}
        />
        <Card
          img={Image2}
          title="대전 클라이밍"
          contents="대전에서 클라이밍 하실 분?"
          footer="2023년 9월 15일"
          onClick={() => navigate("/community/feed")}
        />
      </Group>

      <Group>
        <Card
          img={Image3}
          title="수도권 클라이밍 모임"
          contents="수도권 사람들만 오세요:)"
          footer="2023년 9월 15일"
          onClick={() => navigate("/community/feed")}
        />
        <Card
          img={Image4}
          title="클라이밍 초보들만"
          contents="클라이밍에 재미를 붙이셨네요 :)"
          footer="2023년 9월 14일"
          onClick={() => navigate("/community/feed")}
        />
      </Group>
      <Pagination
        activePage={page}
        itemsCountPerPage={4}
        totalItemsCount={24}
        pageRangeDisplayed={5}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handleChange}
      />
    </>
  );
};

export default Groups;