import React, {useState} from 'react';
import styled from 'styled-components';
import searchImg from 'assets/Img/search.png';
import previous from 'assets/Img/Previous.png';
import "assets/Img/buttonsearch.png";
import Button from "components/commons/Button";
import plus from "assets/Img/buttonplus.png";
import ResultList from "pages/analysis/foodsearch/ResultList";
import { useNavigate } from 'react-router-dom';
import { foodSelector } from "recoil/foodList";
import axios from "axios";
import { userSelector } from "recoil/userRecoil";
import { useRecoilValue } from 'recoil';

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

const BtnImg = styled.img`
  width: 35px;
  position: relative;
  margin-left: 100px;
  bottom: 40px;
  left: 200px;
  cursor: pointer;
`;

const FoodSearch = function () {
  const foodList = useRecoilValue(foodSelector);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(""); 
  const userNo = useRecoilValue(userSelector);
  const navigate = useNavigate();

  const changeSelected = function (data) {
    setSelected(data);
  };

  // 검색기능 추가
  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  // 검색 필터링 기능
  const filterFoodList = foodList.filter((food) => {
    return food.name && food.name.includes(search);
  })

  const sendFoodDataToServer = async () => {
    if (!selected) {
        alert("음식을 선택해주세요");
      return;
    }

    try {
      const dietDate = String(new Date().toLocaleDateString());
    
      // 선택한 음식 정보를 담은 객체를 생성
      const foodData = {
        userNo,
        foodNo: selected.no,
        dietDate
      };

      const response = await instance.post('/record/foodadd', foodData);
      
      console.log('POST 요청이 성공적으로 보내졌습니다.');
      console.log('서버 응답:', response.data);

      navigate("/analysis");
    } catch (error) {
      console.error('POST 요청 실패:', error);
    }
  }

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

      <ResultList foodList={filterFoodList} changeSelected={changeSelected} search={search} /> 

      <Button
        name="선택하기"
        width="170px"
        display="block"
        ml="190px"
        mt="30px"
        onClick={sendFoodDataToServer}
      >
      </Button>

      <BtnImg src={plus}  onClick={sendFoodDataToServer}></BtnImg>
    </Container>
  );
};

export default FoodSearch;
