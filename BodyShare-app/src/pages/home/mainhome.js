import { Link } from "react-router-dom";
import styled from "styled-components"; 

const Logo = styled.image`
  width: 180px;
  height: 180px;
`;

const Record = styled.div`

  width: 385px;
  height: 60px;
  position: relative;
`;

const RecordInner1 = styled.div`
  width: 355.38px;
  height: 60px;
  position: absolute;
  left: 1.5px;
  top: 117.5px;
  border-radius: 30px;
  background-color: #ffffff;
  border: 1px solid #878787;
  opacity: 0.3;
`;



const RecordText = styled.p`
  width: 325px;
  height: 30px;
  position: absolute;
  left: 20px;
  top: 140px;
  font-size: 1.25rem;
  font-weight: bold;
  text-align: left;
  color: #878787;
`;
const RecordButton = styled(Link)`
  width: 67px;
  height: 60px;
  position: absolute;
  left: 320px;
  top: 117.5px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  background-color: #556fff;
  display: flex; 
  align-items: center; 
  justify-content: center; 
  text-decoration: none; 
  color: white; 
  cursor: pointer; 
`;

const Index = function () {
  return (
    <>
      <Logo />
      <Record>
        <RecordInner1 />
          <RecordText>오늘의 기록 0건</RecordText>
            <RecordButton to="/analysis">{'>'}
              
        </RecordButton>
      </Record>
      <nav1></nav1>
    </>
  );
};

export default Index;