import styled from "styled-components";
import CircleImg from "assets/Img/circletgo.png";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { userSelector } from "recoil/userRecoil";
import { useRecoilValue } from 'recoil';

const instance = axios.create({
  baseURL: "http://localhost:33000/api",
  withCredentials: true
});

const Records = styled.div`
  display: grid;
  grid-row: 1;
  height: 60px;
  border-radius: 30px;
  border: 1px solid rgba(135, 135, 135, 0.3);
  margin-top: 10px;
  grid-template-columns: 4fr 1fr;
`;

const RecordText = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  color: #878787;
  line-height: 60px;
  padding-left: 15px;
`;

const RecordButton = styled(Link)`
  border-radius: 0 30px 30px 0;
  background-color: #556fff;
  cursor: pointer;
  display: grid;
  place-items: center;
`;

const ButtonImg = styled.img`
  width: 45px;
  height: 45px;
  cursor: pointer;
`;

const Record = function () {
  const [count, setCount] = useState(0);

  const userNo = useRecoilValue(userSelector);

  const loadRecord = async function () {
    let sum = 0;
    try {
      const result = await instance.get(`/record/sports/${userNo}`);
      const sportsList = result.data; // API 응답의 구조에 따라 수정
      sum = filter(sportsList);
    } catch (error) {
      // 에러 처리
      console.error(error);
    }

    try {
      const diet = await instance.get(`/record/food/${userNo}`);
      const tempdiet = diet.data; // API 응답의 구조에 따라 수정
      sum += filter(tempdiet);
    } catch (error) {
      // 에러 처리
      console.error(error);
    }
    
    setCount(sum);
  };

  const filter = function( list ){
    const date = new Date();
    const year = date.getFullYear(); // 연도
    const month = date.getMonth() + 1; // 월 (0부터 시작하므로 1을 더함)
    const day = date.getDate(); // 일
    const today = `${year}-${month}-${day}`;

    const result = list.filter(item => dateCal(item.date) == today);
    return result.length;
  };

  const dateCal = function(date) {
    const dateObject = new Date(date);
    dateObject.setHours(dateObject.getHours() + 9);

    const year = dateObject.getFullYear(); // 연도
    const month = dateObject.getMonth() + 1; // 월 (0부터 시작하므로 1을 더함)
    const day = dateObject.getDate(); // 일
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    loadRecord();
  }, []);

  // 함수 호출하여 당일의 기록 개수 가져오기
  return (
    <Records>
      <RecordText>{`오늘의 기록 ${count}건`}</RecordText>
      <RecordButton to="/analysis">
        <ButtonImg src={CircleImg}></ButtonImg>
      </RecordButton>
    </Records>
  );
};
export default Record;




