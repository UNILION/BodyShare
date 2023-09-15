import styled from "styled-components";
import search from "../../assets/Img/search.png"
import previous from "../../assets/Img/Previous.png";
import { Link, useNavigate } from "react-router-dom";

const FoodtSearchContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto auto 1fr;
  gap: 10px;
`;

const PreviousButton = styled.img`
  grid-row: 1;
  width: 21px;
  height: 21px;
  margin-top: 10px;

  &:hover {
  cursor: pointer;
  }
`;
const SearchInput = styled.div`
  grid-row: 2;
  /* background-color: blue; */
`;

const Input = styled.input`
  width: 300px;
  height: 45px;
  border: 1px solid rgba(135, 135, 135, 0.3);
  border-radius: 15px;
  text-align: center;
`;

const Search = styled.img`

`;

const FoodSearchResult = styled.div`
  grid-row: 4;
`;

const ResultList = styled.ul`
  list-style: none;
  gap: 10px;
`;
const ResultButton = styled.button`
    background-color: white;
    border: none;
    padding-top: 45px;
    padding-bottom: 10px;
`;
const RP = styled.p`
    font-size: 17px;
`;

const Line = styled.div`
  width: 360px;
  border: 1px solid rgba(135, 135, 135, 0.3);
`;


const FoodtSearch = function() {
  const navigate = useNavigate();

  return (
    <>
        <FoodtSearchContainer>
            <PreviousButton src={previous} onClick={() => navigate("/analysis")}></PreviousButton>
            <SearchInput>
                <Search src={search}></Search>
                <Input type="text" placeholder="찾으시는 음식을 검색해주세요"/>
            </SearchInput>
            <FoodSearchResult>
                <ResultList>
                    <ResultButton><RP>김치</RP></ResultButton>
                    <Line></Line>
                    <ResultButton><RP>김치</RP></ResultButton>
                    <Line></Line>
                    <ResultButton><RP>김치</RP></ResultButton>
                    <Line></Line>
                    <ResultButton><RP>김치</RP></ResultButton>
                    <Line></Line>
                </ResultList>
            </FoodSearchResult>
        </FoodtSearchContainer>
      
    </>
  );
};


export default FoodtSearch;