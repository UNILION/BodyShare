import styled from "styled-components";
import searchImg from "assets/Img/search.png"
import previous from "assets/Img/Previous.png";
import plus from "assets/Img/buttonplus.png";
import Button from "components/commons/Button";
import Tag from "components/commons/Tag";
import ResultList from "pages/analysis/sportsearch/ResultList";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from 'recoil';
import { useState } from "react";
import { sportsSelector } from "recoil/sportList";
import { useRecoilValue } from 'recoil';
import { selectedSportNameState } from 'recoil/sportList';

const Container = styled.div`
  width: 95%;
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
  grid-template-columns: 1fr 4fr;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 250px;
  height: 45px;
  border: 1px solid rgba(135, 135, 135, 0.3);
  border-radius: 15px;
  text-align: center;
  padding: 0 10px;
`;

const Search = styled.img`
  margin: auto;
`;

const CategoryList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const StyledTag = styled(Tag)`
  background-color: ${(props) => (props.isSelected ? "#556FFF" : "rgba(85,111,255, 0.3)")};
  color: ${(props) => (props.isSelected ? "#fff" : "#000")};
  &:hover {
    background-color: #556fff;
    color: #fff;
  }
`;
const BtnImg = styled.img`
  width: 35px;
  position: relative;
  margin-left: 100px;
  bottom: 40px;
  left: 200px;
  cursor: pointer;
`;

const Cover = styled.div`
  background-color: white;
  border-radius: 15px;
  width: 80px;
`;

const SportSearch = function () {
  const navigate = useNavigate();

  const sportsList = useRecoilValue(sportsSelector);
  const [sportsTag, setSportsTag] = useState('전체'); // 초기값은 전체로
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");
  const [selectedSportName, setSelectedSportName] = useRecoilState(selectedSportNameState);

  const changeSelected = function (data) {
    setSelected(data);
    setSelectedSportName(data.name);
  };

  // 태그에 맞게 운동 리스트들이 나오도록 함
  const hadleTagfilter = (tag) => {
    setSportsTag(tag);

  };

  // 검색기능 추가 ---
  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const filterSportsList = sportsList.filter((sports) => {
    const TagResult = sportsTag === '전체' || sports.category === sportsTag;
    const SearchResult = sports.name.includes(search);
    return TagResult && SearchResult;
  });

  return (
    <Container>
      <PreviousButton onClick={() => navigate("/analysis")} />

      <SearchInput>
        <Search src={searchImg} />
        <Input type="text" placeholder="찾으시는 운동을 검색해주세요" onChange={handleSearch} />
      </SearchInput>

      <CategoryList>
        <Cover>
          <StyledTag tagtitle="전체" width="80px" height="36px" br="13px" isSelected={sportsTag === "전체"} onClick={() => hadleTagfilter('전체')} />
        </Cover>
        <Cover>
          <StyledTag tagtitle="근력" width="80px" height="36px" br="13px" isSelected={sportsTag === "근력"} onClick={() => hadleTagfilter('근력')} />
        </Cover>
        <Cover>
          <StyledTag tagtitle="유산소" width="80px" height="36px" br="13px" isSelected={sportsTag === "유산소"} onClick={() => hadleTagfilter('유산소')} />
        </Cover>
        <Cover>
          <StyledTag tagtitle="기타" width="80px" height="36px" br="13px" isSelected={sportsTag === "기타"} onClick={() => hadleTagfilter('기타')} />
        </Cover>
      </CategoryList>

      <ResultList sportsList={filterSportsList} changeSelected={changeSelected} search={search} />


      <Button
        name="선택하기"
        width="180px"
        display="block"
        ml="auto"
        mr="20px"
        mt="30px"
        onClick={() => {
          if (selected) {
            navigate("/analysis/add/time");
          } else {
            alert("운동을 선택해주세요");
          }
        }}
      />
      <BtnImg
        src={plus}
        onClick={() => {
          if (selected) {
            navigate("/analysis/add/time");
          } else {
            alert("운동을 선택해주세요");
          }
        }}>
      </BtnImg>
    </Container>
  );
};


export default SportSearch;