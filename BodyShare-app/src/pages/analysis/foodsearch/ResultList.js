import styled from "styled-components";

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

const ResultList = function(){
  <ResultList>
    <ResultButton>
      <RP>축구</RP>
      <Line></Line>
    </ResultButton>
    <ResultButton>
      <RP>수영</RP>
      <Line></Line>
    </ResultButton>
    <ResultButton>
      <RP>달리기</RP>
      <Line></Line>
    </ResultButton>
    <ResultButton>
      <RP>필라테스</RP>
      <Line></Line>
    </ResultButton>
    <ResultButton>
      <RP>요가</RP>
      <Line></Line>
    </ResultButton>
  </ResultList>
}

export default ResultList;