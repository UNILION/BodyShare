import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import searchImg from 'assets/Img/search.png';
import previous from 'assets/Img/Previous.png';
import "assets/Img/buttonsearch.png";
import Button from "components/commons/Button";
import plus from "assets/Img/buttonplus.png";
import ResultList from "pages/analysis/foodsearch/ResultList";
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { foodAtom } from "recoil/foodList";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:33000/api",
  withCredentials: true
});

const Container = styled.div`
  width: 95%;
  padding: 10px 20px;
`;

const PreviousButton = styled.button`
  margin-top: 3px;
  grid-row: 1;
  width: 20px;
  height: 20px;
  background-image: url(${previous});
  background-size: cover;
  border-radius: 20px;
  border: none;
  cursor: pointer;
`;

const SearchInput = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 250px;
  height: 45px;
  border: 1px solid rgba(135, 135, 135, 0.3);
  border-radius: 15px;
  text-align: center;
  padding: 0 10px;
`;

const Search = styled.img`
  margin: auto;
`;

const FoodtSearch = function () {

  const [foodList, setFoodList] = useRecoilState(foodAtom);
  const [search, setSearch] = useState(""); 

  const foodDB = async function(){
    try {
      const response = await instance.get('/food');
      setFoodList(response.data)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    foodDB();
  }, []);

  const navigate = useNavigate();

  //검색기능 추가 ---
  //input창에 검색어가 적히면 search에 업데이트
  const handleSearch = (e) => {
    setSearch(e.target.value);
  }
  // 검색 필터링 기능
  //foodList 배열을 돌며 food 검사
  //.includes :  포함되어있는지 확인
  const filterFoodList = foodList.filter((food) => {
    // food.name이 정의되어 있고, search와 일치하는지 확인
    return food.name && food.name.includes(search);
  })

  return (
    <Container>
      <PreviousButton onClick={() => navigate("/analysis")} />
      <SearchInput>
        <Search src={searchImg} />
        <Input 
          type="text" 
          placeholder="찾으시는 음식을 검색해주세요" 
          onChange={handleSearch}  
        />
      </SearchInput>

      {/* 검색결과 => 검색어와 일치하는 항목만 보이도록.. */}
      <ResultList foodList={filterFoodList}/> 

      <Button
        name="선택하기"
        img={plus}
        width="170px"
        display="block"
        ml="190px"
        mt="30px"
        onClick={() => navigate("/analysis")}
      />
    </Container>
  );
};

export default FoodtSearch;
