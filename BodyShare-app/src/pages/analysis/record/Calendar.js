import styled from "styled-components";
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Add from "pages/analysis/record/NoteAdd"
import SportRecord from "pages/analysis/record/SportNote"
import FoodRecord from "pages/analysis/record/FoodNote"


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


const Line = styled.div`
  width: 390px;
  height: 1px;
  background-color: rgba(135, 135, 135, 0.3);
`;



const Record = function () {
  // 캘린더
  const [value, onChange] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const handleDateChange = (date) => {
    // onChange();
    // setSelectedDate(date);

    const today = new Date();
    today.setHours(0,0,0,0);
    setSelectedDate(date);

    if (date >= today){
      onChange(date);
    }
  };


  return (
    <>
      <RecordGrid>
        <CalendarDiv>
          <Calendar 
            onChange={handleDateChange} 
            value={value}
            // 현재 날짜를 최대로 잡음
            maxDate={new Date()}
          />
        </CalendarDiv>

        <NoteGrid>
          {/* 날짜 부분 */}
          <TitleDate>
            <P>{selectedDate ? selectedDate.toLocaleDateString() : ""}</P>
          </TitleDate>
          {/* 운동 기록 부분 */}
          <SportRecord />
          <Line></Line>
          {/* 식단 기록 부분 */}
          <FoodRecord />
        </NoteGrid>

        {/* 기록 추가하기 */}
        <Add />

      </RecordGrid>
    </>
  );
};

export default Record;
