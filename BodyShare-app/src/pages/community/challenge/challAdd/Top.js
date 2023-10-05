import styled from "styled-components";
import previous from "assets/Img/Previous.png";
import { useNavigate } from "react-router-dom";

const TopContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Previous = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const TopRight = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const TopTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

const TopContent = styled.div`
  font-size: 15px;
  margin-top: 5px;
`;

const Top = function() {
  const navigate = useNavigate();
  
  return (
    <TopContainer>
    <Previous
      src={previous}
      alt="뒤로가기"
      onClick={() => navigate("/community")}
    />
    <TopRight>
      <TopTitle>챌린지 만들기</TopTitle>
      <TopContent>함께하고 싶은 챌린지를 만들어보세요! 😛</TopContent>
    </TopRight>
  </TopContainer>
  );
};

export default Top;