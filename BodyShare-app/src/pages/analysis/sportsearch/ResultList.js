import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { selectedSportNoState } from 'recoil/sportList';
import { useRecoilState } from 'recoil';

const ResultList = styled.div`
  width: 100%;
  margin-top: 20px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  max-height: 500px; /* 스크롤 가능한 최대 높이 설정 */
  overflow-y: auto; 
`;

const ResultButton = styled.button`
  margin-top: 10px;
  background-color: ${(props) => (props.active ? props.hovercolor : 'white')};
  border: none;
  border-radius: 15px;
  padding-top: 30px;
  cursor: pointer;
  transition: background-color 0.2s; 

  &:hover {
    background-color: ${(props) => (props.active ? props.hovercolor : 'white')};
  }
`;

const RP = styled.p`
  font-size: 17px;
  text-align: left;
  margin-bottom: 10px;
`;

const Line = styled.div`
  width: 330px;
  display: inline-block;
  margin: auto;
  border: 1px solid rgba(135, 135, 135, 0.3);
`;

const ResultCate = function ({ sportsList, changeSelected }) {
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedSportNo, setSelectedSportNo] = useRecoilState(selectedSportNoState);

  const handleButtonClick = function(index, data){
    //이미 선택한 버튼이면 비활성화
    if (selectedButton === index) {
      selectedButton(null);
      changeSelected(null);
      setSelectedSportNo(null);
    }else {
      setSelectedButton(index);
      changeSelected(data);
      setSelectedSportNo(data.no);
    }
  };

  useEffect(() => {
    setSelectedButton(null);
  }, [sportsList])

  return (
    <>
      <ResultList>
        {sportsList.map((sports, index) => (
          <ResultButton
            key={index}
            active={index === selectedButton}
            onClick={() => {
              handleButtonClick(index, sports);
            }}
            hovercolor="rgba(85, 111, 255, 0.7)"
          >
            <RP>{sports.name}</RP>
            <Line></Line>
          </ResultButton>
        ))}
      </ResultList>
    </>
  )
};

export default ResultCate;
