import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { userSelector } from "recoil/userRecoil";

const instance = axios.create({
  baseURL: "http://localhost:33000/api",
  withCredentials: true,
});

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
  width: 320px;
  height: 470px;
  background-color: white;
  border-radius: 15px;
  cursor: pointer;
  margin-left: 10px;
`;

const Slide2 = function () {
  const userNo = useRecoilValue(userSelector);
  const [foodChartData, setFoodChartData] = useState([]);
  console.log(foodChartData);

  const chartDatas2 = async function () {
    try {
      const response = await instance.get(`/record/food/${userNo}`);
      const allData = response.data;
      console.log("정보", allData);
      const currentDate = new Date();
      const currentWeekStartDate = new Date(currentDate);
      currentWeekStartDate.setDate(
        currentDate.getDate() - currentDate.getDay()
      );
      const currentWeekEndDate = new Date(currentWeekStartDate);
      currentWeekEndDate.setDate(currentWeekStartDate.getDate() + 6);
  
      // Filter and keep only the records for the current week
      const currentWeekData = allData.filter((record) => {
        const recordDate = new Date(record.dietDate);
        return (
          recordDate >= currentWeekStartDate && recordDate <= currentWeekEndDate
        );
      });
  
      const dailyCalories = [0, 0, 0, 0, 0, 0, 0];
  
      for (let i = 0; i < currentWeekData.length; i++) {
        const record = currentWeekData[i];
        const recordDate = new Date(record.dietDate);
        const dayOfWeek = recordDate.getDay();
  
        dailyCalories[dayOfWeek] += record.calories;
      }
  
      const foodChartData = [
        ["요일", "주간 칼로리"],
        ["일", dailyCalories[0]],
        ["월", dailyCalories[1]],
        ["화", dailyCalories[2]],
        ["수", dailyCalories[3]],
        ["목", dailyCalories[4]],
        ["금", dailyCalories[5]],
        ["토", dailyCalories[6]],
      ];
  
      setFoodChartData(foodChartData);
    } catch (error) {
      console.log(error);
    }
  };
  

  useEffect(() => {
    chartDatas2();
  }, []);

  const chartOptions2 = {
    title: "요일별 칼로리 섭취량",
    width: "320px",
    height: "450px",
    
  };

  return (
    <Slide>
        <ChartContainer>
          <Chart
            chartType="LineChart"
            data={foodChartData}
            options={chartOptions2}
            graph_id="foodchart2"
          />
        </ChartContainer>
    </Slide>
  );
};

export default Slide2;
