import styled from "styled-components";
import CircleImg from "assets/Img/circletgo.png";
import { Link } from "react-router-dom";

const Records = styled.div`
  display: grid;
  grid-row: 1;
  height: 60px;
  border-radius: 30px;
  border: 1px solid rgba(135, 135, 135, 0.3);
  margin-top: 10px;
  grid-template-columns: 4fr 1fr;
`;

const RecordText = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  color: #878787;
  line-height: 60px;
  padding-left: 15px;
`;

const RecordButton = styled(Link)`
  border-radius: 0 30px 30px 0;
  background-color: #556fff;
  cursor: pointer;
  display: grid;
  place-items: center;
`;

const ButtonImg = styled.img`
  width: 45px;
  height: 45px;
  cursor: pointer;
`;

const Record = function () {
  return (
    <Records>
      <RecordText>오늘의 기록 0건</RecordText>
      <RecordButton to="/analysis">
        <ButtonImg src={CircleImg}></ButtonImg>
      </RecordButton>
    </Records>
  );
};
export default Record;
