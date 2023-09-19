import styled from "styled-components";
import searchIcon from "assets/Img/search.png";
import xbutton from "assets/Img/xbutton.png";
import { useNavigate } from "react-router-dom";
import Tag from "components/commons/Tag";
import { useState } from "react";


const SearchInput = styled.div`
  grid-row: 3;
  display: grid;
  grid-template-columns: 0.5fr 3fr;
  margin-bottom: 10px;
`;

const SearchImg = styled.img`
  margin: auto;
`;

const Input = styled.input`
  width: 260px;
  height: 45px;
  border: 1px solid rgba(135, 135, 135, 0.3);
  border-radius: 15px;
  text-align: center;
  padding: 0 20px;
`;

const SportCategory = styled.div`
  grid-row: 4;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-left: 10px;
`;

const SportSearchResult = styled.div`
  grid-row: 5;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  margin-bottom: 20px;
  justify-content: center;
`;

const ResultButton = styled.button`
  width: 360px;
  margin-top: 10px;
  background-color: ${(props) => (props.active ? props.hoverColor : 'white')};
  border: none;
  border-radius: 15px;
  padding-top: 25px;
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

const SelectedDiv = styled.div`
  grid-row: 6;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 300px;
  height: 25px;
  margin: 0 auto;
`;

const Select = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

`;

const SelectCircle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 23px;
  border-radius: 23px;
  background-color: rgba(85, 111, 255, 0.3);
`;

const SelectP = styled.p`
  font-size: 11px;
  font-weight: bold;
  color: #656565;
`;
const DeleteButtonDiv = styled.div`
  width: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Xbutton = styled.img`
  width: 25px;
  height: 25px;
  background-color: rgba(85, 111, 255, 0.3);
  border-radius: 15px;
  margin-left: 3px;
  cursor: pointer;
`;

const Donediv = styled.div`
  grid-row: 7;
  width: 390px;
  height: 60px;
  margin: 20px auto auto auto;
  text-align: center;
`;

const Done = styled.button`
  background-color: #556fff;
  width: 321px;
  height: 45px;
  border-radius: 15px;
  color: white;
  font-size: 13px;
  border: 1px solid rgba(135, 135, 135, 0.3);
  
  &:hover {
    cursor: pointer;
  }
`;

const Search = function () {
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
    <>
      <SearchInput>
        <SearchImg src={searchIcon} />
        <Input type="text" placeholder="찾으시는 운동을 검색해주세요" />
      </SearchInput>

      <SportCategory>
        <Tag tagName="전체" width="80px" height="36px" br="13px" />
        <Tag tagName="근력" width="80px" height="36px" br="13px" />
        <Tag tagName="유산소" width="80px" height="36px" br="13px" />
        <Tag tagName="기타" width="80px" height="36px" br="13px" />
      </SportCategory>

      <SportSearchResult>
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
      </SportSearchResult>

      <SelectedDiv>
        <Select>
          <SelectCircle>
            <SelectP>요가</SelectP>
          </SelectCircle>
          <DeleteButtonDiv>
            <Xbutton src={xbutton}></Xbutton>
          </DeleteButtonDiv>
        </Select>
        <Select>
          <SelectCircle>
            <SelectP>수영</SelectP>
          </SelectCircle>
          <DeleteButtonDiv>
            <Xbutton src={xbutton}></Xbutton>
          </DeleteButtonDiv>
        </Select>
        <Select>
          <SelectCircle>
            <SelectP>달리기</SelectP>
          </SelectCircle>
          <DeleteButtonDiv>
            <Xbutton src={xbutton}></Xbutton>
          </DeleteButtonDiv>
        </Select>
      </SelectedDiv>

      <Donediv>
        <Done onClick={() => navigate("/signup")}>선택완료</Done>
      </Donediv>
    </>
  );
};

export default Search;