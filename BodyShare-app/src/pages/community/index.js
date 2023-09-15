import styled from "styled-components";
import Pagination from "react-js-pagination";
import { useState } from "react";
import "../../assets/css/Pagination.css";
import user from "../../assets/Img/user.png"


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
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
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
          <Title>클라이밍 클럽</Title>
          <Member>96명의 회원</Member>
          <Writing>
            <Mini>
              <MiniTitle>오늘 목표 성공</MiniTitle>
              <MiniMember>클라이밍</MiniMember>
            </Mini>
            <Mini>
              <MiniTitle>오늘도 화이팅</MiniTitle>
              <MiniMember>닉네임</MiniMember>
            </Mini>
            <Mini>
              <MiniTitle>새글 제목 입니다</MiniTitle>
              <MiniMember>입니다.</MiniMember>
            </Mini>
          </Writing>
        </Register>
      </Group>

      <Hr />

      <Group>
        <Img src={user} />
        <Register>
          <Title>클라이밍 클럽</Title>
          <Member>96명의 회원</Member>
          <Writing>
            <Mini>
              <MiniTitle>오늘 목표 성공</MiniTitle>
              <MiniMember>클라이밍</MiniMember>
            </Mini>
            <Mini>
              <MiniTitle>오늘도 화이팅</MiniTitle>
              <MiniMember>닉네임</MiniMember>
            </Mini>
            <Mini>
              <MiniTitle>새글 제목 입니다</MiniTitle>
              <MiniMember>입니다.</MiniMember>
            </Mini>
          </Writing>
        </Register>
      </Group>

      <Hr />

      <Group>
        <Img src={user} />
        <Register>
          <Title>클라이밍 클럽</Title>
          <Member>96명의 회원</Member>
          <Writing>
            <Mini>
              <MiniTitle>오늘 목표 성공</MiniTitle>
              <MiniMember>클라이밍</MiniMember>
            </Mini>
            <Mini>
              <MiniTitle>오늘도 화이팅</MiniTitle>
              <MiniMember>닉네임</MiniMember>
            </Mini>
            <Mini>
              <MiniTitle>새글 제목 입니다</MiniTitle>
              <MiniMember>입니다.</MiniMember>
            </Mini>
          </Writing>
        </Register>
      </Group>

      <Hr />

      <Group>
        <Img src={user} />
        <Register>
          <Title>클라이밍 클럽</Title>
          <Member>96명의 회원</Member>
          <Writing>
            <Mini>
              <MiniTitle>오늘 목표 성공</MiniTitle>
              <MiniMember>클라이밍</MiniMember>
            </Mini>
            <Mini>
              <MiniTitle>오늘도 화이팅</MiniTitle>
              <MiniMember>닉네임</MiniMember>
            </Mini>
            <Mini>
              <MiniTitle>새글 제목 입니다</MiniTitle>
              <MiniMember>입니다.</MiniMember>
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