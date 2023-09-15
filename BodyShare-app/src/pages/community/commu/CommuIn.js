import styled from "styled-components";
import Pagination from "react-js-pagination";
import "../../../assets/css/Pagination.css";
import Card from "../../../components/commons/Card";
import Image1 from "../../../assets/Img/card_image1.png";
import Image2 from "../../../assets/Img/card_image2.png";
import Image3 from "../../../assets/Img/card_image3.png";
import Image4 from "../../../assets/Img/card_image4.png";
import Image5 from "../../../assets/Img/right.png"
import { useState } from "react";
import bannerPic from "../../../assets/Img/banner.jpg"
import userPic from "../../../assets/Img/user.png"
import Tag from "../../../components/commons/Tag"
import Button from "../../../components/commons/Button";


const NavBox = styled.div`
  width: 391px;
  height: 51px;
  border: 0px solid;
  background-color: rgba(85, 111, 255, 0.3);
  border-radius: 15px 15px 0px 0px;
`;

const Banner = styled.img`
  width: 389px;
  height: 100px;
  border-radius: 15px;
`;

const Pf = styled.ul`
    display: grid;
    grid-template-columns: 163px auto;
`;

const Pfpic = styled.img`
  width: 163px;
  height: 163px;
`;

const Pfcomment = styled.div`

`;

const Pfcommentul = styled.div`
  width: 174px;
  height: 25px;
  list-style: none;
  margin-left: 7px;
`;

const CommuName = styled.li`
  margin-top: 28px;
  font-size: 20px;
  font-style: bold;
`;

const CommuInLi = styled.div`
  margin-top: 10px;
`;

const CommuIntro = styled.p`
  font-size: 14px;
`;

const Inst = styled.li`
    display: flex;
    width: 215px;
    height: 153px;
`;

const MainBar = styled.ul`
  display: flex;
`;

const Info = styled.div`
  border: 1px solid rgba(135, 135, 135, 0.3);
  border-radius: 15px;
  display: flex;
  width: 206px;
  height: 48px;
  align-items: center;
` ;

const Feed = styled.li`
  margin-left: 40px;
  font-size: 18px;
  text-align: center;
`;

const Member = styled.li`
  margin-left: 25px;
  font-size: 18px;
  text-align: center;
`;

const Group = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr;
 margin-top: 10px;
`;

const CommuHome = function () {
  const [page, setPage] = useState(1);

  const handleChange = (page) => {
    setPage(page);
  }

  return (
    <>
      <NavBox></NavBox>
      <Banner src= {bannerPic} />
      <Pf>
        <Pfpic src= {userPic} />
        <Pfcomment>
          <Pfcommentul>
            <br />
            <CommuName>헬스가 좋은 사람들</CommuName>
            <CommuInLi>
              <CommuIntro>저희는 그저 헬스가 좋아서 모인</CommuIntro>
              <CommuIntro>사람들 잘 부탁드립니다.</CommuIntro>
            </CommuInLi>
            <br />
            <li>
              <Inst>
                <Tag 
                  tagName="요가"
                />
                <Tag 
                  tagName="클라이밍"
                />
              </Inst>
            </li>
          </Pfcommentul>
        </Pfcomment>
      </Pf>
      <MainBar>
          <Info>
            <Feed>
              <li>404</li>
              <li>게시물</li>
            </Feed>
            <Member>
              <li>298</li>
              <li>회원</li>
            </Member>
          </Info>
          <Button 
            name="가입하기"
            img={Image5}
          />
        </MainBar>
      <Group>
        <Card
          img={Image1}
          title="요가 커뮤니티"
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

export default CommuHome;
