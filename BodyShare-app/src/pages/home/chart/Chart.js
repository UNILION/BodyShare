import styled from "styled-components";
import { Chart } from "react-google-charts";
import { Link, useNavigate } from "react-router-dom";

const ChartBox = styled.div`
  grid-row: 2;
  width: 380px;
  height: 280px;
  border-radius: 30px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.25);
  margin: 0 auto;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  display: flex;
  place-items: center;
`;

const ChartContainer1 = styled.div`
  width: 185px;
  height: 270px;
  background-color: white;
  border-radius: 30px;
  border: 1px solid rgba(135, 135, 135, 0.3);
  cursor: pointer;
  display: grid;
  place-items: center;
  margin: 0 auto;
`;

const ChartContainer2 = styled.div`
  width: 185px;
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

  const chartData = [
    ["작업", "하루 시간"],
    ["탄", 3],
    ["단", 5],
    ["지", 2],
  ];

  const chartOptions = {
    title: "Calorie",
    pieHole: 0.4,
    titleTextStyle: {
      fontSize: 16,
    },
  };

  const chartData2 = [
    ["", "운동 분"],
    ["M", 60],
    ["T", 45],
    ["W", 30],
    ["T", 75],
    ["F", 90],
    ["S", 120],
    ["S", 60],
  ];

  const chartOptions2 = {
    legend: { position: "none" },
    chart: {
      title: "Daily Diet",
    },
  };

  return (
    <ChartBox>
      <ChartContainer1
        onClick={() => {
          navigate("/analysis/sportschart");
        }}
      >
        <Chart
          chartType="Bar"
          width="170px"
          height="240px"
          data={chartData2}
          options={chartOptions2}
          graph_id="barchart2"
          border-radius="30px"
        />
      </ChartContainer1>
      <ChartContainer2
        onClick={() => {
          navigate("/analysis/foodchart");
        }}
      >
        <Chart
          chartType="PieChart"
          width="170px"
          height="240px"
          data={chartData}
          options={chartOptions}
          graph_id="donutchart"
          border-radius="30px"
        />
      </ChartContainer2>
    </ChartBox>
  );
};
export default Charts;
