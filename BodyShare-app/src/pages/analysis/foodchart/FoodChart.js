import React, { useState } from 'react';
import styled from 'styled-components';
import { Chart } from 'react-google-charts';

const SliderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 100%); 
  overflow: hidden;
  width: 360px;
  margin: 35px auto;
`;

const Slide = styled.div`
  min-width: 100%;
  display: grid;
  place-items: center;
  transition: transform 0.3s ease;
  grid-column: span 1; 
`;

const Slider = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 100%);
  transition: transform 0.3s ease;
  transform: translateX(-${props => props.slideIndex * 100}%);
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: center;
`;

const Button = styled.button`
  background-color: ${({ isBlack }) => (isBlack ? 'black' : '#878787')};
  color: #fff;
  border: none;
  border-radius: 50%;
  padding: 5px 5px;
  margin: 10px;
  cursor: pointer;
`;

// 차트 스타일
const ChartBox = styled.div`
  width: 350px;
  height: 476px;
  border-radius: 30px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.25);
  margin: 0 auto;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

const ChartContainer1 = styled.div`
  width: 350px;
  height: 476px;
  background-color: white;
  border-radius: 15px;
  border: 1px solid rgba(135, 135, 135, 0.3);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChartContainer2 = styled.div`
  width: 350px;
  height: 476px;
  background-color: white;
  border-radius: 15px;
  border: 1px solid rgba(135, 135, 135, 0.3);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FoodChart = function() {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex(slideIndex + 1);
  };

  const prevSlide = () => {
    setSlideIndex(slideIndex - 1);
  };

  // 차트
  const chartData1 = [
    ["작업", "하루 시간"],
    ["탄", 3],
    ["단", 5],
    ["지", 2]
  ];

  const chartOptions1 = {
    title: "Calorie",
    pieHole: 0.4,
    titleTextStyle: {
      fontSize: 18,
    }
  };

  const chartData2 = [
    ['요일', '칼로리'],
    ['월',  1000],
    ['화',  1170],
    ['수',  660],
    ['목',  1030],
    ['금',  1030],
    ['토',  1030],
    ['일',  1030]
  ];

  const chartOptions2 = {
    title: '요일별 칼로리 섭취량',
    curveType: 'function'
  };

  return (
    <>
      <SliderContainer>
        <Slider slideIndex={slideIndex}>
        <Slide>
          <ChartBox>
            <ChartContainer1>
                <Chart
                  chartType="PieChart"
                  width="350px"
                  height="476px"
                  data={chartData1}
                  options={chartOptions1}
                  graph_id="donutchart"
                />
              </ChartContainer1>
          </ChartBox>
          </Slide>
          <Slide>
          <ChartBox>
            <ChartContainer2>
                <Chart
                  chartType="ComboChart"
                  width="340px"
                  height="476px"
                  data={chartData2}
                  options={chartOptions2}
                  graph_id="curve_chart"
                />
              </ChartContainer2>
          </ChartBox>
          </Slide>
        </Slider>
      </SliderContainer>

      <ButtonContainer>
        <Button
          onClick={prevSlide}
          disabled={slideIndex === 0}
          isBlack={slideIndex === 0}
        ></Button>
        <Button
          onClick={nextSlide}
          disabled={slideIndex === 1}
          isBlack={slideIndex === 1}
        ></Button>
      </ButtonContainer>
    </>
  );
};

export default FoodChart;
