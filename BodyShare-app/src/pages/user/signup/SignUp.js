import styled from "styled-components";
import IntroMessage from "pages/user/signup/IntroMessage";
import Interest from "pages/user/signup/Interest";
import Selection from "pages/user/signup/Selection";
import Button from 'pages/user/signup/Button';
import axios from "axios";
import { useRecoilState } from 'recoil';
import { sportsAtom } from "recoil/sportList";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const instance = axios.create({
  baseURL: "http://localhost:33000/api",
  withCredentials: true
});

const Container = styled.div`
  display: grid;
  width: 390px;
  height: 696px;
  grid-template-rows: auto auto auto 1fr;
  gap: 10px;
`;

const SignUp = function () {
  const [sports, setSports] = useRecoilState(sportsAtom);

  const loadDB = async function () {
    try {
      const response = await instance.get('/sports');
      setSports(response.data)
    } catch (error) {
      // 에러 처리
      console.error(error);
    }
  };

  // // 선택된 항목 리스트
  // const [selectedList, setSelectedList] = useState([]);

  // const changeSelected = function (list) {
  //   setSelectedList(list);
  // };

  // const location = useLocation();
  // const { data } = location.state || {};

  useEffect(() => {
    loadDB();
  }, []);

  return (
    <Container>
      <IntroMessage />

      <Interest />

      <Selection />

      <Button />
    </Container>
  );
};

export default SignUp;