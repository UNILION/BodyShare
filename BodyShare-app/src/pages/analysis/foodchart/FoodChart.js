import React, { useState } from "react";
import styled from "styled-components";
import { Chart } from "react-google-charts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { userSelector } from "recoil/userRecoil";
import { foodSelector } from "recoil/foodList";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";


const instance = axios.create({
  baseURL: "http://localhost:33000/api",
  withCredentials: true,
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
  const parseDateString = (dateString) => {
    const dateParts = dateString.split(".");
    const year = parseInt(dateParts[0],10);
    const month = parseInt(dateParts[1], 10) -1 // 월은 0부터 시작하니까 1 뺴줌
    const day = parseInt(dateParts[2],10);
    return new Date(year, month, day);
  }



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
