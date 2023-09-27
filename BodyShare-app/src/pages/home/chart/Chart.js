import styled from "styled-components";
import { Chart } from "react-google-charts";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { userSelector } from "recoil/userRecoil";
import { foodSelector } from "recoil/foodList";
import { useRecoilValue } from "recoil";
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
  infinite: false,
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
  const food = useRecoilValue(foodSelector);

  const [sportsChartData, setSportsChartData] = useState([]);
  const [foodChartData, setFoodChartData] = useState([]);
  

  const chartDatas = async function () {
    try {
      // 서버에서 모든 데이터 가져오기
      const response = await instance.get(`/record/sports/${userNo}`);
      const allData = response.data;

      // 현재 주의 시작 및 종료 날짜 계산
      const currentDate = new Date();

      const currentWeekStartDate = new Date(currentDate);
      currentWeekStartDate.setDate(
        currentDate.getDate() - currentDate.getDay()
      );

      const currentWeekEndDate = new Date(currentWeekStartDate);
      currentWeekEndDate.setDate(currentWeekStartDate.getDate() + 6);

      // 현재 주의 데이터만 필터링
      const currentWeekDate = allData.filter((item) => {
        const itemDate = new Date(item.date);
        return (
          itemDate >= currentWeekStartDate && itemDate <= currentWeekEndDate
        );
      });

      const sportsChartData = [["", "운동 분"]];
      const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

      for (let i = 0; i < 7; i++) {
        const day = daysOfWeek[i];
        const date = new Date(currentWeekStartDate);
        date.setDate(currentWeekStartDate.getDate() + i);
        const options = {
          month: "2-digit",
          day: "2-digit",
        };
        const formattedDate = date.toLocaleDateString("ko-KR", options);
        const dateString = `${formattedDate}\n(${day})`;

        const exerciseTimeRecord = currentWeekDate.find((record) => {
          const recordDate = new Date(record.date);
          return recordDate.getDay() === i;
        });

        const exerciseTime = exerciseTimeRecord
          ? exerciseTimeRecord.exerciseTime
          : 0;
        sportsChartData.push([dateString, exerciseTime]);
      }

      // 차트 데이터 설정
      setSportsChartData(sportsChartData);
    } catch (error) {
      console.error(error);
    }

    try {
      // 서버에서 음식 데이터 가져오기
      const responseFood = await instance.get(`/record/food/${userNo}`);
      const allDataFood = responseFood.data;

      // 오늘 날짜를 가져옵니다.
      const todayDate = new Date().toLocaleDateString();

      // 오늘 날짜와 맞는 데이터만 필터링합니다.
      const filteredData = Array.isArray(allDataFood) ? allDataFood : [];
      const filtered = filteredData.filter((item) => {
        const itemDate = new Date(item.date).toLocaleDateString();
        return itemDate === todayDate;
      });

      // 탄수화물, 단백질, 지방을 저장할 변수를 초기화합니다.
      let carbohydrate = 0;
      let protein = 0;
      let fat = 0;

      // 필터링된 데이터를 순회하며 각 항목을 합산합니다.
      filtered.forEach((item) => {
        carbohydrate += item.carbohydrate || 0;
        protein += item.protein || 0;
        fat += item.fat || 0;
      });

      // 차트 데이터 설정
      const updatedFoodChartData = [
        ["영양소", "그램"],
        ["탄수화물", carbohydrate],
        ["단백질", protein],
        ["지방", fat],
      ];

      setFoodChartData(updatedFoodChartData);
    } catch (error) {
      console.error(error);
    }
  };

  const isToday = function (dateString) {
    const today = new Date().toLocaleDateString();
    const dateObject = new Date(dateString);
    dateObject.setHours(dateObject.getHours());

    return dateObject.toLocaleDateString() === today;
  };

  useEffect(() => {
    chartDatas();
    const interval = setInterval(() => {
      chartDatas(); // 일정 간격으로 데이터 갱신
    }, 24 * 60 * 60 * 1000); // 매일 한 번 갱신 (24시간 간격)

    return () => clearInterval(interval);
  }, []);

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
                data={sportsChartData}
                options={{
                  legend: { position: "none" },
                  chart: {
                    title: "운동 분",
                  },
                  hAxis: {
                    title: "날짜",
                  },
                  // 텍스트 렌더링 함수 사용
                  vAxis: {
                    format: "decimal",
                    title: "운동 분",
                    textStyle: {
                      fontSize: 12,
                    },
                  },
                }}
                graph_id="sportschart"
                rootProps={{ "data-testid": "1" }}
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
                data={foodChartData}
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
