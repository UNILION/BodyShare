import styled from "styled-components";
import previous from "../../assets/Img/Previous.png";

const TimeInputContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 5px;
  width: 360px;
`;

const PreviousButton = styled.img`
  grid-row: 1;
  width: 21px;
  height: 21px;
  margin-top: 10px;
`;

const SportTitle = styled.div`
  grid-row: 2;
`;

const Line = styled.div`
  width: 360px;
  height: 1px;
  background-color: rgba(135, 135, 135, 0.3);
`;

const SportDate = styled.div`
  grid-row: 3;
  height: 44px;
  /* background-color: red; */
`;

const P = styled.p`
  display: inline-block;
  line-height: 44px;
  font-size: 20px;
  font-weight: bold;
`;

const BoxContainer = styled.div`
  float: right;
`;

const Box = styled.div`
  width: 210px;
  height: 44px;
  background-color: rgba(85, 111, 255, 0.3);
  border-radius: 15px;
  text-align: center;
  line-height: 44px;
  margin-left: 10px;
`;

const SportTime = styled.div`
  grid-row: 4;
`;

const SmallBox = styled.div`
  float: right;
  width: 48px;
  height: 44px;
  background-color: rgba(85, 111, 255, 0.3);
  border-radius: 15px;
  text-align: center;
`;

const Dot = styled.p`
  float: right;
  margin: 0 15px;
  line-height: 44px;
`;

const Category = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
  float: left;
`;

const SportName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-left: 10px;
`;


const TimeInput = function () {
  return (
    <>
      <TimeInputContainer>
        <PreviousButton src={previous}></PreviousButton>
        <SportTitle>
          <Category>유산소</Category>
          <SportName>달리기</SportName>
          <Line></Line>
        </SportTitle>
        <SportDate>
          <P>날짜</P>
          <BoxContainer>
            <Box>2023.09.08</Box>
          </BoxContainer>
        </SportDate>
        <SportTime>
          <P>운동한 시간</P>
          <SmallBox></SmallBox>
          <Dot>:</Dot>
          <SmallBox></SmallBox>
          <Dot>:</Dot>
          <SmallBox></SmallBox>
        </SportTime>
      </TimeInputContainer>
    </>
  );
};

export default TimeInput;
