import React from "react";
import styled from "styled-components";
import { Chart } from "react-google-charts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const SportChart = function () {
// 차트 데이터
const chartData1 = [
  ['', '운동 분'],
  ['월', 60],
  ['화', 45],
  ['수', 30],
  ['목', 75],
  ['금', 90],
  ['토', 120],
  ['일', 60],
];

const chartOptions1 = {
  legend: { position: 'none' },
  chart: {
    title: 'Daily Diet',
  },
};

const chartData2 = [
  ["Task", "운동칼로리", "섭취칼로리"],
  ["월", 8, 2],
  ["화", 2, 1],
  ["수", 4, 3],
  ["목", 10, 5],
  ["금", 10, 6],
  ["토", 10, 4],
  ["일", 10, 7]
];

const chartOptions2 = {
  title: "칼로리 계산(운동으로 소비한 칼로리 - 섭취한 칼로리)",
  legend: { position: "top" },
  hAxis: { title: "칼로리" },
  vAxis: { title: "요일" }, 
  bars: "horizontal", 
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
              chartType="BarChart" 
              width="320px"
              height="436px"
              data={chartData1}
              options={{chartOptions1, orientation: 'horizontal'}}
              graph_id="barchart1"
            />
            </ChartContainer>
          </ChartBox>
        </Slide>

        <Slide>
          <ChartBox>
            <ChartContainer>
            <Chart
              chartType="BarChart" 
              width="330px"
              height="436px"
              data={chartData2}
              options={chartOptions2}
              graph_id="barchart2"
            />
            </ChartContainer>
          </ChartBox>
        </Slide>
      </Slider>
    </SliderContainer>
  );
};

export default SportChart;
