import styled from "styled-components";
import Top from "./Top";
import Middle from "./Middle";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { interestSelector } from "recoil/userRecoil"
import backButton from "assets/Img/back.png";
import Search from "./Search";

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
  // const interestList = useRecoilValue(interestSelector);
  
  return (
    <Container>
      <PreviousButton onClick={() => navigate("/community")} />
      <Search />
    </Container>
  );
};

export default CommuSearch;
