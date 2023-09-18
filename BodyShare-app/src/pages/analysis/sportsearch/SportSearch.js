import styled from "styled-components";
import search from "assets/Img/search.png"
import previous from "assets/Img/Previous.png";
import plus from "assets/Img/buttonplus.png";
import Button from "components/commons/Button";
import Tag from "components/commons/Tag";
import ResultList from "pages/analysis/sportsearch/ResultList";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
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
  grid-template-columns: 1fr 3fr;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 260px;
  height: 45px;
  border: 1px solid rgba(135, 135, 135, 0.3);
  border-radius: 15px;
  text-align: center;
  padding: 0 20px;
`;

const Search = styled.img`
  margin: auto;
`;

const CategoryList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

// const ResultList = styled.div`
//   display: grid;
//   grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
// `;


const SportSearch = function() {
  const navigate = useNavigate();

  return (
    <Container>
      <PreviousButton onClick={() => navigate("/analysis")} />
      <SearchInput>
        <Search src={search} />
        <Input type="text" placeholder="찾으시는 운동을 검색해주세요" />
      </SearchInput>
      <CategoryList>
        <Tag tagName="전체" width="80px" height="36px" br="13px" />
        <Tag tagName="유산소" width="80px" height="36px" br="13px" />
        <Tag tagName="무산소" width="80px" height="36px" br="13px" />
        <Tag tagName="근력" width="80px" height="36px" br="13px" />
      </CategoryList>
      
      <ResultList />

      <Button
        name="선택하기"
        img={plus}
        width="200px"
        display="block"
        ml="auto"
        mt="30px"
        onClick={() => navigate("/analysis/add/time")}
      />
    </Container>
  );
};


export default SportSearch;