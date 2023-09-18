import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ResultList = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
`;

const ResultButton = styled.button`
  background-color: white;
  border: none;
  padding-top: 55px;
  cursor: pointer;
`;

const RP = styled.p`
  font-size: 17px;
  text-align: left;
  margin-bottom: 10px;
`;

const Line = styled.div`
  width: 360px;
  border: 1px solid rgba(135, 135, 135, 0.3);
`;

const Middle = function () {
  const navigate = useNavigate();
  
  return (
    <ResultList>
      <ResultButton>
        <RP onClick={() => navigate("/community/search/after")}>클라이밍</RP>
        <Line></Line>
      </ResultButton>
      <ResultButton>
        <RP onClick={() => navigate("/community/search/after")}>수영</RP>
        <Line></Line>
      </ResultButton>
      <ResultButton>
        <RP onClick={() => navigate("/community/search/after")}>달리기</RP>
        <Line></Line>
      </ResultButton>
      <ResultButton>
        <RP onClick={() => navigate("/community/search/after")}>필라테스</RP>
        <Line></Line>
      </ResultButton>
      <ResultButton>
        <RP onClick={() => navigate("/community/search/after")}>요가</RP>
        <Line></Line>
      </ResultButton>
    </ResultList>
  );
};

export default Middle;
