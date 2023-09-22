import styled from "styled-components";
import { Chart } from "react-google-charts";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userSelector } from "recoil/userRecoil";
import { useRecoilValue } from "recoil";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:33000/api",
  withCredentials: true,
});

const ChartBox = styled.div`
  grid-row: 2;
  display: flex;
  width: 370px;
  height: 280px;
  border-radius: 30px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.25);
  margin: 0 auto;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  place-items: center;
`;

const ChartContainer = styled.div`
  width: 180px;
  height: 270px;
  background-color: white;
  border-radius: 30px;
  border: 1px solid rgba(135, 135, 135, 0.3);
  cursor: pointer;
  display: grid;
  place-items: center;
  margin: 0 auto;
`;

const Charts = function () {
  const navigate = useNavigate();
  const userNo = useRecoilValue(userSelector);

  const [chartData, setChartData] = useState(0);
  const [chartData2, setChartData2] = useState(0);

  const chartDatas = async function () {
    try {
      // 스포츠 차트 데이터 가져오기
      const sportsResponse = await instance.get(`/record/sports/${userNo}`);
      const sportsData = sportsResponse.data;

      const sportsChartData = [
        ["", "운동 분"],
        ["M", 60],
        ["T", 45],
        ["W", 30],
        ["T", 75],
        ["F", 90],
        ["S", 120],
        ["S", 60],
      ];

      setChartData(sportsChartData);
    } catch (error) {
      console.error(error);
    }

    try {
      // 푸드 차트 데이터 가져오기
      const foodResponse = await instance.get(`/record/food/${userNo}`);
      const foodData = foodResponse.data;

      const foodChartData = [
        ["작업", "하루 시간"],
        ["탄", 3],
        ["단", 5],
        ["지", 2],
      ];

      setChartData2(foodChartData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    chartDatas();
  }, [userNo]);

  return (
    <ChartBox>
      <ChartContainer
        onClick={() => {
          navigate("/analysis/sportschart");
        }}
      >
        <Chart
          chartType="Bar"
          width="170px"
          height="240px"
          data={chartData}
          options={{
            legend: { position: "none" },
            chart: {
              title: "Daily Diet",
            },
          }}
          graph_id="sportschart"
        />
      </ChartContainer>
      <ChartContainer
        onClick={() => {
          navigate("/analysis/foodchart");
        }}
      >
        <Chart
          chartType="PieChart"
          width="170px"
          height="240px"
          data={chartData2}
          options={{
            title: "Calorie",
            pieHole: 0.4,
            titleTextStyle: {
              fontSize: 16,
            },
          }}
          graph_id="foodchart"
        />
      </ChartContainer>
    </ChartBox>
  );
};

export default Charts;
