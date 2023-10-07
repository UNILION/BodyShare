import React, { useState, useEffect, useRef } from 'react';
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
  position: relative;
`;

const SmIng = styled.img`
  width: 20px;
  height: 26px;
`;

const Delete = styled.button`
  position: absolute;
  top: -30px;
  left: 150px;
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
  const [isExpanded, setIsExpanded] = useState(false); 
  const seeMoreDetailRef = useRef(null);

  let result = [];
  result = allSports.filter(item => item.no == props.record.sportsNo);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClickOutside = (event) => {
    if (seeMoreDetailRef.current && !seeMoreDetailRef.current.contains(event.target)) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded]);

  return (
    <SportNoteContainer>
      <SportNote>{result[0].name}</SportNote>
      <SportTime>운동 시간: {props.record.exerciseTime}분</SportTime>
      <SeeMore onClick={toggleExpansion}>
        <SmIng src={seemore}></SmIng>
      </SeeMore>
      {isExpanded && (
        <SeeMoreDetail ref={seeMoreDetailRef}>
          <Delete onClick={() => props.onDelete(props.record.planNo)}>
            삭제하기
          </Delete>
        </SeeMoreDetail>
      )}
    </SportNoteContainer>
  );
};

export default SportsListItem;
