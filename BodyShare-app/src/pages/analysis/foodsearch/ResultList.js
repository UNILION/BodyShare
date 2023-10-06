import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const ResultList = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  max-height: 500px; 
  overflow-y: auto; 
`;

const ResultButton = styled.button`
  margin-top: 10px;
  background-color: ${(props) => (props.active ? props.hovercolor : 'white')};
  border: none;
  border-radius: 15px;
  padding-top: 40px;
  cursor: pointer;
  transition: background-color 0.2s; 
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

const ResultCate = function ({ foodList, changeSelected, search }) {
  const [selectedButtonData, setSelectedButtonData] = useState(null);

  const handleButtonClick = function(data){
    if (selectedButtonData === data) {
      setSelectedButtonData(null);
      changeSelected(null);
    } else {
      setSelectedButtonData(data);
      changeSelected(data);
    }
  };

  useEffect(() => {
    setSelectedButtonData(null);
  }, [search]);
  
  return (
    <>
      <ResultList>
        {foodList.map((food, index) => (
          <ResultButton
            key={index}
            active={selectedButtonData === food}
            onClick={() => {
              handleButtonClick(food);
            }}
            hovercolor="rgba(85, 111, 255, 0.7)"
          >
            <RP>{food.name}</RP>
            <Line></Line>
          </ResultButton>
        ))}
      </ResultList>
    </>
  );
};

export default ResultCate;
