import styled from "styled-components";
import Pagination from "react-js-pagination";
import { useState } from "react";
import "../../../assets/css/Pagination.css";
import user from "../../../assets/Img/user.png"
import user2 from "../../../assets/Img/card_image1.png"
import user3 from "../../../assets/Img/card_image2.png"
import user4 from "../../../assets/Img/card_image3.png"


const Text = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
`

const Group = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin-bottom: 30px;
`

const Img = styled.img`
  margin-top: 20px;
  width: 83px;
  height: 83px;
`

const Register = styled.div`

`

const Title = styled.div`
  width: 150px;
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;  /* 말줄임 적용 */
`

const Member = styled.div`
  color: rgba(0,0,0,0.4);
  font-size: 13px;
  font-weight: bold;
  margin-top: 10px;
`

const Writing = styled.div`
`

const Mini = styled.div`
  font-size: 13px;
  margin-top: 10px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  font-weight: bold;
  cursor: pointer;
`

const MiniTitle = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;  /* 말줄임 적용 */
`

const MiniMember = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;  /* 말줄임 적용 */
`

const Hr = styled.hr`
  border-color: rgba(0,0,0,0.25);
`

const My = function () {
  const [page, setPage] = useState(1);

  const handleChange = (page) => {
    setPage(page);
  }

  return (
    <>
      <Text>내가 가입한 커뮤니티</Text>
      <Group>
        <Img src={user} />
        <Register>
          <Title>헬스 클럽</Title>
          <Member>96명의 회원</Member>
          <Writing>
            <Mini>
              <MiniTitle>오늘 목표 성공</MiniTitle>
              <MiniMember>헬스녀</MiniMember>
            </Mini>
            <Mini>
              <MiniTitle>오늘도 화이팅</MiniTitle>
              <MiniMember>헬스남</MiniMember>
            </Mini>
            <Mini>
              <MiniTitle>오늘의점심</MiniTitle>
              <MiniMember>1일1운동</MiniMember>
            </Mini>
          </Writing>
        </Register>
      </Group>

      <Hr />

      <Group>
        <Img src={user2} />
        <Register>
          <Title>요가</Title>
          <Member>243명의 회원</Member>
          <Writing>
            <Mini>
              <MiniTitle>고양이자세</MiniTitle>
              <MiniMember>요가 강사</MiniMember>
            </Mini>
            <Mini>
              <MiniTitle>풀 시퀀스 요가</MiniTitle>
              <MiniMember>자세봐주는사람</MiniMember>
            </Mini>
            <Mini>
              <MiniTitle>차근차근 요가</MiniTitle>
              <MiniMember>슬로우</MiniMember>
            </Mini>
          </Writing>
        </Register>
      </Group>

      <Hr />

      <Group>
        <Img src={user3} />
        <Register>
          <Title>클라이밍 동아리</Title>
          <Member>152명의 회원</Member>
          <Writing>
            <Mini>
              <MiniTitle>오픈 그립</MiniTitle>
              <MiniMember>클라이밍</MiniMember>
            </Mini>
            <Mini>
              <MiniTitle>쉘프린트</MiniTitle>
              <MiniMember>볼더</MiniMember>
            </Mini>
            <Mini>
              <MiniTitle>핀치</MiniTitle>
              <MiniMember>더클라임</MiniMember>
            </Mini>
          </Writing>
        </Register>
      </Group>

      <Hr />

      <Group>
        <Img src={user4} />
        <Register>
          <Title>필라테스를 사랑하는 모임</Title>
          <Member>194명의 회원</Member>
          <Writing>
            <Mini>
              <MiniTitle>C컬 롱라인</MiniTitle>
              <MiniMember>위필</MiniMember>
            </Mini>
            <Mini>
              <MiniTitle>골반 세팅법</MiniTitle>
              <MiniMember>클래식</MiniMember>
            </Mini>
            <Mini>
              <MiniTitle>힐링필라테스</MiniTitle>
              <MiniMember>힐러</MiniMember>
            </Mini>
          </Writing>
        </Register>
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

export default My;