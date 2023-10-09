import styled from "styled-components";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import { useNavigate } from "react-router-dom";
import { userSelector } from "recoil/userRecoil";
import { foodSelector } from "recoil/foodList";
import { useRecoilValue } from "recoil";

import Slider from "react-slick";
import { isDarkAtom } from "recoil/themeRecoil";

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

  li button:before {
    color: orange;
  }

  .slick-dots li.slick-active button:before {
    color: orange;
  }
`;

const settings = {
  dots: true,
  infinite: false,
};

const Not = styled.div`
  text-align: center;
  font-size: 17px;
  font-weight: bold;
  width: 300px;
  overflow-y: hidden;
`;

const ChartContainer = styled.div`
  height: 280px;
  border-radius: 30px;
  border: 1px solid rgba(135, 135, 135, 0.3);
  cursor: pointer;
  display: grid;
  place-items: center;
  margin: 0 auto;
`;

const Slide = styled.div`
  width: 360px;
  display: grid;
  place-items: center;
  transition: transform 0.3s ease;
  grid-column: span 1;
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  margin: 0 auto;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
`;

const Cal = styled.div`
  position: absolute;
  top: 50%;
  right: 15px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-top: 120px;
`;

const Charts = function () {
  const navigate = useNavigate();
  const userNo = useRecoilValue(userSelector);
  const selectedFood = useRecoilValue(foodSelector);
  const isDarkMode = useRecoilValue(isDarkAtom);

  const [sportsChartData, setSportsChartData] = useState([]);
  const [foodChartData, setFoodChartData] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);
  const [sum, setSum] = useState(0);

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

      const sportsChartData = [["", "운동 분"]];
      const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

      let temp = sum
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

        let totalExerciseTime = 0;

        // 해당 날짜에 대한 운동 기록 더하기
        allData.forEach((record) => {
          const recordDate = new Date(record.exerciseDate);
          const recordDateString = recordDate.toLocaleDateString(
            "ko-KR",
            options
          );

          if (recordDateString === formattedDate) {
            totalExerciseTime += record.exerciseTime;
          }
        });
        temp += totalExerciseTime
        sportsChartData.push([dateString, totalExerciseTime]);
      }
      setSum(temp)
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
        const itemDate = new Date(item.dietDate).toLocaleDateString();
        return (
          itemDate === todayDate &&
          selectedFood.some((selected) => selected.no === item.foodNo)
        );
      });

      // 탄수화물, 단백질, 지방을 저장할 변수를 초기화합니다.
      let carbohydrate = 0;
      let protein = 0;
      let fat = 0;
      let totalCalories = 0;

      // 필터링된 데이터를 순회하며 각 항목을 합산합니다.
      filtered.forEach((item) => {
        const foodItem = selectedFood.find((food) => food.no === item.foodNo);
        if (foodItem) {
          carbohydrate += foodItem.carbohydrates || 0;
          protein += foodItem.protein || 0;
          fat += foodItem.fat || 0;
          totalCalories += foodItem.calories || 0;
        }
      });

      // 차트 데이터 설정
      const updatedFoodChartData = [
        ["영양소", "그램"],
        ["탄수화물", carbohydrate],
        ["단백질", protein],
        ["지방", fat],
      ];
      setTotalCalories(totalCalories);

      setFoodChartData(updatedFoodChartData);
    } catch (error) {
      console.error(error);
    }
  };

  const chartOptions = {
    backgroundColor: isDarkMode ? "#292929" : "white",
    color: isDarkMode ? "#fff" : "#000",
    title: "오늘의 영양정보",
    pieHole: 0.4,
    legendTextStyle: {
      color: isDarkMode ? "#fff" : "#000",
    },
    titleTextStyle: {
      fontSize: 16,
      color: isDarkMode ? "#fff" : "#000",
    },
  };

  const chartOptions2 = {
    backgroundColor: isDarkMode ? "#292929" : "white",
    legend: { position: "none" },
    chart: {
      title: "운동 분",
    },
    hAxis: {
      slantedText: false,
      slantedTextAngle: 45,
      titleTextStyle: {
        fontSize: 10,
        color: isDarkMode ? "#fff" : "#000",
      },
      textStyle: {
        fontSize: 10,
        color: isDarkMode ? "#fff" : "#000",
      },
    },
    vAxis: {
      format: "decimal",
      title: "운동 분",
      titleTextStyle: {
        fontSize: 16,
        color: isDarkMode ? "#fff" : "#000",
      },
      textStyle: {
        fontSize: 12,
        color: isDarkMode ? "#fff" : "#000",
      },
    }
  }

  useEffect(() => {
    chartDatas();
    const interval = setInterval(() => {
      chartDatas(); // 일정 간격으로 데이터 갱신
    }, 24 * 60 * 60 * 1000); // 매일 한 번 갱신 (24시간 간격)

    return () => clearInterval(interval);
  }, [userNo, selectedFood]);

  return (
    <SliderContainer>
      <Slider {...settings}>
        <Slide>
          <ChartContainer
            onClick={() => {
              navigate("/analysis/sportschart");
            }}
          >
            {sum > 0 ?
              <Chart
                chartType="ColumnChart"
                width="350px"
                height="240px"
                data={sportsChartData}
                options={chartOptions2}
                graph_id="sportschart"
                rootProps={{ "data-testid": "1" }}
              />
              : <Not>7일동안 운동이 기록되지 않았습니다. 기록 탭에서 등록해주세요.</Not>}
          </ChartContainer>
        </Slide>
        <Slide>
          <ChartContainer
            onClick={() => {
              navigate("/analysis/foodchart");
            }}
          >
            {totalCalories ? (
              totalCalories > 1 ? (
                <Chart
                  chartType="PieChart"
                  width="350px"
                  height="240px"
                  data={foodChartData}
                  options={chartOptions}
                  graph_id="foodchart"
                />
              ) : (
                <Not>
                  오늘의 영양정보가 존재하지 않습니다. 기록 탭에서 등록해주세요.
                </Not>
              )
            ) : (
              <Not>
                오늘의 영양정보가 존재하지 않습니다. 기록 탭에서 등록해주세요.
              </Not>
            )}
            <Cal>칼로리: {totalCalories.toFixed(1)} kcal</Cal>
          </ChartContainer>
        </Slide>
      </Slider>
    </SliderContainer>
  );
};

export default Charts;
