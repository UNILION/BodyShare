import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Pagination from "react-js-pagination";
import "../../../assets/css/Pagination.css";
import Card from "../../../components/commons/Card";
import Search from "../../../assets/Img/buttonsearch.png";
import Plus from "../../../assets/Img/buttonplus.png";
import Image1 from "../../../assets/Img/Climing1.jpg";
import Image2 from "../../../assets/Img/Climing2.jpg";
import Image3 from "../../../assets/Img/Climing3.jpg";
import Image4 from "../../../assets/Img/Climing4.jpg";
import { useState } from "react";

const Container = styled.div`
  padding: 20px;
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 50px;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: bold;
  line-height: 50px;
`;

const Group = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 10px;
`;

const Img = styled.img`
  display: grid;
  align-items: end;
  margin-left: auto;
  width: 50px;
  height: 50px;
  cursor: pointer;
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

const CommuSearchAfter = function () {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const handleChange = (page) => {
    setPage(page);
  };

  return (
    <Container>
      <Top>
        <Title>클라이밍</Title>
        <Img src={Search} onClick={() => navigate("/community/search")} />
      </Top>
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
    </Container>
  );
};

export default CommuSearchAfter;
