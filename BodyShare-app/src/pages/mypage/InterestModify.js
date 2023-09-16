import React, { useState } from 'react';
import styled from "styled-components";
import search from "../../assets/Img/search.png";
import backButton from "../../assets/Img/back.png";
import plus from "../../assets/Img/check.png"
import Button from "../../components/commons/Button"
import { useNavigate } from "react-router-dom";
import Tag from "../../components/commons/Tag";

const Container = styled.div`
  padding: 10px 20px;
`;

const PreviousButton = styled.button`
  margin-top: 3px;
  grid-row: 1;
  width: 20px;
  height: 20px;
  background-image: url(${backButton});
  background-size: cover;
  border-radius: 20px;
  border: none;
  cursor: pointer;
`;

const SearchInput = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 260px;
  height: 45px;
  border: 1px solid rgba(135, 135, 135, 0.3);
  border-radius: 15px;
  text-align: center;
  padding: 0 20px;
`;

const Search = styled.img`
  margin: auto;
`;

const CategoryList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

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

const InterestModify = function () {
  const navigate = useNavigate();
  const [buttonStates, setButtonStates] = useState({
    button1: false,
    button2: false,
    button3: false,
    button4: false
  });

  const handleButtonClick = (buttonName) => {
    setButtonStates((prevState) => ({
      ...prevState,
      [buttonName]: !prevState[buttonName],
    }));
  };

  return (
    <Container>
      <PreviousButton onClick={() => navigate("/mypage/modify")} />
      <SearchInput>
        <Search src={search} />
        <Input type="text" placeholder="찾으시는 운동을 검색해주세요" />
      </SearchInput>
      <CategoryList>
        <Tag tagName="전체" width="80px" height="36px" br="13px" />
        <Tag tagName="근력" width="80px" height="36px" br="13px" />
        <Tag tagName="유산소" width="80px" height="36px" br="13px" />
        <Tag tagName="기타" width="80px" height="36px" br="13px" />
      </CategoryList>
      <ResultList>
        <ResultButton 
        active={buttonStates.button1} 
        onClick={() => handleButtonClick('button1')}
        hoverColor="rgba(85, 111, 255, 0.7)"
        >
          <RP>축구</RP>
          <Line></Line>
        </ResultButton>
        <ResultButton
          active={buttonStates.button2}
          onClick={() => handleButtonClick('button2')}
          hoverColor="rgba(85, 111, 255, 0.7)"
        >
          <RP>수영</RP>
          <Line></Line>
        </ResultButton>
        <ResultButton
          active={buttonStates.button3}
          onClick={() => handleButtonClick('button3')}
          hoverColor="rgba(85, 111, 255, 0.7)"
        >
          <RP>달리기</RP>
          <Line></Line>
        </ResultButton>
        <ResultButton
          active={buttonStates.button4}
          onClick={() => handleButtonClick('button4')}
          hoverColor="rgba(85, 111, 255, 0.7)"
        >
          <RP>필라테스</RP>
          <Line></Line>
        </ResultButton>
      </ResultList>

      <Button
        name="선택완료"
        img={plus}
        width="200px"
        display="block"
        ml="auto"
        mt="15px"
        onClick={() => navigate("/mypage/modify")}
      />
    </Container>
  );
};

export default InterestModify;
