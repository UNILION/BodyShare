import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Chart } from "react-google-charts";
import { userSelector } from "recoil/userRecoil";
import { useRecoilValue } from "recoil";
import useCustomAxios from "components/commons/CustomAxios"

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
`;

const ChartContainer = styled.div`
  width: 330px;
  height: 476px;
  background-color: white;
  border-radius: 15px;
`;

const Not = styled.div`
  text-align: center;
  font-size: 17px;
  font-weight: bold;
  width: 340px;
  height: 420px;
  margin-top: 190px;
  overflow-y: hidden;
  color: black;
`;

const Slide2 = function () {
  const instance = useCustomAxios();
  const userNo = useRecoilValue(userSelector);
  const [chartData, setChartData] = useState([]);
  const [sum, setSum] = useState(0);
  
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

      // 현재 주 해당 칼로리기록만 저장
      const currentWeekData = foodData.filter((record) => {
        const recordDate = new Date(record.dietDate);
        return (
          recordDate >= currentWeekStartDate && recordDate <= currentWeekEndDate
        );
      });

      const chartData = [["일자", "소모 칼로리", "섭취 칼로리"]];
      const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
      let temp = sum
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

        const consumedCaloriesRecord = currentWeekData.find((record) => {
          // 현재 요일에 해당되는 음식 칼로리 기록이 있는지 확인
          const recordDate = new Date(record.dietDate);
          return recordDate.getDay() === i;
        });

        const consumedCalories = consumedCaloriesRecord
          ? consumedCaloriesRecord.calories
          : 0;
        temp += Totalconsum + consumedCalories
        chartData.push([dateString, Totalconsum, consumedCalories]);
      }

      setSum(temp)
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
    title: "소모 칼로리와 섭취 칼로리 비교",
    legend: { position: "top" },
    bars: "horizontal",
    titleTextStyle: {
      fontSize: 15,
    },
  };

  return (
    <Slide>
      <ChartContainer>
        {sum > 0 ?
          <Chart
            chartType="BarChart"
            width="330px"
            height="476px"
            data={chartData}
            options={chartOptions}
            graph_id="barchart"
          />
          : <Not>7일동안 운동, 식단이 기록되지 않았습니다. 기록 탭에서 등록해주세요.</Not>}
      </ChartContainer>
    </Slide>
  );
};

export default Slide2;
