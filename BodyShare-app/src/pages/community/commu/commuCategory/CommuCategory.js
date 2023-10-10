import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import backButton from "assets/Img/back.png";
import Search from "pages/community/commu/commuCategory/Search";
import { categorySelector } from "recoil/commuRecoil";

const Container = styled.div`
  display: grid;
  width: 390px;
  height: 696px;
  grid-template-rows: auto auto auto auto auto auto 1fr;
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

const CommuSearch = function () {
  const navigate = useNavigate();
  const categoryList = useRecoilValue(categorySelector);

  return (
    <Container>
      <PreviousButton onClick={() => navigate("/community/communityAdd")} />
      <Search categoryList={categoryList} />
    </Container>
  );
};

export default CommuSearch;
