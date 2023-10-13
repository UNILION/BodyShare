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

      const currentDate = new Date();
      const currentWeekStartDate = new Date(currentDate);
      currentWeekStartDate.setDate(currentDate.getDate() - currentDate.getDay());
      const currentWeekEndDate = new Date(currentWeekStartDate);
      currentWeekEndDate.setDate(currentWeekStartDate.getDate() + 6);

      const currentWeekData = foodData.filter((record) => {
        const recordDate = new Date(record.dietDate);
        return (
          recordDate >= currentWeekStartDate && recordDate <= currentWeekEndDate
        );
      });

      const chartData = [["일자", "소모 칼로리", "섭취 칼로리"]];
      const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
      let temp = 0; // Initialize temp to zero

      for (let i = 0; i < 7; i++) {
        const day = daysOfWeek[i];
        const date = new Date(currentWeekStartDate);
        date.setDate(currentWeekStartDate.getDate() + i);
        const options = {
          month: "2-digit",
          day: "2-digit",
        };
        const formattedDate = date.toLocaleDateString("ko-KR", options);
        const dateString = `${formattedDate}\n(${day})`;

        let Totalconsum = 0;
        let consumedCalories = 0;

        exerciseData.forEach((record) => {
          const recordDate = new Date(record.exerciseDate);
          const recordDateString = recordDate.toLocaleDateString("ko-KR", options);

          if (recordDateString === formattedDate) {
            Totalconsum += record.consum;
          }
        });

        currentWeekData.forEach((record) => {
          const recordDate = new Date(record.dietDate);
          if (recordDate.getDay() === i) {
            consumedCalories += record.calories;
          }
        });

        chartData.push([dateString, Totalconsum, consumedCalories]);
        temp += consumedCalories;
      }

      setSum(temp);
      setChartData(chartData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    chartDatas();
    const interval = setInterval(() => {
      chartDatas();
    }, 24 * 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, [userNo]);

  const chartOptions = {
    title: "소모 칼로리와 섭취 칼로리 비교",
    legend: { position: "top" },
    bars: "horizontal",
    titleTextStyle: {
      fontSize: 14,
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
