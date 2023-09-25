import styled from "styled-components";
import { Chart } from "react-google-charts";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userSelector } from "recoil/userRecoil";
import { useRecoilValue } from "recoil";
import axios from "axios";
import Slider from "react-slick";

const instance = axios.create({
  baseURL: "http://localhost:33000/api",
  withCredentials: true,
});

const SliderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 100%);
  overflow: hidden;
  width: 370px;
  margin: 5px auto;

  .slick-dots {
    position: absolute;
    bottom: 5px;
  }
`;
const settings = {
  dots: true,
  infinite: false
};

const Slide = styled.div`
  min-width: 100%;
  display: grid;
  place-items: center;
  transition: transform 0.3s ease;
  grid-column: span 1;
`;

const ChartBox = styled.div`
  grid-row: 2;
  display: flex;
  width: 360px;
  height: 280px;
  border-radius: 30px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.25);
  margin: 0 auto;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  place-items: center;
`;

const ChartContainer = styled.div`
  width: 360px;
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
  const userNo = useRecoilValue(userSelector);

  const [chartData, setChartData] = useState([]);
  const [chartData2, setChartData2] = useState([]);

  const chartDatas = async function () {
    try {
      // 스포츠 차트 데이터 가져오기
      const sportsResponse = await instance.get(`/record/sports/${userNo}`);
      const sportsData = sportsResponse.data;

      const sportsChartData = [
        ["", "운동 분"],
        ["월", 60],
        ["화", 45],
        ["수", 30],
        ["목", 75],
        ["금", 90],
        ["토", 120],
        ["일", 60],
      ];
      /*const sportsChartData = [
        ["", "운동 분"],
        ["월", sportsData.monday],
        ["화", sportsData.tuesday],
        ["수", sportsData.wednesday],
        ["목", sportsData.thursday],
        ["금", sportsData.friday],
        ["토", sportsData.saturday],
        ["일", sportsData.sunday],
      ];*/

      // 차트 데이터 설정
      setChartData(sportsChartData);
    } catch (error) {
      console.error(error);
    }

    try {
      // 푸드 차트 데이터 가져오기
      const foodResponse = await instance.get(`/record/food/${userNo}`);
      const foodData = foodResponse.data;

      const foodChartData = [
        ["작업", "하루 시간"],
        ["탄", 3],
        ["단", 5],
        ["지", 2],
      ];
      /*const foodChartData = [
        ["작업", "하루 시간"],
        ["탄", foodData.carbohydrate],
        ["단", foodData.protein],
        ["지", foodData.fat],
      ];*/

      setChartData2(foodChartData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    chartDatas();
  }, [userNo]);

  return (
    <SliderContainer>
      <Slider {...settings}>
        <Slide>
          <ChartBox>
            <ChartContainer
              onClick={() => {
                navigate("/analysis/sportschart");
              }}
            >
              <Chart
                chartType="Bar"
                width="350px"
                height="240px"
                data={chartData}
                options={{
                  legend: { position: "none" },
                  chart: {
                    title: "운동 분",
                  },
                }}
                graph_id="sportschart"
              />
            </ChartContainer>
            </ChartBox>
        </Slide>
        <Slide>
          <ChartBox>
            <ChartContainer
              onClick={() => {
                navigate("/analysis/foodchart");
              }}
            >
              <Chart
                chartType="PieChart"
                width="350px"
                height="240px"
                data={chartData2}
                options={{
                  title: "Calorie",
                  pieHole: 0.4,
                  titleTextStyle: {
                    fontSize: 16,
                  },
                }}
                graph_id="foodchart"
              />
            </ChartContainer>
          </ChartBox>
        </Slide>
      </Slider>
    </SliderContainer>
  );
};

export default Charts;
