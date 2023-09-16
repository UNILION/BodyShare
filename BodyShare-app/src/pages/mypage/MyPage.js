import styled from "styled-components";
import bannerPic from "../../assets/Img/banner.jpg";
import userPic from "../../assets/Img/user.png";
import { useNavigate } from "react-router-dom";
import Tag from "../../components/commons/Tag"
import Button from "../../components/commons/Button"
import Image5 from "../../assets/Img/right.png"

const Banner = styled.img`
    height: 87px;
    width: 390px;
`;

const Title = styled.p`
    margin-top: 8px;
    margin-left: 5px;
    height: 45px;
    font-size: 23px;
`;

const Pf = styled.ul`
  border: 5px solid rgba(85, 111, 255, 0.2);
  width: 360px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin-left: 9.5px;
`;

const Pfpic = styled.img`
  width: 163px;
  height: 163px;
`;

const Pfcomment = styled.div`
  
`;

const Pfcommentul = styled.div`
  display: grid;
  grid-template-rows: 5fr 1fr;
  list-style: none;
  place-items: center;
`;

const Info = styled.ul`
  margin-left: 20px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-top: 26px;
  width: 349px;
  height: 206px;
`;

const Infoul = styled.ul`
  place-items: center;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  border: 0px solid ;
  background-color: rgba(85, 111, 255, 0.2);
  border-radius: 15px 0px 0px 15px;
  width: 111px;
  height: 206px;
`;

const Infodtul = styled.ul`
  place-items: center;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  text-align: right;
  font-size: 20px;
  font-weight: bold;
  border: 0px solid ;
  background-color: rgba(85, 111, 255, 0.2);
  border-radius: 0px 15px 15px 0px;
  width: 232px;
  height: 206px;
`;

const Nickli = styled.li`
    font-size: 28px;
    font-weight: bold;
`;

const Inst = styled.li`

`;

const Buttons = styled.ul`
  margin-top: 20px;
  margin-left: 170px;
`;


const MyPage = function () {
  const navigate = useNavigate();
  return (
    <>
      <Banner src={bannerPic} />
      <Title>마이페이지</Title>
      <Pf>
        <Pfpic src={userPic} />
        <Pfcomment>
          <Pfcommentul>
            <Nickli>kimmmmm</Nickli>
            <Inst>
              <Tag
                tagName="요가"
                mr="5px"
              />
              <Tag
                tagName="필라테스"
              />
            </Inst>
          </Pfcommentul>
        </Pfcomment>
      </Pf>
      <Info>
        <Infoul>
          <li>아이디</li>
          <li>닉네임</li>
          <li>키</li>
          <li>몸무게</li>
        </Infoul>
        <Infodtul>
          <li>kimm</li>
          <li>kimmmmm</li>
          <li>167cm</li>
          <li>50kg</li>
        </Infodtul>
      </Info>
      <Buttons>
        <Button
          name="프로필 수정"
          img={Image5}
          onClick={() => navigate("/mypage/modify")}
          mb="5px"
        />
        <Button
          name="로그아웃"
          img={Image5}
          onClick={() => navigate("/mypage/logout")}
        />
      </Buttons>
    </>
  )
};

export default MyPage;