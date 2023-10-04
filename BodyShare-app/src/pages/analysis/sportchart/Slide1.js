import React, { useState, useEffect  } from "react";
import styled from "styled-components";
import { Chart } from "react-google-charts";
import { userSelector } from "recoil/userRecoil";
import { useRecoilValue } from "recoil";
import axios from "axios";

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
  width: 330px;
  height: 476px;
  background-color: white;
  border-radius: 15px;
  /* border: 1px solid rgba(135, 135, 135, 0.3); */
  cursor: pointer;
`;

const instance = axios.create({
  baseURL: "http://localhost:33000/api",
  withCredentials: true,
});
const Slide1 = function (){
  const userNo = useRecoilValue(userSelector);
  const [sportsChartData, setSportsChartData] = useState([]);

  const parseDateString = (dateString) => {
    const dateParts = dateString.split(".");
    const year = parseInt(dateParts[0],10);
    const month = parseInt(dateParts[1], 10) -1 // 월은 0부터 시작하니까 1 뺴줌
    const day = parseInt(dateParts[2],10);
    return new Date(year, month, day);
  }

  const chartDatas = async function () {
    try{
      const response = await instance.get(`/record/sports/${userNo}`);
      const allData = response.data;

      const currentDate = new Date();// 현재
      const currentWeekStartDate = new Date(currentDate); // 시작
      currentWeekStartDate.setDate(                         
        currentDate.getDate() - currentDate.getDay() //현재 날짜 - 현재요일 = 일
      );
      const currentWeekEndDate = new Date(currentWeekStartDate); // 종료
      currentWeekEndDate.setDate(currentWeekStartDate.getDate() + 6); // 토

      //현재 주 해당 운동기록만 저장
      const currentWeekDate = allData.filter((item) => {
        const itemDate = parseDateString(item.exerciseDate);
        return (
          itemDate >= currentWeekStartDate && itemDate <= currentWeekEndDate // 운동한 날짜가 현재 주에 포함하는지 검사
        );
        
      });

      const sportsChartData = [["", "운동 분"]];
      const daysOfWeek = ["일","월","화","수","목","금","토"];

      for (let i=0; i<7; i++){ // sportsChartData에 추가
        const day = daysOfWeek[i];
        const date = new Date(currentWeekStartDate);
        date.setDate(currentWeekStartDate.getDate() + i);
        const options ={ //2자리표현
          month: "2-digit",
          day: "2-digit",
        };
        const formattedDate = date.toLocaleDateString("ko-KR", options); // 월/일 (요일)
        const dateString = `${formattedDate}\n(${day})`;

        let totalExerciseTime = 0;
  
        // 해당 날짜에 대한 운동 기록 더하기
        allData.forEach((record) => {
          const recordDate = new Date(record.exerciseDate);
          const recordDateString = recordDate.toLocaleDateString("ko-KR", options);
  
          if (recordDateString === formattedDate) {
            totalExerciseTime += record.exerciseTime;
          }
        });


        sportsChartData.push([dateString, totalExerciseTime]); // 있으면 운동시간 가져오기
      }

      

      setSportsChartData(sportsChartData);
    }catch(error){
      console.log(error);
    }
  }
  useEffect(() => {
    chartDatas();
    const interval = setInterval(() => {
      chartDatas(); // 일정 간격으로 데이터 갱신
    }, 24 * 60 * 60 * 1000); // 매일 한 번 갱신 (24시간 간격)

    return () => clearInterval(interval);
  }, [userNo]);

  const chartOptions1 = {
    title: "일주일 운동 시간",
    width: 320,
    height: 430,
    legend: { position: "none" },
  };

  return(
    <Slide>
      <ChartContainer>
      <Chart
          chartType="ColumnChart"
          data={sportsChartData}
          options={chartOptions1}
          graph_id="columnchart_values"
          rootProps={{ "data-testid": "1" }}
        />
      </ChartContainer>
  </Slide>
  );
};

export default Slide1;