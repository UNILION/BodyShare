import styled from "styled-components";

const Info = styled.ul`
  margin-left: 20px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-top: 26px;
  width: 349px;
  height: 206px;
`;

const Infoul = styled.ul`
  display: grid;
  grid-template-rows: repeat(4, 1fr); /* 4개의 행을 만듭니다. */
  align-items: center; /* 항목을 수직으로 중앙에 정렬합니다. */
  font-size: 20px;
  font-weight: bold;
  border: 0px solid;
  background-color: rgba(85, 111, 255, 0.2);
  border-radius: 15px 0px 0px 15px;
  width: 101px;
  height: 206px;
  padding-left: 10px;
`;

const Infodtul = styled.ul`
  place-items: center;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  font-size: 20px;
  font-weight: 500;
  border: 0px solid ;
  background-color: rgba(85, 111, 255, 0.2);
  border-radius: 0px 15px 15px 0px;
  width: 232px;
  height: 206px;
`;

const InfoCard = function () {
  return (
    <>
      <Info>
        <Infoul>
          <li>아이디</li>
          <li>닉네임</li>
          <li>키</li>
          <li>몸무게</li>
        </Infoul>
        <Infodtul>
          <li>kimm</li>
          <li>kimmmmm</li>
          <li>167cm</li>
          <li>50kg</li>
        </Infodtul>
      </Info>
    </>
  )
};

export default InfoCard;