import React from 'react';
import styled from 'styled-components';
import search from '../../assets/Img/search.png';
import previous from '../../assets/Img/Previous.png';
import { useNavigate } from 'react-router-dom';
import "../../assets/Img/buttonsearch.png";

const FoodtSearchContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto auto auto;
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
`;

const Input = styled.input`
  width: 300px;
  height: 45px;
  border: 1px solid rgba(135, 135, 135, 0.3);
  border-radius: 15px;
  text-align: center;
`;

const Search = styled.img``;

const FoodSearchResult = styled.div`
  grid-row: 3;
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

const ButtonDiv = styled.div`
  grid-row: 4;
  text-align: right;
  height: 150px;
  padding-top: 100px;
  padding-right: 15px;
`;

// 공통 버튼 css
const StyledButton = styled.button`
  width: ${(props) => (props.width ? props.width : '200px')};
  height: ${(props) => (props.height ? props.height : '45px')};
  color: ${(props) => (props.color ? props.color : 'white')};
  background-color: ${(props) => (props.bc ? props.bc : '#556FFF')};
  font-size: ${(props) => (props.fs ? props.fs : '20px')};
  border-radius: ${(props) => (props.br ? props.br : '23px')};
  border: ${(props) =>
    props.border ? props.border : '1px solid rgba(135, 135, 135, 0.3)'};
  margin-top: ${(props) => (props.mt ? props.mt : '0px')};
  margin-right: ${(props) => (props.mr ? props.mr : '0px')};
  margin-bottom: ${(props) => (props.mb ? props.mb : '0px')};
  margin-left: ${(props) => (props.ml ? props.ml : '0px')};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.hoverColor ? props.hoverColor : '#2748FF')};
  }
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

const Name = styled.span`
  margin-top: ${(props) => (props.nmt ? props.nmt : 'auto')};
  margin-right: ${(props) => (props.nmr ? props.nmr : 'auto')};
  margin-bottom: ${(props) => (props.nmb ? props.nmb : 'auto')};
  margin-left: ${(props) => (props.nml ? props.nml : 'auto')};
`;

const Image = styled.img`
  width: ${(props) => (props.iwidth ? props.iwidth : '30px')};
  height: ${(props) => (props.iheight ? props.iheight : '30px')};
  margin-top: ${(props) => (props.imt ? props.imt : 'auto')};
  margin-right: ${(props) => (props.imr ? props.imr : 'auto')};
  margin-bottom: ${(props) => (props.imb ? props.imb : 'auto')};
  margin-left: ${(props) => (props.iml ? props.iml : 'auto')};
  display: ${(props) => (props.img ? 'grid' : 'none')};
  place-items: center;
`;

const FoodtSearch = function () {
  const navigate = useNavigate();

  return (
    <>
      <FoodtSearchContainer>
        <PreviousButton src={previous} onClick={() => navigate('/analysis')} />
        <SearchInput>
          <Search src={search} />
          <Input type="text" placeholder="찾으시는 음식을 검색해주세요" />
        </SearchInput>
        <FoodSearchResult>
          <ResultList>
            <ResultButton>
              <RP>김치</RP>
            </ResultButton>
            <Line></Line>
            <ResultButton>
              <RP>닭가슴살</RP>
            </ResultButton>
            <Line></Line>
            <ResultButton>
              <RP>바나나</RP>
            </ResultButton>
            <Line></Line>
            <ResultButton>
              <RP>계란</RP>
            </ResultButton>
            <Line></Line>
          </ResultList>
        </FoodSearchResult>
        <ButtonDiv>
          <StyledButton
            width="200px"
            height="45px"
            color="white"
            bc="#556FFF"
            fs="20px"
            br="23px"
            border="1px solid rgba(135,135,135,0.3)"
          >
            <ButtonContainer>
              <Name>선택완료</Name>
              <Image iwidth="30px" iheight="30px" img={true} />
            </ButtonContainer>
          </StyledButton>
        </ButtonDiv>
      </FoodtSearchContainer>
    </>
  );
};

export default FoodtSearch;
