import React, { useState } from 'react';
import styled from "styled-components";
import seemore from "../../../assets/Img/seemore.png";

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

const Sport = function() {
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
  
  return(
    <SportNoteContainer>
    <SportNote>유산소 달리기</SportNote>
    <SportTime inputValues={inputValues} onInputChange={handleInputChange} />
    <SeeMore onClick={toggleSeeMore}>
      <SmIng src={seemore}></SmIng>
    </SeeMore>
    <SeeMoreDetail isVisible={seeMoreVisible}>
      <Delete>삭제하기</Delete>
    </SeeMoreDetail>
  </SportNoteContainer>
  );
};

export default Sport;
