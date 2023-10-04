import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { userSelector } from "recoil/userRecoil";

const instance = axios.create({
  baseURL: "http://localhost:33000/api",
  withCredentials: true,
}); 

const Slide = styled.div`
  width: 360px;
  display: grid;
  place-items: center;
  transition: transform 0.3s ease;
  grid-column: span 1;
  border-radius: 30px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.25);
  margin: 0 auto;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
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
const Slide1 = function () {
  const userNo = useRecoilValue(userSelector);
  const [foodChartData, setFoodChartData] = useState([]);
  console.log(foodChartData)


  const chartDatas1 = async function () {
    try {
      // 서버에서 음식 데이터 
      const responseFood = await instance.get(`/record/food/${userNo}`);

      const allDataFood = responseFood.data;
      //console.log(allDataFood);

      const todayDate = new Date().toLocaleDateString();

      const filteredData = Array.isArray(allDataFood) ? allDataFood : [];
      const filtered = filteredData.filter((item) => {
        const itemDate = new Date(item.dietDate).toLocaleDateString();
        return (
          itemDate === todayDate
        );
        
      });
    
      let carbohydrate = 0;
      let protein = 0;
      let fat = 0;
      
      filtered.forEach((item) => {
          carbohydrate += item.carbohydrates || 0;
          protein += item.protein || 0;
          fat += item.fat || 0;
      });
      
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
 
  useEffect(() => {
    chartDatas1();
  }, []);

  return(
    <Slide>
      <ChartContainer>
      <Chart
          chartType="PieChart"
          width={"340px"}
          height={"450px"}
          data={foodChartData}
          options={{
            title: "Calorie",
            pieHole: 0.2,
          }}
          graph_id="donutchart"
        />
      </ChartContainer>
  </Slide>
  );
}
export default Slide1