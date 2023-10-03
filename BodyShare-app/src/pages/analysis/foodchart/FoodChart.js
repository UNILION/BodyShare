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
  const userNo = useRecoilValue(userSelector);
  const [selectedFood] = useRecoilValue(foodSelector);
  const [foodChartData, setFoodChartData] = useState([]);

  const parseDateString = (dateString) => {
    const dateParts = dateString.split(".");
    const year = parseInt(dateParts[0],10);
    const month = parseInt(dateParts[1], 10) -1 // 월은 0부터 시작하니까 1 뺴줌
    const day = parseInt(dateParts[2],10);
    return new Date(year, month, day);
  }





// 요일별 칼로리 
// const chartDatas2 = async function () {
//   try {
//     const response = await instance.get(`/record/food/${userNo}`);
//     const allData = response.data;

//     const currentDate = new Date();
//     const currentWeekStartDate = new Date(currentDate);
//     currentWeekStartDate.setDate(
//       currentDate.getDate() - currentDate.getDay()
//     );
//     const currentWeekEndDate = new Date(currentWeekStartDate);
//     currentWeekEndDate.setDate(currentWeekStartDate.getDate() + 6);

//     let totalCalories = 0; // 주간 칼로리 누적값을 저장할 변수

//     for (let i = 0; i < 7; i++) {
//       const day = currentWeekStartDate.getDate() + i; // 현재 주의 시작일부터 7일 동안
//       const foodItem = allData.find((record) => {
//         const recordDate = new Date(record.dietDate);
//         return recordDate.getDate() === day;
//       });

//         totalCalories += foodItem.calories;
//     }

//     // 주간 칼로리 정보를 그래프에 추가
//     const foodChartData = [
//       ["요일", "주간 칼로리"],
//       ["일", 0],
//       ["월", 0],
//       ["화", 0],
//       ["수", 0],
//       ["목", 0],
//       ["금", 0],
//       ["토", 0],
//     ];

//     foodChartData[1][1] = totalCalories; // 해당 요일에 주간 칼로리 누적값 설정

//     setFoodChartData(foodChartData);
//   } catch (error) {
//     console.log(error);
//   }
// }
//   useEffect(() => {
//     chartDatas2();
//     const interval = setInterval(() => {
//       chartDatas2(); 
//     }, 24 * 60 * 60 * 1000); 

//     return () => clearInterval(interval);
//   }, [userNo, selectedFood]);

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
        <Slide1 />

        <Slide>
          <ChartBox>
            <ChartContainer>
              <Chart
                chartType="ComboChart"
                width="340px"
                height="456px"
                data={foodChartData}
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
