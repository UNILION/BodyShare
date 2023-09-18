import styled from "styled-components";

const Container = styled.div`
  grid-row: 2;
  width: 390px;
  text-align: center;
  margin-bottom: 25px;
`;

const BP = styled.p`
  font-size: 25px;
  margin: 0 auto;
`;

const B = styled.b`
  font-weight: bold;
`;

const SP = styled.p`
  font-size: 14px;
  margin-top: 25px;
`;

const Intro = function() {
  return (
    <Container>
      <BP>안녕하세요.</BP>
      <BP><B>BODY SHARE</B> 입니다.</BP>
      <SP>회원 서비스 이용을 위해 로그인 해주세요.</SP>
    </Container>
  );
};

export default Intro;