import React from "react";
import styled from "styled-components";
import { Chart } from "react-google-charts";
import { Link, useNavigate } from "react-router-dom";

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

  const chartData2 = [
    ["작업", "하루 시간"],
    ["탄", 3],
    ["단", 5],
    ["지", 2],
  ];

  const chartOptions2 = {
    title: "Calorie",
    pieHole: 0.4,
    titleTextStyle: {
      fontSize: 16,
    },
  };

  const chartData = [
    ["", "운동 분"],
    ["월", 60],
    ["화", 45],
    ["수", 30],
    ["목", 75],
    ["금", 90],
    ["토", 120],
    ["일", 60],
  ];

  const chartOptions = {
    legend: { position: "none" },
    chart: {
      title: "Daily Diet",
    },
  };
  /*
  const Charts = function () {
  const navigate = useNavigate();
  const [sportsChartData, setSportsChartData] = useState([]); // 스포츠 차트 데이터 상태 초기화
  const [foodChartData, setFoodChartData] = useState([]); // 푸드 차트 데이터 상태 초기화

  const chartData = [
    ["", "운동 분"],
    ["월", 60],
    ["화", 45],
    ["수", 30],
    ["목", 75],
    ["금", 90],
    ["토", 120],
    ["일", 60],
  ];
/*
// 스포츠 차트 렌더링
{sportsChartData.map((chartData, index) => (
  <ChartContainer
    key={index}
    onClick={() => {
      navigate(`/analysis/sportschart/${chartData.id}`);
    }}
  >
    <Chart
      chartType="Bar"
      width="170px"
      height="240px"
      data={chartData.data}
      options={chartData.options}
      graph_id={`sports-chart-${chartData.id}`}
      border-radius="30px"
    />
  </ChartContainer>
))}

  const chartOptions = {
    legend: { position: "none" },
    chart: {
      title: "Daily Diet",
    },
  };
// 푸드 차트 렌더링
{foodChartData.map((chartData, index) => (
  <ChartContainer
    key={index}
    onClick={() => {
      navigate(`/analysis/foodchart/${chartData.id}`);
    }}
  >
    <Chart
      chartType="PieChart"
      width="170px"
      height="240px"
      data={chartData.data}
      options={chartData.options}
      graph_id={`food-chart-${chartData.id}`}
      border-radius="30px"
    />
  </ChartContainer>as
))}*/

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
          options={chartOptions}
          graph_id="barchart2"
          border-radius="30px"
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
          options={chartOptions2}
          graph_id="donutchart"
          border-radius="30px"
        />
      </ChartContainer>
    </ChartBox>
  );
};

export default Charts;
