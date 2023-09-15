import styled from "styled-components";
import search from "../../assets/Img/search.png"
import backButton from "../../assets/Img/back.png"
import xbutton from "../../assets/Img/xbutton.png"
import { useNavigate } from "react-router-dom";
import Tag from "../../components/commons/Tag";
import ButtonTT from "./NewVer/ButtonTT"

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

const Search = styled.img`
  margin-right: 5px;
`;

const SportSearchResult = styled.div`
  
`;

const CategoryList = styled.ul`
  grid-template-rows: 1fr 1fr 1fr 1fr;
  list-style: none;
  margin-left: 20px;
`;

const ResultList = styled.ul`
  list-style: none;
  gap: 10px;
`;

const ResultButton = styled.button`
    background-color: white;
    border: none;
    padding-top: 45px;
    padding-bottom: 0px;
`;

const RP = styled.p`
    font-size: 17px;
`;

const CheckBox = styled.input.attrs({ type: "checkbox" })`
  border: 2px solid #556FFF;
  float: right;
  margin-top: 50px;
  margin-right: 30px;
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
  margin: 15px auto auto 40px;
`;

const Select = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

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
  margin: 20px auto;
  text-align: center;
`;

const InterestModify = function () {
  const navigate = useNavigate();

  return (
    <>
      <SelectDiv>
        <SportSearchContainer>
          <PreviousButton onClick={() => {navigate("/mypage/modify")}}></PreviousButton>
          <SearchInput>
            <Search src={search}></Search>
            <Input type="text" placeholder="찾으시는 운동을 검색해주세요" />
          </SearchInput>
          <CategoryList>
            <Tag 
              tagName="전체"
              br="15px"
              width="81px"
              height="36px"
              mr="3px"
            />
            <Tag 
              tagName="유산소"
              br="15px"
              width="81px"
              height="36px"
              mr="3px"
            />
            <Tag 
              tagName="웨이트"
              br="15px"
              width="81px"
              height="36px"
              mr="3px"
            />
            <Tag 
              tagName="야외"
              br="15px"
              width="81px"
              height="36px"
            />
          </CategoryList>
          <SportSearchResult>
            <ResultList>
              <ResultButton><RP>수영</RP></ResultButton>
              <CheckBox ></CheckBox>
              <Line></Line>
              <ResultButton><RP>러닝</RP></ResultButton>
              <CheckBox ></CheckBox>
              <Line></Line>
              <ResultButton><RP>등산</RP></ResultButton>
              <CheckBox ></CheckBox>
              <Line></Line>
              <ResultButton><RP>자전거</RP></ResultButton>
              <CheckBox ></CheckBox>
              <Line></Line>
              <ResultButton><RP>요가</RP></ResultButton>
              <CheckBox ></CheckBox>
              <Line></Line>
            </ResultList>
          </SportSearchResult>
        </SportSearchContainer>
        <SelectedDiv>
          <Select>
            <Tag 
              tagName="요가"
            />
            <DeleteButtonDiv>
              <DeleteButton ></DeleteButton>
            </DeleteButtonDiv>
          </Select>
          <Select>
            <Tag 
              tagName="수영"
            />
            <DeleteButtonDiv>
              <DeleteButton ></DeleteButton>
            </DeleteButtonDiv>
          </Select>
          <Select>
            <Tag 
              tagName="러닝"
            />
            <DeleteButtonDiv>
              <DeleteButton ></DeleteButton>
            </DeleteButtonDiv>
          </Select>
        </SelectedDiv>
        <Donediv>
          <ButtonTT
            name="선택완료"
            onClick={() => navigate("/mypage/modify")}
            width="321px"
            height="45px"
            br="15px"
            mr="20px"
          />
        </Donediv>
      </SelectDiv>
    </>
  )
};

export default InterestModify;


