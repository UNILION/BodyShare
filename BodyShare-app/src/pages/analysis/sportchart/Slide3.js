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

const Slide3 = function () {
  const userNo = useRecoilValue(userSelector);
  const [chartData, setChartData] = useState([]);
  const [userWeight, setUserWeight] = useState();
  const [profileInfo, setProfileInfo] = useState();

  const parseDateString = (dateString) => {
    const dateParts = dateString.split(".");
    const year = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10) - 1;
    const day = parseInt(dateParts[2], 10);
    return new Date(year, month, day);
  };

  const chartDatas = async function () {
    try {
      const exerciseResponse = await instance.get(`/record/sports/${userNo}`);
      const foodResponse = await instance.get(`/record/food/${userNo}`);
      const userResponse = await instance.get(`/users/user/${userNo}`);
      // 추가: 운동 데이터 가져오기
      const exerciseData = exerciseResponse.data;
      const foodData = foodResponse.data;
      const userDataFromApi = userResponse.data;
      setProfileInfo(userDataFromApi);
      setUserWeight(userDataFromApi.weight);

      const currentDate = new Date();
      const currentWeekStartDate = new Date(currentDate);
      currentWeekStartDate.setDate(
        currentDate.getDate() - currentDate.getDay()
      );
      const currentWeekEndDate = new Date(currentWeekStartDate);
      currentWeekEndDate.setDate(currentWeekStartDate.getDate() + 6);

      // 현재 주 해당 칼로리기록만 저장
      const currentWeekData2 = foodData.filter((record) => {
        const recordDate = new Date(record.dietDate);
        return (
          recordDate >= currentWeekStartDate && recordDate <= currentWeekEndDate
        );
      });

      const chartData = [["일자", "MET"]];
      const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

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
      
        let totalMET = 0;
      
        exerciseData.forEach((record) => {
          const recordDate = new Date(record.exerciseDate);
          const recordDateString = recordDate.toLocaleDateString("ko-KR", options);
      
          if (recordDateString === formattedDate) {
            // 3.5Xrecord.metXuserWeightXrecord.exerciseDate 
            totalMET += 3.5 * record.met * userWeight * record.exerciseTime;
          }
        });
      
        chartData.push([dateString, totalMET]);
      }

      setChartData(chartData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    chartDatas();
  }, []);

  const chartOptions = {
    title: "MET",
    legend: { position: "top" },
    bars: "horizontal",
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
          graph_id="barchart3"
        />
      </ChartContainer>
    </Slide>
  );
};

export default Slide3;