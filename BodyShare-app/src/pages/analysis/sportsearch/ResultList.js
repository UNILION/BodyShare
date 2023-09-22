import React, { useState } from 'react';
import styled from "styled-components";
//import { useSPORTState } from 'recoil/sportList'; // RP Recoil 상태 불러오기
import axios from 'axios'; // Axios를 불러옵니다.

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

const ResultCate = function ({no, name}) {

  //const [rp, setRP] = useSPORTState();
  
  const [buttonStates, setButtonStates] = useState({
    button1: false,
    button2: false,
    button3: false,
    button4: false
  });

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
          onClick={() => handleButtonClick('button1', '축구')}
          hoverColor="rgba(85, 111, 255, 0.7)"
        >
          {/* {rp === '축구' && <RP>축구</RP>} */}
          <Line></Line>
        </ResultButton>
        {/* <ResultButton
          active={buttonStates.button2}
          onClick={() => handleButtonClick('button2', name)}
          hoverColor="rgba(85, 111, 255, 0.7)"
        >
          {rp === name && <RP>{name}</RP>}
          <Line></Line>
        </ResultButton>
        <ResultButton
          active={buttonStates.button3}
          onClick={() => handleButtonClick('button3', name)}
          hoverColor="rgba(85, 111, 255, 0.7)"
        >
          {rp === name && <RP>{name}</RP>}
          <Line></Line>
        </ResultButton>
        <ResultButton
          active={buttonStates.button4}
          onClick={() => handleButtonClick('button4', name)}
          hoverColor="rgba(85, 111, 255, 0.7)"
        >
          {rp === name && <RP>{name}</RP>}
          <Line></Line>
        </ResultButton> */}
      </ResultList>
    </>
  )
};

export default ResultCate;