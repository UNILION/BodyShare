import styled from "styled-components";
import searchIcon from "assets/Img/search.png";
import { useNavigate } from "react-router-dom";
import Tag from "components/commons/Tag";
import { useRef, useState, useEffect } from "react";
import SearchList from "pages/community/commu/commuCategory/SearchList";
import { useRecoilState, useRecoilValue } from 'recoil';
import { sportsSelector } from "recoil/sportList";
import Selected from "pages/community/commu/commuCategory/Selected";
import Button from "components/commons/Button";
import plus from "assets/Img/check.png";
import axios from "axios";
import { categoryAtom } from "recoil/commuRecoil";

const instance = axios.create({
  baseURL: "http://localhost:33000/api",
  withCredentials: true
});

const SearchInput = styled.div`
  grid-row: 3;
  display: grid;
  grid-template-columns: 0.5fr 3fr;
  margin-bottom: 10px;
`;

const SearchImg = styled.img`
  margin: auto; 

  &:hover{
    cursor: pointer;
  }
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

const Donediv = styled.div`
  grid-row: 7;
  width: 390px;
  height: 60px;
  margin: 20px auto auto auto;
  text-align: center;
`;


const Search = function ({categoryList}) {
  const navigate = useNavigate();
  
  const allSports = useRecoilValue(sportsSelector);

  const [list, setList] = useState(allSports);

  const [buttonState, setButtonState] = useState({
    button1: true,
    button2: false,
    button3: false,
    button4: false
  });

  // 카테고리 선택
  const handleButtonClick = (buttonName) => {
    setButtonState((prevState) => ({
      ...Object.fromEntries(Object.entries(prevState).map(([key, value]) => [key, key === buttonName ? !value : false]))
    }));

    let tempName;
    if (buttonName == "button1") {
      tempName = "";
    } else if (buttonName == "button2") {
      tempName = "근력";
    } else if (buttonName == "button3") {
      tempName = "유산소";
    } else if (buttonName == "button4") {
      tempName = "기타";
    }

    if (tempName != "") {
      const tempList = [...allSports].filter(item => item.category == tempName);
      setList(tempList);
    } else {
      setList([...allSports]);
    }
  };

  // 텍스트 검색
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      // 엔터 키가 눌렸을 때 수행할 동작을 여기에 추가합니다.
      searchText();
    }
  };

  const keyword = useRef("");

  const searchText = function () {
    let tempName;
    if (buttonState.button1 == true) {
      tempName = "";
    } else if (buttonState.button2 == true) {
      tempName = "근력";
    } else if (buttonState.button3 == true) {
      tempName = "유산소";
    } else if (buttonState.button4 == true) {
      tempName = "기타";
    }

    const regExp = new RegExp(keyword.current);

    if (tempName != "") {
      const tempList = [...allSports].filter(item => item.category == tempName);
      const newList = tempList.filter(item => regExp.test(item.name));
      setList(newList);
    } else {
      const tempAll = [...allSports];
      const newList = tempAll.filter(item => regExp.test(item.name));
      setList(newList);
    }
  };

  // 선택된 항목 리스트
  const [selectedList, setSelectedList] = useState(categoryList);
  
  const changeSelected = function (list) {
    setSelectedList(list);
  };

  const [categoryItem, setCategoryItem] = useRecoilState(categoryAtom);

  // complete 함수에서 커뮤니티 넘버를 사용합니다.
  const complete = function () {
    setCategoryItem(selectedList);
    navigate(`/community/challAdd`);
  };

  return (
    <>
      <SearchInput>
        <SearchImg src={searchIcon} onClick={searchText} />
        <Input type="text" placeholder="찾으시는 운동을 검색해주세요" onKeyPress={handleKeyPress} onChange={(e) => { keyword.current = (e.target.value) }} />
      </SearchInput>

      <SportCategory>
        <Tag tagtitle="전체" width="80px" height="36px" br="13px"
          onClick={() => handleButtonClick('button1')} bc={buttonState.button1 ? "rgba(85, 111, 255, 0.7)" : "rgba(85,111,255, 0.3)"} hovercolor="rgba(85, 111, 255, 0.7)" />
        <Tag tagtitle="근력" width="80px" height="36px" br="13px"
          onClick={() => handleButtonClick('button2')} bc={buttonState.button2 ? "rgba(85, 111, 255, 0.7)" : "rgba(85,111,255, 0.3)"} hovercolor="rgba(85, 111, 255, 0.7)" />
        <Tag tagtitle="유산소" width="80px" height="36px" br="13px"
          onClick={() => handleButtonClick('button3')} bc={buttonState.button3 ? "rgba(85, 111, 255, 0.7)" : "rgba(85,111,255, 0.3)"} hovercolor="rgba(85, 111, 255, 0.7)" />
        <Tag tagtitle="기타" width="80px" height="36px" br="13px"
          onClick={() => handleButtonClick('button4')} bc={buttonState.button4 ? "rgba(85, 111, 255, 0.7)" : "rgba(85,111,255, 0.3)"} hovercolor="rgba(85, 111, 255, 0.7)" />
      </SportCategory>

      {/* 조회된 목록과 선택된 관심사 목록 */}
      <SearchList itemList={list} selectedList={selectedList} changeSelected={changeSelected} />

      <Selected selectedList={selectedList} changeSelected={changeSelected} ></Selected>
      <Donediv>
        <Button
          name="선택완료"
          img={plus}
          width="200px"
          mt="3px"
          ml="157px"
          onClick={complete}
        />
      </Donediv>
    </>
  );
};

export default Search;