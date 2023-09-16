import styled from "styled-components";
import backButton from "../../assets/Img/back.png"
import checkButton from "../../assets/Img/circletcheck.png"
import { useNavigate } from "react-router-dom";
import Button from "../../components/commons/Button"
import Image5 from "../../assets/Img/check.png"

const All = styled.div`
  margin-left: 7px;
  margin-right: 3px;
  margin-top: 19px;
`;

const Titleul = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
  float: left;
`;

const Backbutton = styled.button`
  width: 20px;
  height: 20px;
  background-image: url(${backButton});
  background-size: cover;
  border-radius: 20px;
  border: none;
  cursor: pointer;
`;

const Title = styled.p`
  margin-left: 5px;
  font-size: 23px;
  font-style: bold;
`;

const Titlej = styled.div`
  border-radius: 15px 0px 0px 15px;
  background-color: #FFFFFF;
  border: 1px solid rgba(135, 135, 135, 0.3);
  font-size: 13px;
  width: 95px;
  text-align: center;
  line-height: 45px;
`;

const Titlen = styled.div`
  width: 230px;
  height: 45px;
  color: #808080;
  border-radius: 0px 15px 15px 0px;
  background-color: #FFFFFF;
  border: 1px solid rgba(135, 135, 135, 0.3);
  font-size: 13px;
  padding-left: 10px;
  line-height: 45px;
`;

const Maintitle = styled.p`
  margin-top: 35px;
  font-size: 20px;
`;

const Bfpwul = styled.ul`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 95px auto;
`;

const Atpwul = styled.ul`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 95px auto;
`;

const Input = styled.input`
  width: 230px;
  height: 45px;
  color: #808080;
  border-radius: 0px 15px 15px 0px;
  background-color: #FFFFFF;
  border: 1px solid rgba(135, 135, 135, 0.3);
  font-size: 13px;
  padding-left: 10px;
`;

const Atpwwarn = styled.p`
  margin-top: 7px;
  margin-left: 100px;
  font-size: 11px;
  color: red;
`;

const Checkkul = styled.ul`
  margin-top: 5px;
  display: grid;
  grid-template-columns: 95px auto auto;
`;

const Checkokbutton = styled.button`
  background-image: url(${checkButton});
  background-size: cover;
  margin-top: 7px;
  margin-left: 3px;
  width: 34px;
  height: 34px;
  border-radius: 34px;
  border: none;
  cursor: pointer;
`;

const Checkpwwarn = styled.p`
  margin-top: 7px;
  font-size: 11px;
  color: red;
  margin-left: 100px;
`;

const PasswordModify = function () {
  const navigate = useNavigate();
  return (
    <>
      <All>
        <Titleul>
          <Backbutton onClick={() => {navigate("/mypage/modify")}}></Backbutton>
          <Title>나의 정보 수정</Title>
        </Titleul>
        <br />
        <Maintitle>비밀번호 변경</Maintitle>
        <Bfpwul>
          <Titlej>기존 비밀번호</Titlej>
          <Titlen>********</Titlen>
        </Bfpwul>
        <Atpwul>
          <Titlej>변경 비밀번호</Titlej>
          <Input type="password" placeholder="변경 비밀번호"></Input>
        </Atpwul>
        <Atpwwarn>조건에 충족하지 않습니다.</Atpwwarn>
        <Checkkul>
          <Titlej>비밀번호 확인</Titlej>
          <Input type="password" placeholder="비밀번호 확인"></Input>
          <Checkokbutton></Checkokbutton>
        </Checkkul>
        <Checkpwwarn>비밀번호가 다릅니다.</Checkpwwarn>
        <Button
          name="수정완료"
          img={Image5}
          onClick={() => navigate("/mypage/modify")}
          mt="265px"
          ml="170px"
        />
      </All>
    </>
  )
};

export default PasswordModify;