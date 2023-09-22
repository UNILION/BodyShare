import React, { useState, useEffect  } from 'react';
import styled from "styled-components";
//import { useRPState } from 'recoil/foodList'; // RP Recoil 상태 불러오기
import axios from 'axios'; 

const instance = axios.create({
  baseURL: "http://localhost:33000/api",
  withCredentials: true
});

const ResultList = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
`;

const ResultButton = styled.button`
  margin-top: 10px;
  background-color: ${(props) => (props.active ? props.hoverColor : 'white')};
  border: none;
  border-radius: 15px;
  padding-top: 40px;
  cursor: pointer;
  transition: background-color 0.2s; 

  &:hover {
    background-color: ${(props) => (props.active ? props.hoverColor : 'white')};
  }
`;

const RP = styled.p`
  font-size: 17px;
  text-align: left;
  margin-bottom: 10px;
`;

const Line = styled.div`
  width: 340px;
  border: 1px solid rgba(135, 135, 135, 0.3);
`;

const ResultCate = function ({ no, name }) {

  // RP 상태를 읽고 업데이트할 Recoil 사용
  //const [rp, setRP] = useRPState();
  
  const [buttonStates, setButtonStates] = useState({
    button1: false,
    button2: false,
    button3: false,
    button4: false,
    button5: false,
  });

  useEffect(() => {
    // 서버에서 음식 데이터를 가져오는 요청
    const fetchFoodData = async () => {
      try {
        const response = await instance.get(`/add/food?id=${no}`);
        const data = response.data;
        // 응답 데이터를 적절히 처리하고 필요한 상태 업데이트를 수행
        console.log("성공", data);
      } catch (error) {
        // 요청이 실패하면 에러 처리
        console.error('Error fetching data:', error);
      }
    };

    fetchFoodData();
  }, [no]);

  const handleButtonClick = (buttonName, rpValue) => {
    setButtonStates((prevState) => ({
      ...prevState,
      [buttonName]: !prevState[buttonName],
    }));

    // RP 값을 업데이트합니다.
    //setRP(rpValue);
  };



  return(
    <>
      <ResultList>
      <ResultButton
          active={buttonStates.button1}
          onClick={() => handleButtonClick('button1', '닭가슴살')}
          hoverColor="rgba(85, 111, 255, 0.7)"
        >
          {/* {rp === '닭가슴살' && <RP>닭가슴살</RP>} */}
          <Line></Line>
        </ResultButton>
        {/* <ResultButton
          active={buttonStates.button2}
          onClick={() => handleButtonClick('button2', '닭가슴살')}
          hoverColor="rgba(85, 111, 255, 0.7)"
        >
          {rp === '닭가슴살' && <RP>닭가슴살</RP>}
          <Line></Line>
        </ResultButton> */}
        {/* <ResultButton
          active={buttonStates.button3}
          onClick={() => handleButtonClick('button3')}
          hoverColor="rgba(85, 111, 255, 0.7)"
        >
          <RP>바나나</RP>
          <Line></Line>
        </ResultButton>
        <ResultButton
          active={buttonStates.button4}
          onClick={() => handleButtonClick('button4')}
          hoverColor="rgba(85, 111, 255, 0.7)"
        >
          <RP>계란</RP>
          <Line></Line>
        </ResultButton>
        <ResultButton
          active={buttonStates.button5}
          onClick={() => handleButtonClick('button5')}
          hoverColor="rgba(85, 111, 255, 0.7)"
        >
          <RP>김밥</RP>
          <Line></Line>
        </ResultButton> */}
      </ResultList>
    </>
  )
};

export default ResultCate