import React, { useState, useEffect  } from "react";
import styled from "styled-components";
import { Chart } from "react-google-charts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { userSelector } from "recoil/userRecoil";
import { useRecoilValue } from "recoil";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";

const instance = axios.create({
  baseURL: "http://localhost:33000/api",
  withCredentials: true,
});

const SliderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 100%);
  overflow: hidden;
  width: 370px;
  margin: 35px auto;

.slick-dots {
  position: absolute;
  bottom: 10px;
}

`;


//운동 차트 1
const SportChart = function () {
  const userNo = useRecoilValue(userSelector);
  const [sportsChartData, setSportsChartData] = useState([]);

  const parseDateString = (dateString) => {
    const dateParts = dateString.split(".");
    const year = parseInt(dateParts[0],10);
    const month = parseInt(dateParts[1], 10) -1 // 월은 0부터 시작하니까 1 뺴줌
    const day = parseInt(dateParts[2],10);
    return new Date(year, month, day);
  }
  const chartDatas = async function () {
    try{
      const response = await instance.get(`/record/sports/${userNo}`);
      const allData = response.data;

      const currentDate = new Date();// 현재
      const currentWeekStartDate = new Date(currentDate); // 시작
      currentWeekStartDate.setDate(                         
        currentDate.getDate() - currentDate.getDay() //현재 날짜 - 현재요일 = 일
      );
      const currentWeekEndDate = new Date(currentWeekStartDate); // 종료
      currentWeekEndDate.setDate(currentWeekStartDate.getDate() + 6); // 토

      //현재 주 해당 운동기록만 저장
      const currentWeekDate = allData.filter((item) => {
        const itemDate = parseDateString(item.exerciseDate);
        return (
          itemDate >= currentWeekStartDate && itemDate <= currentWeekEndDate // 운동한 날짜가 현재 주에 포함하는지 검사
        );
        
      });

      const sportsChartData = [["", "운동 분"]];
      const daysOfWeek = ["일","월","화","수","목","금","토"];

      for (let i=0; i<7; i++){ // sportsChartData에 추가
        const day = daysOfWeek[i];
        const date = new Date(currentWeekStartDate);
        date.setDate(currentWeekStartDate.getDate() + i);
        const options ={ //2자리표현
          month: "2-digit",
          day: "2-digit",
        };
        const formattedDate = date.toLocaleDateString("ko-KR", options); // 월/일 (요일)
        const dateString = `${formattedDate}\n(${day})`;

        const exerciseTimeRecord = currentWeekDate.find((record) => { // 현재 요일에 해당되는 운동기록이 있는지 확인
          const recordDate = new Date(record.exerciseDate);
          return recordDate.getDay() === i;
        });

        const exerciseTime = exerciseTimeRecord
          ? exerciseTimeRecord.exerciseTime
          : 0;
        sportsChartData.push([dateString, exerciseTime]); // 있으면 운동시간 가져오기
      }

      setSportsChartData(sportsChartData);
    }catch(error){
      console.log(error);
    }
  }
  useEffect(() => {
    chartDatas();
    const interval = setInterval(() => {
      chartDatas(); // 일정 간격으로 데이터 갱신
    }, 24 * 60 * 60 * 1000); // 매일 한 번 갱신 (24시간 간격)

    return () => clearInterval(interval);
  }, [userNo]);
    




  // 슬라이드
  const settings = {
    dots: true,
    infinite: false
  };

  return (
    <SliderContainer>
      <Slider {...settings}>

        <Slide1 />

        <Slide2 />

      </Slider>
    </SliderContainer>
  );
};

export default SportChart;
