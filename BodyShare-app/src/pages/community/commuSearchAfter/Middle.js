import styled from "styled-components";
import Pagination from "react-js-pagination";
import "assets/css/Pagination.css";
import Card from "components/commons/Card";
import Plus from "assets/Img/buttonplus.png";
import Image1 from "assets/Img/Climing1.jpg";
import Image2 from "assets/Img/Climing2.jpg";
import Image3 from "assets/Img/Climing3.jpg";
import Image4 from "assets/Img/Climing4.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Group = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 10px;
`;

const AddImg = styled.img`
  display: grid;
  align-items: end;
  margin-left: auto;
  width: 50px;
  height: 50px;
  cursor: pointer;
  margin-top: 20px;
`;

const Middle = function () {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const handleChange = (page) => {
    setPage(page);
  };
  return (
    <>
      <Group>
        <Card
          img={Image1}
          title="클라이밍 좋아하는 모임"
          contents="클라이밍 좋아하는 사람들 모두 모두 모여라"
          tagName="클라이밍"
          footer="956명의 회원이 가입함"
          onClick={() => navigate("/community/commuIn")}
        />
        <Card
          img={Image2}
          title="대전 클라이밍"
          contents="대전에서 클라이밍 하실 분?"
          tagName="클라이밍"
          footer="543명의 회원이 가입함"
          onClick={() => navigate("/community/commuIn")}
        />
      </Group>

      <Group>
        <Card
          img={Image3}
          title="수도권 클라이밍 모임"
          contents="수도권 사람들만 오세요:)"
          tagName="클라이밍"
          footer="321명의 회원이 가입함"
          onClick={() => navigate("/community/commuIn")}
        />
        <Card
          img={Image4}
          title="클라이밍 초보들만"
          contents="클라이밍에 재미를 붙이셨네요 :)"
          tagName="클라이밍"
          footer="123명의 회원이 가입함"
          onClick={() => navigate("/community/commuIn")}
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
      <AddImg src={Plus} onClick={() => navigate("/community/communityAdd")} />
    </>
  );
};

export default Middle;
