import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";

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

const FoodChart = function () {
  // 슬라이드
  const settings = {
    dots: true,
    infinite: false
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        <Slide1 />

        <Slide2 />
      </Slider>
    </SliderContainer>
  );
};

export default FoodChart;
