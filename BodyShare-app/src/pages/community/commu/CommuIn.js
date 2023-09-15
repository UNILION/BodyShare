import styled from "styled-components";
import Pagination from "react-js-pagination";
import "../../../assets/css/Pagination.css";
import Card from "../../../components/commons/Card";
import Image1 from "../../../assets/Img/Climing1.jpg";
import Image2 from "../../../assets/Img/Climing2.jpg";
import Image3 from "../../../assets/Img/Climing3.jpg";
import Image4 from "../../../assets/Img/Climing4.jpg";
import Image5 from "../../../assets/Img/right.png"
import Image6 from "../../../assets/Img/red.png"
import { useState } from "react";
import bannerPic from "../../../assets/Img/card_image2.png"
import userPic from "../../../assets/Img/user.png"
import Tag from "../../../components/commons/Tag"
import Button from "../../../components/commons/Button";
import Plus from "../../../assets/Img/buttonplus.png"
import { useNavigate } from "react-router-dom";

const BannerPic = styled.div`
  width: 100%;
  height: 100px;
  overflow: hidden;
  position: relative;
`

const Banner = styled.img`
  width: 100%;
  position: absolute;
  top: -100px;
`;

const Pf = styled.ul`
    display: grid;
    grid-template-columns: 1fr 2fr;
    width: 90%;
`;

const Pfpic = styled.img`
  width: 108px;
  height: 108px;
`;

const Pfcommentul = styled.div``;

const CommuName = styled.li`
  margin-top: 28px;
  font-size: 16px;
  font-weight: bold;
`;

const CommuInLi = styled.div`
  margin-top: 10px;
`;

const CommuIntro = styled.p`
  font-size: 14px;
`;

const Inst = styled.div`
    margin-top: 10px;
`;

const MainBar = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 90%;
  margin-top: 10px;
`;

const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid rgba(135, 135, 135, 0.3);
  border-radius: 15px;
  width: 206px;
  height: 48px;
  align-items: center;
` ;

const Feed = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: bold;
`;

const Member = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: bold;
`;

const Group = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr;
 margin-top: 10px;
`;

const Img = styled.img`
  display: grid;
  align-items: end;
  margin: 20px 20px 20px auto;
  width: 50px;
  height: 50px;
  cursor: pointer;
`


const CommuHome = function () {
  const [page, setPage] = useState(1);
  const [register, setRegister] = useState(false);
  const navigate = useNavigate();

  const handleChange = (page) => {
    setPage(page);
  }

  const registerChange = (register) => {
    setRegister(!register);
  }

  return (
    <>
      <BannerPic><Banner src= {bannerPic} /></BannerPic>
      <Pf>
        <Pfpic src= {userPic} />
          <Pfcommentul>
            <CommuName>클라이밍이 좋은 사람들</CommuName>
            <CommuInLi>
              <CommuIntro>저희는 그저 클라이밍이 좋아서 모인 사람들입니다.</CommuIntro>
            </CommuInLi>
              <Inst>
                <Tag 
                  tagName="요가"
                  mr="10px;"
                />
                <Tag 
                  tagName="클라이밍"
                />
              </Inst>
          </Pfcommentul>
      </Pf>
      <MainBar>
          <Info>
            <Feed>
              <p>404</p>
              <p>게시물</p>
            </Feed>
            <Member>
              <p>298</p>
              <p>회원</p>
            </Member>
          </Info>
          <Button 
            name={register?"탈퇴하기":"가입하기"}
            bc={register?"#FF3131":"#556FFF"}
            img={register?Image6:Image5}
            hoverColor={register?"#FF0000":""}
            iwidth={register?"40px":"30px"}
            iheight={register?"40px":"30px"}
            imt={register?"5px":"0"}
            width="130px"
            fs="15px"
            ml="10px"
            onClick={() => registerChange(register)}
          />
        </MainBar>
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
      <Img src={Plus} onClick={() => navigate("/community/feedAdd")} />
    </>
  );
};

export default CommuHome;
