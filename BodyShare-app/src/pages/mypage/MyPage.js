import styled from "styled-components";
import bannerPic from "../../assets/Img/banner.jpg";
import userPic from "../../assets/Img/user.png";
import { useNavigate } from "react-router-dom";
import Tag from "../../components/commons/Tag"

const Banner = styled.img`
    height: 87px;
    width: 390px;
`;

const Title = styled.p`
    margin-top: 8px;
    height: 45px;
    font-size: 23px;
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
  margin-left: 19px;
`;

const Info = styled.ul`
  margin-left: 30px;
  display: flex;
  margin-top: 26px;
  width: 349px;
  height: 206px;
  gap: 2px;
`;

const Infoul = styled.ul`
    text-align: left;
    font-size: 20px;
    font-style: bold;
    border: 0px solid ;
    background-color: rgba(85, 111, 255, 0.2);
    border-radius: 15px 0px 0px 15px;
    width: 111px;
    height: 206px;
    
`;

const Infodtul = styled.ul`
    text-align: right;
    font-size: 20px;
    font-style: bold;
    border: 0px solid ;
    background-color: rgba(85, 111, 255, 0.2);
    border-radius: 0px 15px 15px 0px;
    width: 232px;
    height: 206px;
`;

const Nickli = styled.li`
    font-size: 28px;
    font-style: bold;
`;

const Inst = styled.li`
    display: flex;
    width: 215px;
    height: 153px;
    gap: 10px;
`;



const Logout = styled.button`
    background-color: #556FFF; 
    color: #fff; 
    padding: 10px 20px;
    border: none;
    border-radius: 23px;
    cursor: pointer;
    margin-top: 16px;
    width: 211px;
    height: 45px;
    float: right;
    font-size: 20px;
`;

const Modifypf = styled.button`
    background-color: #556FFF; 
    color: #fff; 
    padding: 10px 20px;
    border: none;
    border-radius: 23px;
    cursor: pointer;
    margin-top: 16px;
    width: 211px;
    height: 45px;
    float: right;
    font-size: 20px;
`;

const MyPage = function () {
  const navigate = useNavigate();

  return (
    <>
      <Banner src= {bannerPic} />
      <Title>마이페이지</Title>
      <Pf>
        <Pfpic src= {userPic} />
        <Pfcomment>
          <Pfcommentul>
            <br />
            <br />
            <br />
            <Nickli>nickname</Nickli>
            <br />
            <br />
            <li>
              <Inst>
                <Tag 
                  tagName="요가"
                />
                <Tag 
                  tagName="필라테스"
                />
              </Inst>
            </li>
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

      <Modifypf onClick={() => navigate("/mypage/modify")}>프로필 수정하기 </Modifypf>
      <Logout onClick={() => navigate("/mypage/logout")}>로그아웃</Logout>

    </>
  )
};

export default MyPage;