import React, { useState } from 'react';
import styled from 'styled-components';
import foodchart1 from '../../assets/Img/foodchart1.png'
import foodchart2 from '../../assets/Img/foodchart2.png'

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

const SportSearch = function() {
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
            <VerticalChart src={foodchart1}></VerticalChart>
            <h1>Slide 1</h1>
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

export default SportSearch;
