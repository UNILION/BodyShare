import React from "react";
import styled from "styled-components";
import { Chart } from "react-google-charts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

//axios.defaults.baseURL = "http://localhost:33000/api";
const instance = axios.create({
  baseURL: "http://localhost:33000/api",
  withCredentials: true
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

const Slide = styled.div`
  min-width: 100%;
  display: grid;
  place-items: center;
  transition: transform 0.3s ease;
  grid-column: span 1;
`;

const ChartBox = styled.div`
  width: 360px;
  height: 476px;
  border-radius: 30px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.25);
  margin: 0 auto;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChartContainer = styled.div`
  width: 340px;
  height: 476px;
  background-color: white;
  border-radius: 15px;
  /* border: 1px solid rgba(135, 135, 135, 0.3); */
  cursor: pointer;
  margin-left: 10px;
`;

const FoodChart = function () {
  // 차트
  const chartData1 = [
    ["작업", "하루 시간"],
    ["탄", 3],
    ["단", 5],
    ["지", 2],
  ];

  const chartOptions1 = {
    title: "Calorie",
    pieHole: 0.4,
    titleTextStyle: {
      fontSize: 20,
    },
    chartArea: {
      left: "10%", 
      top: "20%", 
      width: "100%",
      height: "100%",
    },
  };

  const chartData2 = [
    ["요일", "칼로리"],
    ["월", 1000],
    ["화", 1170],
    ["수", 660],
    ["목", 1030],
    ["금", 1030],
    ["토", 1030],
    ["일", 1030],
  ];

  const chartOptions2 = {
    title: "요일별 칼로리 섭취량",
    curveType: "function",
  };

  // 슬라이드
  const settings = {
    dots: true,
    infinite: false
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        <Slide>
          <ChartBox>
            <ChartContainer>
              <Chart
                chartType="PieChart"
                width="100%"
                height="456px"
                data={chartData1}
                options={chartOptions1}
                graph_id="donutchart"
              />
            </ChartContainer>
          </ChartBox>
        </Slide>

        <Slide>
          <ChartBox>
            <ChartContainer>
              <Chart
                chartType="ComboChart"
                width="340px"
                height="456px"
                data={chartData2}
                options={chartOptions2}
                graph_id="curve_chart"
              />
            </ChartContainer>
          </ChartBox>
        </Slide>
      </Slider>
    </SliderContainer>
  );
};

export default FoodChart;
