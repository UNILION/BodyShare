import styled from "styled-components";

const All = styled.div`
  margin-left: 3px;
  margin-right: 3px;
  margin-top: 19px;
`

const Titleul = styled.ul`
  display: flex;
`

const Backbutton = styled.button`
  margin-top: 3px;
  width: 20px;
  height: 20px;
  background-color: #D9D9D9;
  border-radius: 20px;
  border: none;
  cursor: pointer;
`

const Title = styled.p`
  margin-left: 5px;
  font-size: 23px;
  font-style: bold;
`

const Maintitle = styled.p`
  margin-top: 35px;
  font-size: 20px;
`

const Bfpwul = styled.ul`
  margin-top: 20px;
  display: flex;
`

const BfpwTitle = styled.div`
  font-size: 20px;
  color: #000000;
  border: 1px solid rgba(46, 44, 61, 0.3);
  width: 132px;
  height: 46px;
  border-radius: 15px 0px 0px 15px;
`

const Bfpw = styled.div`
  font-size: 20px;
  color: #000000;
  border: 1px solid rgba(46, 44, 61, 0.3);
  width: 203px;
  height: 46px;
  border-radius: 0px 15px 15px 0px;  
`

const Atpwul = styled.ul`
  margin-top: 20px;
  display: flex;
`

const AtpwTitle = styled.div`
  font-size: 20px;
  color: #000000;
  border: 1px solid rgba(46, 44, 61, 0.3);
  width: 132px;
  height: 46px;
  border-radius: 15px 0px 0px 15px;
`

const Atpwinput = styled.input`
  font-size: 20px;
  color: #777777;
  border: 1px solid rgba(46, 44, 61, 0.3);
  width: 132px;
  height: 44px;
  border-radius: 0px 15px 15px 0px;
`

const Atpwwarn = styled.p`
  margin-top: 5px;
  font-size: 11px;
  color: red;
`

const Checkkul = styled.ul`
  margin-top: 20px;
  display: flex;
`

const Checktitle = styled.div`
  font-size: 20px;
  color: #000000;
  border: 1px solid rgba(46, 44, 61, 0.3);
  width: 132px;
  height: 46px;
  border-radius: 15px 0px 0px 15px;
`

const Checkinput = styled.input`
  font-size: 20px;
  color: #000000;
  border: 1px solid rgba(46, 44, 61, 0.3);
  width: 203px;
  height: 44px;
  border-radius: 0px 15px 15px 0px;  
`

const Checkokbutton = styled.button`
  margin-top: 7px;
  margin-left: 10px;
  width: 34px;
  height: 34px;
  border-radius: 34px;
  border: none;
  cursor: pointer;
  background-color: #556FFF;
`

const Checkpwwarn = styled.p`
  margin-top: 7px;
  font-size: 11px;
  color: red;
  margin-bottom: 200px;
`

const Modifyok = styled.button`
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

const PasswordModify = function () {
  return (
    <>
      <All>
        <Titleul>
          <Backbutton onClick={() => navigate("/MyProfileModify")}></Backbutton>
          <Title>나의 정보 수정</Title>
        </Titleul>
        <Maintitle>비밀번호 변경</Maintitle>
        <Bfpwul>
          <BfpwTitle>기존 비밀번호</BfpwTitle>
          <Bfpw>********</Bfpw>
        </Bfpwul>
        <Atpwul>
          <AtpwTitle>변경 비밀번호</AtpwTitle>
          <Atpwinput></Atpwinput>
        </Atpwul>
        <Atpwwarn>조건에 충족하지 않습니다.</Atpwwarn>
        <Checkkul>
          <Checktitle>비밀번호 확인</Checktitle>
          <Checkinput></Checkinput>
          <Checkokbutton></Checkokbutton>
        </Checkkul>
        <Checkpwwarn>비밀번호가 다릅니다.</Checkpwwarn>
        <Modifyok onClick={() => navigate("/MyProfileModify")}>수정 완료</Modifyok>
      </All>
    </>
  )
};

export default PasswordModify;