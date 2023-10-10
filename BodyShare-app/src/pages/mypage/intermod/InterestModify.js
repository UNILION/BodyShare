import styled from "styled-components";
import backButton from "assets/Img/back.png";
import { useNavigate } from "react-router-dom";
import Search from "pages/mypage/intermod/Search";
import { useRecoilValue } from "recoil";
import { interestSelector } from "recoil/userRecoil"

const Container = styled.div`
  display: grid;
  width: 390px;
  height: 696px;
  grid-template-rows: auto auto auto auto auto auto 1fr;
  gap: 10px;
`;

const PreviousButton = styled.button`
  margin-top: 3px;
  width: 20px;
  height: 20px;
  background-image: url(${backButton});
  background-size: cover;
  border-radius: 20px;
  border: none;
  cursor: pointer;
`;

const InterestModify = function () {
  const navigate = useNavigate();
  const interestList = useRecoilValue(interestSelector);

  return (
    <Container>
      <PreviousButton onClick={() => navigate("/mypage/modify")} />
      <Search interestList={interestList} />
    </Container>
  );
};

export default InterestModify;
