import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Card from "components/commons/Card";
import Image1 from "assets/Img/card_image1.png";
import Image2 from "assets/Img/card_image2.png";
import Image3 from "assets/Img/card_image3.png";
import Image4 from "assets/Img/card_image4.png";
import { useState } from "react";

const Group = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 10px;
  max-height: 500px; /* 스크롤 가능한 최대 높이 설정 */
  overflow-y: auto;
`;

const PopularHome = function () {
  const navigate = useNavigate();

  return (
    <>
      <Group>
        <Card
          img={Image1}
          title="요가"
          contents="요가에서 다양한 동작을 배워보아요"
          tagtitle="요가"
          footer="243명의 회원이 가입함"
          onClick={() => navigate("/community/commuIn")}
        />
        <Card
          img={Image2}
          title="클라이밍 동아리"
          contents="클라이밍에 재미를 붙이셨네요 :)"
          tagtitle="클라이밍"
          footer="200명의 회원이 가입함"
          onClick={() => navigate("/community/commuIn")}
        />
      </Group>

      <Group>
        <Card
          img={Image3}
          title="필라테스를 사랑하는 모임"
          contents="필라테스할 사람 모두 모두 모여라"
          tagtitle="필라테스"
          footer="194명의 회원이 가입함"
          onClick={() => navigate("/community/commuIn")}
        />
        <Card
          img={Image4}
          title="축사모"
          contents="축구에 진심이시군요"
          tagtitle="축구"
          footer="132명의 회원이 가입함"
          onClick={() => navigate("/community/commuIn")}
        />
      </Group>
    </>
  );
};

export default PopularHome;
