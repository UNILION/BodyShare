import styled from "styled-components";
import bannerPic from "../../assets/Img/banner.jpg";
import userPic from "../../assets/Img/user.png";

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
`

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
    display: grid;
    grid-template-columns: 113px auto;
    margin-top: 26px;
    width: 349px;
    height: 206px;
    border: 0px solid ;
    background-color: rgba(85, 111, 255, 0.2);
    border-radius: 15px;
`;

const Infoul = styled.ul`
    margin-top: 24px;
    text-align: left;
    margin-left: 29px;
    font-size: 20px;
    font-style: bold;
    
`

const Infodtul = styled.ul`
    margin-top: 24px;
    text-align: right;
    margin-right: 29px;
    font-size: 20px;
`

const Nickli = styled.li`
    font-size: 28px;
    font-style: bold;
`

const Inst = styled.li`
    display: flex;
    width: 215px;
    height: 153px;
`

const Cateo = styled.div`
    border: 0px solid ;
    background-color: rgba(85, 111, 255, 0.3);
    border-radius: 23px;
    width: 56px;
    height: 23px;
    font-size: 11px;
    text-align: center;
    color: #656565;
`

const Catet = styled.div`
    border: 0px solid ;
    background-color: rgba(85, 111, 255, 0.3);
    border-radius: 23px;
    width: 56px;
    height: 23px;
    font-size: 11px;
    text-align: center;
    color: #656565;
`


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
                <Cateo>요가</Cateo>
                <Catet>필라테스</Catet>
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

      <Modifypf onClick={() => navigate("/MyProfileModify")}>프로필 수정하기 </Modifypf>
      <Logout>로그아웃</Logout>

    </>
  )
};

export default MyPage;