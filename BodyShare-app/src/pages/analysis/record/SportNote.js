import React, { useState } from 'react';
import styled from "styled-components";
import seemore from "../../../assets/Img/seemore.png";
import { useRecoilValue } from 'recoil';
import { sportTimeState } from "recoil/sportTime";
import { useSPORTState } from 'recoil/sportList'; // 필요한 Recoil 상태를 불러옵니다.

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

const Sport = function( sportsList ) {
  // 불러온 Recoil 상태를 사용할 수 있습니다.
  const [rp, setRP] = useSPORTState();
  const sportTime = useRecoilValue(sportTimeState);

  const [inputValues, setInputValues] = useState({
    hours: '',
    minutes: '',
    seconds: '',
  });

  const handleInputChange = (fieldName, value) => {
    setInputValues({
      ...inputValues,
      [fieldName]: value,
    });
  };

  const [seeMoreVisible, setSeeMoreVisible] = useState(false);

  const toggleSeeMore = () => {
    setSeeMoreVisible(!seeMoreVisible);
  };

    //삭제하기 버튼을 누르면
    const handleDelete = () => {
      // Delete 버튼을 누를 때 rp 상태를 디폴트 값으로 변경해준다.
      setRP("삭제"); 
    }
  
  return(
    <SportNoteContainer>
    <SportNote>{rp}</SportNote>
    <SportTime>운동 시간: {sportTime.hours}:{sportTime.minutes}:{sportTime.seconds}</SportTime>
    <SeeMore onClick={toggleSeeMore}>
      <SmIng src={seemore}></SmIng>
    </SeeMore>
    <SeeMoreDetail isVisible={seeMoreVisible}>
      <Delete onClick={handleDelete}>삭제하기</Delete>
    </SeeMoreDetail>
  </SportNoteContainer>
  );
};

export default Sport;
