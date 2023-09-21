import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import axios from "axios";
import { userAtom } from "recoil/userRecoil";

//axios.defaults.baseURL = "http://localhost:33000/api";
const instance = axios.create({
  baseURL: "http://localhost:33000/api",
  withCredentials: true
});

const Inputdiv = styled.div`
  grid-row: 3;
  width: 360px;
  height: 146.47px;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 340px;
  height: 60.75px;
  border-radius: 15px;
  background-color: #FFFFFF;
  border: 1px solid rgba(135, 135, 135, 0.3);
  font-size: 16px;
  padding-left: 15px;
`;

const StyledLink = styled(Link)`
  grid-row: 4;
  width: 355px;
  color: black;
  font-size: 14px;
  text-decoration: none;
  text-align: center;
  margin: 0 auto;
  text-decoration: underline;
`;

const Logindiv = styled.div`
  grid-row: 5;
  width: 390px;
  height: 60px;
  margin: 0 auto;
  text-align: center;
`;

const LoginButton = styled.button`
  background-color: #556fff;
  width: 355px;
  height: 60px;
  border-radius: 15px;
  color: white;
  font-size: 20px;
  border: 1px solid rgba(135, 135, 135, 0.3);
  
  &:hover {
    cursor: pointer;
  }
`;

const Login = function () {
  const navigate = useNavigate();

  const [userId, setUserId] = useState('abc123');
  const [password, setPassword] = useState('1234');

  const [userNo, setUserNo] = useRecoilState(userAtom);

  const sendlogin = async function(){
    try {
      const response = await instance.post('/users/signin', { userId, password});
      console.log(response.data);

      if (response.data.login) {
        // recoil에 userNo 담기
        setUserNo(response.data.userNo);
        navigate("/home");
      } else {
        // 로그인 실패
        // 실패 메시지 표시 또는 다른 조치 수행
      }
    } catch (error) {
      // 에러 처리
      console.error(error);
    }

  };

  return (
    <>
      <Inputdiv>
        <Input type="text" value={userId} placeholder="아이디" onChange={(e)=>{setUserId(e.target.value)}}/>
        <br></br>
        <br></br>
        <Input type="password" value={password} placeholder="비밀번호" onChange={(e)=>{setPassword(e.target.value)}}/>
      </Inputdiv>

      <StyledLink to="/signup">회원 가입</StyledLink>

      <Logindiv>
        <LoginButton onClick={ sendlogin }>로그인</LoginButton>
      </Logindiv>
    </>
  );
};

export default Login;