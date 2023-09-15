import styled from "styled-components";
import search from "../../../assets/Img/search.png";
import backButton from "../../../assets/Img/back.png";
import { useNavigate } from "react-router-dom";
import Tag from "../../../components/commons/Tag";

const Container = styled.div`
  padding: 10px 20px;
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

const ResultList = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
`;

const ResultButton = styled.button`
  background-color: white;
  border: none;
  padding-top: 55px;
  cursor: pointer;
`;

const RP = styled.p`
  font-size: 17px;
  text-align: left;
  margin-bottom: 10px;
`;

const Line = styled.div`
  width: 360px;
  border: 1px solid rgba(135, 135, 135, 0.3);
`;

const CommuSearch = function () {
  const navigate = useNavigate();

  return (
    <Container>
      <PreviousButton onClick={() => navigate("/community")} />
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
      <ResultList>
        <ResultButton>
          <RP>축구</RP>
          <Line></Line>
        </ResultButton>
        <ResultButton>
          <RP>수영</RP>
          <Line></Line>
        </ResultButton>
        <ResultButton>
          <RP>달리기</RP>
          <Line></Line>
        </ResultButton>
        <ResultButton>
          <RP>필라테스</RP>
          <Line></Line>
        </ResultButton>
        <ResultButton>
          <RP>요가</RP>
          <Line></Line>
        </ResultButton>
      </ResultList>
    </Container>
  );
};

export default CommuSearch;
