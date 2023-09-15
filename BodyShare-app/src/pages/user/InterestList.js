import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import search from "../../assets/Img/search.png";
import xbutton from "../../assets/Img/xbutton.png";

const Container = styled.div`
  display: grid;
  width: 390px;
  height: 696px;
  grid-template-rows: auto auto auto auto auto auto 1fr;
  gap: 10px;
`;

const Intro = styled.div`
  grid-row: 1;
  width: 372px;
  height: 48px;
  margin: 35px auto 5px auto;
`;

const BP = styled.p`
  font-size: 20px;
  margin: 0 auto;
  text-align: center;
`;

const B = styled.b`
  font-weight: bold;
`;

const Message = styled.div`
  grid-row: 2;
  width: 372px;
  height: 17px;
  margin: 0 auto 15px auto;
`;

const SP = styled.p`
  font-size: 14px;
  margin: 5px auto;
  text-align: center;
`;

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

const Search = styled.img`
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

const DeleteButton = styled.button`
  width: 19px;
  height: 19px;
  background-color: rgba(85, 111, 255, 0.3);
  border-radius: 50%;
  border: none;
  background: url(${xbutton}) no-repeat center center;
  background-size: cover;

  &:hover {
    cursor: pointer;
  }

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

const InterestList = function() {
  const navigate = useNavigate();

  return (
    <Container>
      <Intro>
        <BP>안녕하세요.</BP>
        <BP><B>BODY SHARE</B> 입니다.</BP>
      </Intro>

      <Message>
        <SP>회원 서비스 이용을 위해 관심사를 등록해주세요.</SP>
      </Message>

      <SearchInput>
        <SearchDiv>
          <Search src={search}></Search>
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
            <DeleteButton ></DeleteButton>
          </DeleteButtonDiv>
        </Select>
        <Select>
          <SelectCircle>
            <SelectP>수영</SelectP>
          </SelectCircle>
          <DeleteButtonDiv>
            <DeleteButton ></DeleteButton>
          </DeleteButtonDiv>
        </Select>
        <Select>
          <SelectCircle>
            <SelectP>달리기</SelectP>
          </SelectCircle>
          <DeleteButtonDiv>
            <DeleteButton ></DeleteButton>
          </DeleteButtonDiv>
        </Select>
      </SelectedDiv>

      <Donediv>
        <Done onClick={() => navigate("/signup")}>선택완료</Done>
      </Donediv>
    </Container>
  );
  
};

export default InterestList;