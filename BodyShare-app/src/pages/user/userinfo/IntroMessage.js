import styled from "styled-components";

const Intro = styled.div`
  grid-row: 1;
  width: 372px;
  height: 48px;
  margin: 35px auto 5px auto;
`;

const BP = styled.p`
  font-size: 20px;
  margin: 0 auto;
  text-align: center;
`;

const B = styled.b`
  font-weight: bold;
`;

const Message = styled.div`
  grid-row: 2;
  width: 372px;
  height: 17px;
  margin: 0 auto 15px auto;
`;

const SP = styled.p`
  font-size: 14px;
  margin: 5px auto;
  text-align: center;
`;

const IntroMessage = function () {
  return (
    <>
      <Intro>
        <BP>안녕하세요.</BP>
        <BP><B>BODY SHARE</B> 입니다.</BP>
      </Intro>

      <Message>
        <SP>회원 서비스 이용을 위해 본인정보를 입력해주세요.</SP>
      </Message>
    </>
  );
};

export default IntroMessage;