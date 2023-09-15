import styled from "styled-components";
import logoutLogo from "../../assets/Img/logout.png"

const All = styled.div`
  margin-left: 3px;
  margin-right: 3px;
  margin-top: 19px;
`

const Title = styled.p`
  margin-left: 5px;
  font-size: 23px;
  font-style: bold;
`

const Main = styled.div`
  margin-top: 20px;
  width: 366px;
  height: 433px;
  border: 1px solid #B3B3B3;
  border-radius: 100px;
`

const Imt = styled.img`
  margin-top: 53px;
  margin-left: 96px;
  width: 180px;
  height: 180px;
`

const To =styled.p`
  margin-top: 20px;
  text-align: center;
  font-size: 28px;
`

const Tt =styled.p`
  text-align: center;
  font-size: 28px;
`

const Ttt = styled.p`
  text-align: center;
  font-size: 15px;
`

const Tf = styled.p`
  text-align: center;
  font-size: 15px;
`

const Tff = styled.p`
  text-align: center;
  font-size: 15px;
`

const Buttons = styled.ul`
  margin-top: 50px;
  display: flex;
  margin-bottom: 23px;
`

const Backbutton = styled.button`
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
`

const Logoutbutton = styled.button`
  background-color: rgba(85, 111, 255, 0.5); 
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
`

const PasswordModify = function () {
  return (
    <>
      <All>
        <Title>로그아웃</Title>
        <Main>
          <Imt src={logoutLogo}></Imt>
          <To>정말 로그아웃</To>
          <Tt>하시겠어요?</Tt>
          <Ttt>저희 BODY SHARE에는</Ttt>
          <Tf>아직 많은 재밌는 컨텐츠가</Tf>
          <Tff>준비되어 있답니다ㅜㅡㅜ</Tff>
        </Main>
        <Buttons>
          <Backbutton>돌아가기</Backbutton>
          <Logoutbutton>로그아웃</Logoutbutton>
        </Buttons>
      </All>
    </>
  )
};

export default PasswordModify;