import styled from "styled-components";
import React, { useState } from 'react';
import seemore from "../../../assets/Img/seemore.png";
import { useRecoilValue } from 'recoil';
import { useRecoilState } from 'recoil';
import { foodSelector } from "recoil/foodList";
import { foodAtom } from 'recoil/foodList';

const FoodNoteContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  padding: 20px;
`;

const SeeMore = styled.button`
  width: 20px;
  height: 26px;
  border: none;
  background-color: white;
  cursor: pointer;
  padding: 0;
`;

const SeeMoreDetail = styled.div`
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

const FoodListItem = function (props) {

  const allFoods = useRecoilValue(foodSelector);

  let result = [];
  result = allFoods.filter(item => item.no === props.record.foodNo);

  const [seeMoreVisible, setSeeMoreVisible] = useState(false);

  const toggleSeeMore = () => {
    setSeeMoreVisible(!seeMoreVisible);
  }


  return (
    <FoodNoteContainer>
      <FoodNote>{result[0].name}</FoodNote>
      <SeeMore onClick={toggleSeeMore}>
        <SmIng src={seemore}></SmIng>
      </SeeMore>
      <SeeMoreDetail isVisible={seeMoreVisible}>
        <Delete onClick={() => props.onDelete(props.record.planNo)}>
          삭제하기
        </Delete>
      </SeeMoreDetail>
    </FoodNoteContainer>
  );
};

export default FoodListItem;
