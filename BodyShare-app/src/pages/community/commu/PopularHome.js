import styled from "styled-components";
import Pagination from "react-js-pagination";
import "../../../assets/css/Pagination.css";
import Card from "../../../components/commons/Card";
import Image1 from "../../../assets/Img/card_image1.png";
import Image2 from "../../../assets/Img/card_image2.png";
import Image3 from "../../../assets/Img/card_image3.png";
import Image4 from "../../../assets/Img/card_image4.png";
import { useState } from "react";

const Group = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr;
 margin-top: 10px;
`;

const PopularHome = function () {
  const [page, setPage] = useState(1);

  const handleChange = (page) => {
    setPage(page);
  }

  return (
    <>
      <Group>
        <Card
          img={Image1}
          title="인기 요가 커뮤니티"
          contents="요가에 재미를 붙이셨네요 :)"
          tagName="요가"
          footer="96명의 회원이 가입함"
        />
        <Card
          img={Image2}
          title="클라이밍 커뮤니티"
          contents="클라이밍에 재미를 붙이셨네요 :)"
          tagName="클라이밍"
          footer="196명의 회원이 가입함"
        />
      </Group>

      <Group>
        <Card
          img={Image3}
          title="필라테스 커뮤니티"
          contents="필라테스에 재미를 붙이셨네요 :)"
          tagName="필라테스"
          footer="153명의 회원이 가입함"
        />
        <Card
          img={Image4}
          title="축구 커뮤니티"
          contents="축구에 재미를 붙이셨네요 :)"
          tagName="축구"
          footer="3563명의 회원이 가입함"
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

export default PopularHome;
