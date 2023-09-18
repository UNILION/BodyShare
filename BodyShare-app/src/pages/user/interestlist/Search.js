import styled from "styled-components";
import searchIcon from "assets/Img/search.png";
import xbutton from "assets/Img/xbutton.png";
import { useNavigate } from "react-router-dom";

const SearchInput = styled.div`
  grid-row: 3;
  width: 380px;
  height: 45px;
  margin: 0 auto 10px auto;
  display: grid;
  grid-template-columns: 24px auto;
`;

const SearchDiv = styled.div`
  grid-column: 1;
  width: 24px;
  height: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SearchImg = styled.img`
  width: 24px;
  height: 24px;
`;

const Input = styled.input`
  grid-column: 2;
  width: 300px;
  height: 45px;
  border: 1px solid rgba(135, 135, 135, 0.3);
  border-radius: 15px;
  text-align: center;
  margin-left: 10px;
`;

const SportCategory = styled.div`
  grid-row: 4;
`;

const CategoryButton = styled.button`
  width: 81px;
  height: 36px;
  border: none;
  border-radius: 15px;
  background-color: rgb(85, 111, 255, 0.3);
  margin-left: 9px;
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

const SportSearchResult = styled.div`
  grid-row: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ResultList = styled.ul`
  list-style: none;
  gap: 10px;
`;

const ResultButton = styled.button`
    background-color: white;
    border: none;
    padding-top: 20px;
    padding-bottom: 10px;
`;

const RP = styled.p`
    font-size: 17px;
`;

const CheckBox = styled.input.attrs({ type: "checkbox" })`
  border: 2px solid #556FFF;
`;

const Line = styled.div`
  width: 360px;
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
  
  return (
    <>
      <SearchInput>
        <SearchDiv>
          <SearchImg src={searchIcon}></SearchImg>
        </SearchDiv>
        <Input type="text" placeholder="찾으시는 운동을 검색해주세요"/>
      </SearchInput>

      <SportCategory>
        <CategoryList>
          <CategoryButton><CP>전체</CP></CategoryButton>
          <CategoryButton><CP>근력</CP></CategoryButton>
          <CategoryButton><CP>유산소</CP></CategoryButton>
          <CategoryButton><CP>기타</CP></CategoryButton>
        </CategoryList>
      </SportCategory>

      <SportSearchResult>
        <ResultList>
          <ResultButton><RP>수영</RP></ResultButton>
          <CheckBox ></CheckBox>
          <Line></Line>
          <ResultButton><RP>요가</RP></ResultButton>
          <CheckBox ></CheckBox>
          <Line></Line>
          <ResultButton><RP>달리기</RP></ResultButton>
          <CheckBox ></CheckBox>
          <Line></Line>
          <ResultButton><RP>골프</RP></ResultButton>
          <CheckBox ></CheckBox>
          <Line></Line>
        </ResultList>
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