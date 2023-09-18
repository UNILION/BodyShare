import styled from "styled-components";
import Tag from "components/commons/Tag";
import search from "assets/Img/search.png";
import backButton from "assets/Img/back.png";
import { useNavigate } from "react-router-dom";

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

const Top = function () {
  const navigate = useNavigate();
  return (
    <>
      <PreviousButton onClick={() => navigate("/community")} />
      <SearchInput>
        <Search src={search} />
        <Input type="text" placeholder="찾으시는 운동을 검색해주세요" />
      </SearchInput>
      <CategoryList>
        <Tag tagName="전체" width="80px" height="36px" br="13px" />
        <Tag tagName="근력" width="80px" height="36px" br="13px" />
        <Tag tagName="유산소" width="80px" height="36px" br="13px" />
        <Tag tagName="기타" width="80px" height="36px" br="13px" />
      </CategoryList>
    </>
  );
};

export default Top;
