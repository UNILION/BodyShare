import styled from "styled-components";
import Top from "./Top";
import Middle from "./Middle";
import Plus from "assets/Img/buttonplus.png";
import { useRecoilValue } from "recoil";
import { searchSelector } from "recoil/commuRecoil";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  padding: 20px;
`;

const AddImg = styled.img`
  display: grid;
  align-items: end;
  margin-left: auto;
  width: 50px;
  height: 50px;
  cursor: pointer;
  margin-top: 20px;
`;

const CommuSearchAfter = function () {
  const searchItemList = useRecoilValue(searchSelector);
  const navigate = useNavigate();

  return (
    <Container>
      <Top searchItemList={searchItemList} />
      <Middle searchItemList={searchItemList} />
      <AddImg src={Plus} onClick={() => navigate("/community/communityAdd")} />
    </Container>
  );
};

export default CommuSearchAfter;
