import styled from "styled-components";
import search from "../../assets/Img/search.png"
import backButton from "../../assets/Img/back.png"

const SelectDiv = styled.div`
  margin: 10px;
`;

const SportSearchContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto auto 1fr;
  gap: 10px;
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
  margin-left: 5px;
  grid-row: 2;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 300px;
  height: 45px;
  border: 1px solid rgba(135, 135, 135, 0.3);
  border-radius: 15px;
  text-align: center;
`;

const SportCategory = styled.div`
  grid-row: 3;
`;

const Search = styled.img`
  margin-right: 5px;
`;

const CategoryButton = styled.button`
  width: 81px;
  height: 36px;
  border: none;
  border-radius: 15px;
  background-color: rgb(85, 111, 255, 0.3);
  margin-left: 9px;
`;

const SportSearchResult = styled.div`
  grid-row: 4;
`;

const CategoryList = styled.ul`
  list-style: none;
  display: flex;
`;

const CP = styled.p`
    font-size: 12px;
    font-weight: bold;
    color: #656565;
`;

const ResultList = styled.ul`
  list-style: none;
  gap: 10px;
`;

const ResultButton = styled.button`
    background-color: white;
    border: none;
    padding-top: 55px;
    padding-bottom: 0px;
`;

const RP = styled.p`
    font-size: 17px;
`;

const Line = styled.div`
  width: 360px;
  border: 1px solid rgba(135, 135, 135, 0.3);
`;

const InterestModify = function () {

  return (
    <>
      <SelectDiv>
        <SportSearchContainer>
          <PreviousButton></PreviousButton>
          <SearchInput>
            <Search src={search}></Search>
            <Input type="text" placeholder="찾으시는 운동을 검색해주세요" />
          </SearchInput>
          <SportCategory>
            <CategoryList>
              <CategoryButton><CP>전체</CP></CategoryButton>
              <CategoryButton><CP>전체</CP></CategoryButton>
              <CategoryButton><CP>전체</CP></CategoryButton>
              <CategoryButton><CP>전체</CP></CategoryButton>
            </CategoryList>
          </SportCategory>
          <SportSearchResult>
            <ResultList>
              <ResultButton><RP>수영</RP></ResultButton>
              <Line></Line>
              <ResultButton><RP>수영</RP></ResultButton>
              <Line></Line>
              <ResultButton><RP>수영</RP></ResultButton>
              <Line></Line>
              <ResultButton><RP>수영</RP></ResultButton>
              <Line></Line>
              <ResultButton><RP>수영</RP></ResultButton>
              <Line></Line>
            </ResultList>
          </SportSearchResult>
        </SportSearchContainer>
      </SelectDiv>
    </>
  )
};

export default InterestModify;


