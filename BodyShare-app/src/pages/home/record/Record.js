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
      sum = filterS(sportsList);
    } catch (error) {
      // 에러 처리
      console.error(error);
    }

    try {
      const diet = await instance.get(`/record/food/${userNo}`);
      const tempdiet = diet.data; // API 응답의 구조에 따라 수정
      sum += filterF(tempdiet);
    } catch (error) {
      // 에러 처리
      console.error(error);
    }
    
    setCount(sum);
  };

  const filterS = function(list) {
    const today = new Date().toLocaleDateString();
  
    return list.filter(item => dateCal(item.exerciseDate) === today).length;
  };

  const filterF = function(list) {
    const today = new Date().toLocaleDateString();
  
    return list.filter(item => dateCal(item.dietDate) === today).length;
  };

  const dateCal = function(date) {
    const dateObject = new Date(date);
  
    return dateObject.toLocaleDateString();
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




