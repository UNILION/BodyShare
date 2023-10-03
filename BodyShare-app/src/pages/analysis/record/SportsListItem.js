import React, { useState } from 'react';
import styled from "styled-components";
import seemore from "assets/Img/seemore.png";
import { useRecoilValue } from 'recoil';
import { sportsSelector } from "recoil/sportList";

const SportNoteContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  padding: 20px;
`;

const SportNote = styled.p`
  font-size: 14px;
`;

const SportTime = styled.p`
  font-size: 14px;
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
  top: 70px;
  left: 200px;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;

const SmIng = styled.img`
  width: 20px;
  height: 26px;
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

const SportsListItem = function (props) {
  const allSports = useRecoilValue(sportsSelector);
  
  let result = []; 
  result = allSports.filter(item => item.no == props.record.sportsNo);

  const [seeMoreVisible, setSeeMoreVisible] = useState(false);

  const toggleSeeMore = () => {
    setSeeMoreVisible(!seeMoreVisible);
  };

  return (
    <SportNoteContainer>
      <SportNote>{result[0].name}</SportNote>
      <SportTime>운동 시간: {props.record.exerciseTime}분</SportTime>
      <SeeMore onClick={toggleSeeMore}>
        <SmIng src={seemore}></SmIng>
      </SeeMore>
      <SeeMoreDetail isVisible={seeMoreVisible}>
      <Delete onClick={() => props.onDelete(props.record.planNo)}>
        삭제하기
      </Delete>
      </SeeMoreDetail>

    </SportNoteContainer>
  );

};

export default SportsListItem;