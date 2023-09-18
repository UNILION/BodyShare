import styled from "styled-components";
import React, { useState } from 'react';
import seemore from "../../../assets/Img/seemore.png";


const FoodNoteContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  padding: 20px;
`;

const FoodSeeMore = styled.button`
  width: 20px;
  height: 26px;
  border: none;
  background-color: white;
  cursor: pointer;
  padding: 0;
`;

const FoodSeeMoreDetail = styled.div`
  width: 158px;
  position: absolute; 
  top: 130px;
  left: 200px;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;

const SmIng = styled.img`
  width: 20px;
  height: 26px;
`;

const FoodNote = styled.p`
  font-size: 14px;
`;

const Delete = styled.button`
  width: 158px;
  height: 40px;
  border-radius: 15px;
  border: 1px solid #B3B3B3;
  background-color: white;

  &:hover {
    cursor: pointer;
    background-color: #556FFF;
  }
`;

const Food = function() {
  const [seeMoreVisible, setSeeMoreVisible] = useState(false);

  const toggleSeeMore = () => {
    setSeeMoreVisible(!seeMoreVisible);
  }
  
  return(
    <FoodNoteContainer>
      <FoodNote>닭죽</FoodNote>
      <FoodSeeMore onClick={toggleSeeMore}>
        <SmIng src={seemore}></SmIng>
      </FoodSeeMore>
      <FoodSeeMoreDetail isVisible={seeMoreVisible}>
        <Delete>삭제하기</Delete>
      </FoodSeeMoreDetail>
    </FoodNoteContainer>
  );
};

export default Food;