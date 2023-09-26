import React, { useState } from 'react';
import styled from "styled-components";

const ResultList = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  max-height: 500px; /* 스크롤 가능한 최대 높이 설정 */
  overflow-y: auto; 
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

const ResultCate = function ({ sportsList }) {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (index, sportsName) => {
    setSelectedButton(index);
  };

  return (
    <>
      <ResultList>
        {sportsList.map((sports, index) => (
          <ResultButton
            key={index}
            active={index === selectedButton}
            onClick={() => handleButtonClick(index)}
            hoverColor="rgba(85, 111, 255, 0.7)"
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
