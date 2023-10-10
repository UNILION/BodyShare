import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Search from "assets/Img/buttonsearch.png";

const TopContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 50px;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: bold;
  line-height: 50px;
`;

const Img = styled.img`
  display: grid;
  align-items: end;
  margin-left: auto;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const Top = function ({ searchItemList }) {
  const navigate = useNavigate();
  return (
    <TopContainer>
      <Title>{searchItemList[0].name}</Title>
      <Img src={Search} onClick={() => navigate("/community/search")} />
    </TopContainer>
  );
};

export default Top;