import styled from "styled-components";
import search from "assets/Img/search.png";
import Tag from "components/commons/Tag";

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

const SearchCate = function () {
  return(
    <>
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
  )
};

export default SearchCate