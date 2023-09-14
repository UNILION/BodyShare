import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Chart } from 'react-google-charts'; // Import Google Charts
import sportchart1 from '../../assets/Img/sportchart1.png';
import sportchart2 from '../../assets/Img/sportchart2.png';

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

const VerticalChartWrapper = styled.div`
  width: 360px;
  height: 476px;
  background-color: black;
`;

const HorizontalChartWrapper = styled.div`
  width: 360px;
  height: 476px;
  background-color: red;
`;

const Slider = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 100%);
  transition: transform 0.3s ease;
  transform: translateX(-${(props) => props.slideIndex * 100}%);
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

const SportSearch = function () {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex(slideIndex + 1);
  };

  const prevSlide = () => {
    setSlideIndex(slideIndex - 1);
  };

  return (
    <>
      <SliderContainer>
        <Slider slideIndex={slideIndex}>
          <Slide>
            {/* Google Column Chart */}
            <VerticalChartWrapper>
              <Chart
                width={'100%'}
                height={'100%'}
                chartType="ColumnChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ['요일', '운동 시간'],
                  ['월', 20],
                  ['화', 70],
                  ['수', 60],
                  ['목', 40],
                  ['금', 120],
                  ['토', 60],
                  ['일', 30],
                ]}
                options={{
                  title: '일주일 운동 시간 비교',
                  legend: 'none',
                }}
              />
            </VerticalChartWrapper>
            <h1>Slide 1</h1>
          </Slide>
          <Slide>
            {/* Google Bar Chart */}
            <HorizontalChartWrapper>
              <Chart
                width={'100%'}
                height={'100%'}
                chartType="BarChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ['요일', '운동 시간'],
                  ['월', 20],
                  ['화', 70],
                  ['수', 60],
                  ['목', 40],
                  ['금', 120],
                  ['토', 60],
                  ['일', 30],
                ]}
                options={{
                  title: '일주일 운동 시간 비교',
                  legend: 'none',
                }}
              />
            </HorizontalChartWrapper>
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

export default SportSearch;
