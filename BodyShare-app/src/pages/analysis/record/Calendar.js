import styled from "styled-components";
import React, { useState } from 'react';
import {useNavigate } from "react-router-dom";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import buttonplus from "../../../assets/Img/buttonplus.png";
import seemore from "../../../assets/Img/seemore.png";


const RecordGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
`;

const CalendarDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const NoteGrid = styled.div`
  position: relative;
  background-color: white;
  border: 1px solid rgba(135, 135, 135, 0.3);
  border-radius: 15px;
  padding: 0;
`;

const TitleDate = styled.div`
  background-color: rgba(85, 111, 255, 0.3);
  border-radius: 15px 15px 0 0;
  padding: 10px 20px;
  border-bottom: 2px solid #556FFF;
`;

const P = styled.p`
  color: #556FFF;
  font-weight: bold;
  margin: 0;
`;

const SportNoteContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  padding: 20px;
`;

const FoodNoteContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  padding: 20px;
`;

const SportNote = styled.p`
  font-size: 14px;
`;

const SportTime = styled.p`
  font-size: 14px;
`;

const SeeMore = styled.button`
  width: 20px;
  height: 26px;
  border: none;
  background-color: white;
  cursor: pointer;
  padding: 0;
`;

const FoodSeeMore = styled.button`
  width: 20px;
  height: 26px;
  border: none;
  background-color: white;
  cursor: pointer;
  padding: 0;
`;

const SeeMoreDetail = styled.div`
  width: 158px;
  position: absolute; 
  top: 70px;
  left: 200px;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;

const FoodSeeMoreDetail = styled.div`
  width: 158px;
  position: absolute; 
  top: 130px;
  left: 200px;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;
const Correction = styled.button`
  width: 158px;
  height: 40px;
  border-radius: 15px 15px 0px 0px;
  border: 1px solid #B3B3B3;
  background-color: white;
  &:hover {
    cursor: pointer;
    background-color: #556FFF;
  }
`;

const Delete = styled.button`
  width: 158px;
  height: 40px;
  border-radius: 0px 0px 15px 15px;
  border: 1px solid #B3B3B3;
  background-color: white;
  &:hover {
    cursor: pointer;
    background-color: red;
  }
`;

const FoodDelete = styled.button`
  width: 158px;
  height: 40px;
  border-radius: 15px;
  border: 1px solid #B3B3B3;
  background-color: white;
  &:hover {
    cursor: pointer;
    background-color: red;
  }
`;

const SmIng = styled.img`
  width: 20px;
  height: 26px;
`;

const FoodNote = styled.p`
  font-size: 14px;
`;

const NoteAddGrid = styled.div`
  display: grid;
  gap: 10px;
`;

const Line = styled.div`
  width: 390px;
  height: 1px;
  background-color: rgba(135, 135, 135, 0.3);
`;

const Add = styled.div`
  text-align: left;
  padding: 10px 20px;
  border-radius: 15px;
  background-color: rgba(85, 111, 255, 0.3);
  display: flex;
`;

const BtImg = styled.img`
  width: 19px;
  border: none;
  background: none;
  margin-right: 10px;

  &:hover {
    cursor: pointer;
  }
`;

const Record = function () {
  const navigate = useNavigate();
  // 캘린더
  const [value, onChange] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  
  const [seeMoreVisible, setSeeMoreVisible] = useState(false);
  const [foodSeeMoreVisible, setFoodSeeMoreVisible] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const toggleSeeMore = () => {
    setFoodSeeMoreVisible(false);
    setSeeMoreVisible(!seeMoreVisible);
  };

  const toggleFoodSeeMore = () => { 
    setSeeMoreVisible(false);
    setFoodSeeMoreVisible(!foodSeeMoreVisible);
  };

  return (
    <>
      <RecordGrid>
        <CalendarDiv>
          <Calendar onChange={handleDateChange} value={value} />
        </CalendarDiv>
        <NoteGrid>
          <TitleDate>
            <P>{selectedDate ? selectedDate.toLocaleDateString() : ""}</P>
          </TitleDate>
          <SportNoteContainer>
            <SportNote>유산소 달리기</SportNote>
            <SportTime>30분</SportTime>
            <SeeMore onClick={toggleSeeMore}>
              <SmIng src={seemore}></SmIng>
            </SeeMore>
            <SeeMoreDetail isVisible={seeMoreVisible}>
              <Correction onClick={() => navigate("/analysis/time")}>수정하기</Correction>
              <Delete>삭제하기</Delete>
            </SeeMoreDetail>
          </SportNoteContainer>
          <Line></Line>
          <FoodNoteContainer>
            <FoodNote>닭죽</FoodNote>
            <FoodSeeMore onClick={toggleFoodSeeMore}>
              <SmIng src={seemore}></SmIng>
            </FoodSeeMore>
            <FoodSeeMoreDetail isVisible={foodSeeMoreVisible}>
              <FoodDelete>삭제하기</FoodDelete>
            </FoodSeeMoreDetail>
          </FoodNoteContainer>
        </NoteGrid>
        <NoteAddGrid>
          <Add>
            <BtImg src={buttonplus} onClick={() => navigate("/analysis/sports")}></BtImg>
            <P>운동 기록 추가</P>
          </Add>
          <Add>
            <BtImg src={buttonplus} onClick={() => navigate("/analysis/food")}></BtImg>
            <P>식단 기록 추가</P>
          </Add>
        </NoteAddGrid>
      </RecordGrid>
    </>
  );
};

export default Record;
