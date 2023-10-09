import React, { useEffect } from 'react';
import styled from "styled-components";
import previous from "assets/Img/Previous.png";
import Button from "components/commons/Button";
import plus from "assets/Img/buttonplus.png";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { selectedSportNameState, selectedSportNoState, sportsSelector } from 'recoil/sportList'; 
import axios from "axios";
import { userSelector } from 'recoil/userRecoil';
import { isDarkAtom } from 'recoil/themeRecoil';

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
  position: relative;
  color: ${(props) => (props.isDarkMode ? 'white' : 'black')};
`;

const SmallBox = styled.input`
  float: right;
  width: 205px;
  height: 44px;
  background-color: rgba(85, 111, 255, 0.3);
  border-radius: 15px;
  border: none;
  text-align: center;
  color: ${(props) => (props.isDarkMode ? 'white' : 'black')};
`;

const SportName = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-left: 5px;
  color: ${(props) => (props.isDarkMode ? 'white' : 'black')};
`;

const ErrorMessage = styled.p`
  position: absolute;
  right: 25px;
  font-size: 14px;
  color: red;
  margin-top: 5px;
`;

const BtnImg = styled.img`
  width: 35px;
  position: relative;
  margin-left: 120px;
  bottom: 40px;
  left: 200px;
  cursor: pointer;
`;

const TimeInput = function () {
  const navigate = useNavigate();
  const selectedSportName = useRecoilValue(selectedSportNameState);
  const selectedSportNo = useRecoilValue(selectedSportNoState);
  const today = new Date().toLocaleDateString();
  const userNo = useRecoilValue(userSelector);
  const sportsList = useRecoilValue(sportsSelector);
  const isDarkMode = useRecoilValue(isDarkAtom);
  let user;
  let met;

  const [exerciseTime, setExerciseTime] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleExerciseTime = (e) => {
    const numVal = e.target.value.replace(/[^0-9]/g, "");
    setExerciseTime(numVal);
  }

  const sendSportsDataToServer = async () => {
    if (!exerciseTime) {
      setErrorMessage("운동 시간을 입력해주세요.");
      return;
    }

    try{
      const response = await instance.get(`/users/user/${userNo}`);
      if(response.data)
      {
        user = response.data;
      }
    } catch(err){
      console.error(err);
    }

    try {
  
      const exerciseDate = String(new Date().toLocaleDateString());
      
      // 일치 하는 운동 찾아서 met 계수 찾기
      const list = sportsList.filter(item => item.no == selectedSportNo);
      met = list[0].met;

      // 칼로리 계산하기
      console.log(user);
      console.log(met);
      const consum = Math.floor(((3.5 * met * user.weight * parseInt(exerciseTime))/1000)*5);

      // 선택한 음식 정보를 담은 객체를 생성
      const sportsData = {
        userNo,
        sportsNo: selectedSportNo,
        exerciseDate,
        exerciseTime:  parseInt(exerciseTime),
        consum: consum
      };
  
      const response = await instance.post('/record/sportsadd', sportsData);
      if(response.data){
        console.log('POST 요청이 성공적으로 보내졌습니다.');
        console.log('서버 응답:', response.data);
        navigate('/analysis');
      }
    } catch (error) {
      console.error('POST 요청 실패:', error);
    }
  }
 
  return (
    <>
      <TimeInputContainer>
        <PreviousButton src={previous} onClick={() => navigate('/analysis')}></PreviousButton>
        
        <SportTitle>
          <SportName  isDarkMode={isDarkMode}>{selectedSportName}</SportName>
          <Line></Line>
        </SportTitle>
        <SportDate isDarkMode={isDarkMode}>
          <P>날짜</P>
          <BoxContainer>
            <Box>{today}</Box>
          </BoxContainer>
        </SportDate>
        <SportTime isDarkMode={isDarkMode}>
          <P>운동한 시간(분)</P>
          <SmallBox
            type="text"
            maxLength="3"
            value={exerciseTime} // 사용자 입력 값을 설정
            onChange={handleExerciseTime}
            isDarkMode={isDarkMode}
          />
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </SportTime>
      </TimeInputContainer> 

      <Button
          name="입력하기"
          ml="auto"
          mt="30px"
          mr = "20px"
          width="150px"
          display="block"
          onClick={() => {
            sendSportsDataToServer(); // 서버로 데이터 전송
          }}
      />
      <BtnImg src={plus} onClick={sendSportsDataToServer}></BtnImg>
    </>
  );
};

export default TimeInput;
