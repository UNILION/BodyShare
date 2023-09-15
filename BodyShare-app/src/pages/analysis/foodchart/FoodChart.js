import React, { useState } from 'react';
import styled from 'styled-components';
import { Chart } from 'react-google-charts';
import foodchart1 from '../../../assets/Img/foodchart1.png'
import foodchart2 from '../../../assets/Img/foodchart2.png'

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
const VerticalChart = styled.img`
  width: 360px;
  height: 476px;
  background-color: black;
`;
const HorizontalChart = styled.img`
  width: 360px;
  height: 476px;
  background-color: red;
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
const HorizontalChartWrapper = styled.div`
  width: 360px;
  height: 476px;
  background-color: red;
`;

const ChartBox = styled.div`
  grid-row: 2;
  width: 350px;
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

const ChartContainer1 = styled.div`
  width: 180px;
  background-color: white;
  border-radius: 15px;
  border: 1px solid rgba(135, 135, 135, 0.3);
  cursor: pointer;
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
  const chartData = [
    ["작업", "하루 시간"],
    ["탄", 3],
    ["단", 5],
    ["지", 2]
  ];

  const chartOptions = {
    title: "Calorie",
    pieHole: 0.4,
    titleTextStyle: {
      fontSize: 18,
    }
  };

  return (
    <>
      <SliderContainer>
        <Slider slideIndex={slideIndex}>
        <Slide>
            <HorizontalChartWrapper>
              <ChartBox>
                <ChartContainer1>
                    <Chart
                      chartType="PieChart"
                      width="350px"
                      height="476px"
                      data={chartData}
                      options={chartOptions}
                      graph_id="donutchart"
                    />
                  </ChartContainer1>
              </ChartBox>
            </HorizontalChartWrapper>
          </Slide>
          <Slide>
            <HorizontalChart src={foodchart2}></HorizontalChart>
            <h1>Slide 2</h1>
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
