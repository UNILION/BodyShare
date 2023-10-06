import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Chart } from "react-google-charts";
import { userSelector } from "recoil/userRecoil";
import { useRecoilValue } from "recoil";
import axios from "axios";

const Slide = styled.div`
  width: 360px;
  display: grid;
  place-items: center;
  transition: transform 0.3s ease;
  grid-column: span 1;
  border-radius: 30px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.25);
  margin: 0 auto;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

const ChartContainer = styled.div`
  width: 330px;
  height: 476px;
  background-color: white;
  border-radius: 15px;
  /* border: 1px solid rgba(135, 135, 135, 0.3); */
  cursor: pointer;
`;

const instance = axios.create({
  baseURL: "http://localhost:33000/api",
  withCredentials: true,
});

const Slide2 = function () {
  const userNo = useRecoilValue(userSelector);
  const [chartData, setChartData] = useState([]);

  const parseDateString = (dateString) => {
    const dateParts = dateString.split(".");
    const year = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10) - 1; // 월은 0부터 시작하니까 1 뺴줌
    const day = parseInt(dateParts[2], 10);
    return new Date(year, month, day);
  };

  const chartDatas = async function () {
    try {
      const exerciseResponse = await instance.get(`/record/sports/${userNo}`);
      const foodResponse = await instance.get(`/record/food/${userNo}`);

      const exerciseData = exerciseResponse.data;
      const foodData = foodResponse.data;

      const currentDate = new Date(); // 현재
      const currentWeekStartDate = new Date(currentDate); // 시작
      currentWeekStartDate.setDate(
        currentDate.getDate() - currentDate.getDay()
      );
      const currentWeekEndDate = new Date(currentWeekStartDate);
      currentWeekEndDate.setDate(currentWeekStartDate.getDate() + 6);

      // 현재 주 해당 운동기록만 저장
      const currentWeekDate1 = exerciseData.filter((item) => {
        const itemDate = parseDateString(item.exerciseDate);
        return (
          itemDate >= currentWeekStartDate && itemDate <= currentWeekEndDate // 운동한 날짜가 현재 주에 포함하는지 검사
        );
      });
      // 현재 주 해당 칼로리기록만 저장
      const currentWeekData2 = foodData.filter((record) => {
        const recordDate = new Date(record.dietDate);
        return (
          recordDate >= currentWeekStartDate && recordDate <= currentWeekEndDate
        );
      });

      const chartData = [["일자", "소모 칼로리", "섭취 칼로리"]];
      const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

      for (let i = 0; i < 7; i++) {
        // 데이터 추가
        const day = daysOfWeek[i];
        const date = new Date(currentWeekStartDate);
        date.setDate(currentWeekStartDate.getDate() + i);
        const options = {
          // 2자리표현
          month: "2-digit",
          day: "2-digit",
        };
        const formattedDate = date.toLocaleDateString("ko-KR", options); // 월/일 (요일)
        const dateString = `${formattedDate}\n(${day})`;

        let Totalconsum = 0;
  
        // 해당 날짜에 대한 운동 기록 더하기
        exerciseData.forEach((record) => {
          const recordDate = new Date(record.exerciseDate);
          const recordDateString = recordDate.toLocaleDateString("ko-KR", options);
  
          if (recordDateString === formattedDate) {
            Totalconsum += record.consum;
          }
        });

        const consumedCaloriesRecord = currentWeekData2.find((record) => {
          // 현재 요일에 해당되는 음식 칼로리 기록이 있는지 확인
          const recordDate = new Date(record.dietDate);
          return recordDate.getDay() === i;
        });

        const consumedCalories = consumedCaloriesRecord
          ? consumedCaloriesRecord.calories
          : 0;

        chartData.push([dateString, Totalconsum, consumedCalories]);
      }

      setChartData(chartData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    chartDatas();
    const interval = setInterval(() => {
      chartDatas(); // 일정 간격으로 데이터 갱신
    }, 24 * 60 * 60 * 1000); // 매일 한 번 갱신 (24시간 간격)

    return () => clearInterval(interval);
  }, [userNo]);

  const chartOptions = {
    title: "운동 시간과 섭취 칼로리 비교",
    legend: { position: "top" },
    bars: "horizontal",
    titleTextStyle: {
      fontSize: 15,
    },
  };

  return (
    <Slide>
      <ChartContainer>
        <Chart
          chartType="BarChart"
          width="330px"
          height="476px"
          data={chartData}
          options={chartOptions}
          graph_id="barchart"
        />
      </ChartContainer>
    </Slide>
  );
};

export default Slide2;
