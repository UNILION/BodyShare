import React from 'react';
import styled from "styled-components";
import previous from "assets/Img/Previous.png";
import Button from "components/commons/Button";
import plus from "assets/Img/buttonplus.png";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { selectedSportNameState, selectedSportNoState } from 'recoil/sportList'; 
import axios from "axios";
import { userSelector } from 'recoil/userRecoil';

const instance = axios.create({
  baseURL: "http://localhost:33000/api",
  withCredentials: true
});

const TimeInputContainer = styled.div`
  display: grid;
  margin: auto;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 5px;
  width: 360px;
`;

const PreviousButton = styled.img`
  grid-row: 1;
  width: 21px;
  height: 21px;
  margin-top: 10px;
  cursor: pointer;
`;

const SportTitle = styled.div`
  grid-row: 2;
`;

const Line = styled.div`
  width: 360px;
  height: 2px;
  margin-top: 20px;
  background-color: rgba(135, 135, 135, 0.3);
`;

const SportDate = styled.div`
  grid-row: 3;
  height: 44px;
`;

const P = styled.p`
  display: inline-block;
  line-height: 44px;
  font-size: 20px;
  font-weight: bold;
`;

const BoxContainer = styled.div`
  float: right;
`;

const Box = styled.div`
  width: 210px;
  height: 44px;
  background-color: rgba(85, 111, 255, 0.3);
  border-radius: 15px;
  text-align: center;
  line-height: 44px;
  margin-left: 10px;
`;

const SportTime = styled.div`
  grid-row: 4;
`;

const SmallBox = styled.input`
  float: right;
  width: 205px;
  height: 44px;
  background-color: rgba(85, 111, 255, 0.3);
  border-radius: 15px;
  border: none;
  text-align: center;
`;

const Category = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
  float: left;
`;

const SmallLine = styled.div`
  width: 2px;
  height: 30px;
  background-color: rgba(135, 135, 135, 0.3);
  float: left;
  margin-right: 10px;
`;

const SportName = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
`;

const TimeInput = function () {
  const navigate = useNavigate();
  const selectedSportName = useRecoilValue(selectedSportNameState);
  const selectedSportNo = useRecoilValue(selectedSportNoState);
  const today = new Date().toLocaleDateString();
  const userNo = useRecoilValue(userSelector);

  const [exerciseTime, setExerciseTime] = useState("");

  const handleExerciseTime = (e) => {
    const numVal = e.target.value.replace(/[^0-9]/g, "");
    setExerciseTime(numVal);
  }

  const sendSportsDataToServer = async () => {
    try {
  
      const exerciseDate = String(new Date().toLocaleDateString());
    
      // 선택한 음식 정보를 담은 객체를 생성
      const sportsData = {
        userNo,
        sportsNo: selectedSportNo,
        exerciseDate,
        exerciseTime:  parseInt(exerciseTime)
      };
  
      const response = await instance.post('/record/sportsadd', sportsData);
  
      console.log('POST 요청이 성공적으로 보내졌습니다.');
      console.log('서버 응답:', response.data);
    } catch (error) {
      console.error('POST 요청 실패:', error);
    }
  }
  
  return (
    <>
      <TimeInputContainer>
        <PreviousButton src={previous} onClick={() => navigate('/analysis')}></PreviousButton>
        
        <SportTitle>
          {/* <Category>유산소</Category> */}
          {/* <SmallLine></SmallLine> */}
          <SportName>{selectedSportName}</SportName>
          <Line></Line>
        </SportTitle>
        <SportDate>
          <P>날짜</P>
          <BoxContainer>
            <Box>{today}</Box>
          </BoxContainer>
        </SportDate>
        <SportTime>
          <P>운동한 시간</P>
          <SmallBox
            type="text"
            maxLength="3"
            value={exerciseTime} // 사용자 입력 값을 설정
            onChange={handleExerciseTime} 
          />
        </SportTime>
      </TimeInputContainer> 

      <Button
          name="입력하기"
          img={plus}
          ml="auto"
          mt="130px"
          width="150px"
          display="block"
          onClick={() => {
            sendSportsDataToServer(); // 서버로 데이터 전송
            navigate('/analysis');
          }}
      />     
    </>
  );
};

export default TimeInput;
