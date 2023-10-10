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
  font-size: 13px;
  margin-top: 5px;
`;

const Top = function ({ commuNo }) {
  const navigate = useNavigate();
  return (
    <TopContainer>
      <Previous
        src={previous}
        alt="뒤로가기"
        onClick={() => navigate(`/community/commuIn/${commuNo}`)}
      />
      <TopRight>
        <TopTitle>커뮤니티 피드 쓰기</TopTitle>
        <TopContent>
          오늘 나에게 어떤 일이 있었는지 커뮤니티 사람들과 공유해주세요! 😛
        </TopContent>
      </TopRight>
    </TopContainer>
  );
};

export default Top;
