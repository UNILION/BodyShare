import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css'
import Add from "pages/analysis/record/NoteAdd"
import SportRecord from "pages/analysis/record/SportNote"
import FoodRecord from "pages/analysis/record/FoodNote"
import axios from "axios";
import { userSelector } from "recoil/userRecoil";
import { useRecoilValue } from 'recoil';
import moment from 'moment';

const instance = axios.create({
  baseURL: "http://localhost:33000/api",
  withCredentials: true
});



const RecordGrid = styled.div`
  display: grid;
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
  width: 370px;
  position: relative;
  background-color: white;
  border: 1px solid rgba(135, 135, 135, 0.3);
  border-radius: 15px;
  padding: 0;
  box-sizing: border-box;
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

const Record = function () {
  // 캘린더
  const [value, onChange] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const today = new Date();

  const [sportsList, setSportsList] = useState();
  const [foodList, setFoodList] = useState();

  const userNo = useRecoilValue(userSelector);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const loadRecord = async function () {
    try {
      const result = await instance.get(`/record/sports/${userNo}`);
      const tempSportsList = result.data; // API 응답의 구조에 따라 수정
      let temp_s = [];
      temp_s.push(...filterS(selectedDate, tempSportsList)); // 새로운 내용 추가
      setSportsList(temp_s);
    } catch (error) {
      // 에러 처리
      console.error(error);
    }

    try {
      const diet = await instance.get(`/record/food/${userNo}`);
      const tempdiet = diet.data; // API 응답의 구조에 따라 수정
      let temp_f = [];
      temp_f.push(...filterF(selectedDate, tempdiet)); // 새로운 내용 추가
      setFoodList(temp_f);
    } catch (error) {
      // 에러 처리
      console.error(error);
    }
  };

  //운동 삭제
  const deleteSportsRecord = async (planNo) => {
    try{
      await instance.delete(`/record/sportsdel/${planNo}`);
      //삭제후에 다시 스포츠 리스트 불러옴
      loadRecord();
    }catch(error){
      console.log("오류",error);
    };
  };

   //음식 삭제
   const deleteFoodRecord = async (planNo) => {
    try{
      await instance.delete(`/record/fooddel/${planNo}`);
      //삭제후에 다시 스포츠 리스트 불러옴
      loadRecord();
    }catch(error){
      console.log("오류",error);
    };
  };

  const filterS = function (selectedDate, list) {
    const result = list.filter(item => dateCal(item.exerciseDate) == selectedDate.toLocaleDateString());
    return result;
  };

  const filterF = function (selectedDate, list) {
    const result = list.filter(item => dateCal(item.dietDate) == selectedDate.toLocaleDateString());
    return result;
  };

  const dateCal = function (date) {
    const dateObject = new Date(date);

    return dateObject.toLocaleDateString();
  };

  useEffect(() => {
    loadRecord();
  }, [selectedDate]);

  return (
    <>
      <RecordGrid>
        <CalendarDiv>
          <Calendar
            onChange={handleDateChange}
            value={value}
            // 현재 날짜를 최대로 잡음
            maxDate={new Date()}
            formatDay={(locale, date) => moment(date).format('D')}
          />
        </CalendarDiv>

        <NoteGrid>
          {/* 날짜 부분 */}
          <TitleDate>
            <P>{selectedDate ? selectedDate.toLocaleDateString() : ""} 운동 기록</P>
          </TitleDate>
          <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
            {/* 운동 기록 부분 */}
            {sportsList && 
              <SportRecord sportsList={sportsList} 
              onDelete={(planNo) => deleteSportsRecord(planNo)}
            />}
          </div>
        </NoteGrid>

        <NoteGrid>
          {/* 날짜 부분 */}
          <TitleDate>
            <P>{selectedDate ? selectedDate.toLocaleDateString() : ""} 식단 기록</P>
          </TitleDate>
          <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
            {/* 음식 기록 부분 */}
            {foodList && 
            <FoodRecord foodList={foodList} 
            onDelete={(planNo) => deleteFoodRecord(planNo)}
          />}
          </div>
        </NoteGrid>



        {/* 기록 추가하기 */}
        {selectedDate.toLocaleDateString() == today.toLocaleDateString() ? <Add /> : null}
        {/* <Add /> */}

      </RecordGrid>
    </>

  );
};

export default Record;
