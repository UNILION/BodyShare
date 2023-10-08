import styled from "styled-components";
import { useNavigate } from "react-router-dom/dist";
import buttonplus from "../../../assets/Img/buttonplus.png";

const NoteAddGrid = styled.div`
  display: grid;
  gap: 10px;
`;

const Add = styled.div`
  text-align: left;
  padding: 10px 20px;
  border-radius: 15px;
  background-color: rgba(85, 111, 255, 0.3);
  display: flex;

  &:hover {
    cursor: pointer;
  }
`;

const BtImg = styled.img`
  width: 19px;
  border: none;
  background: none;
  margin-right: 10px;

  &:hover {
    cursor: pointer;
  }
`;

const P = styled.p`
  color: #556FFF;
  font-weight: bold;
  margin: 0;
`;

const Cover = styled.div`
  background-color: white;
  border-radius: 15px;
`

const NoteAdd = function () {
  const navigate = useNavigate();
  return(
    <>
      <NoteAddGrid>
        <Cover>
        <Add  onClick={() => navigate("/analysis/add")}>
          <BtImg src={buttonplus} onClick={() => navigate("/analysis/add")}></BtImg>
          <P>운동 기록 추가</P>
        </Add>
        </Cover>
        <Cover>
        <Add onClick={() => navigate("/analysis/add/food")}>
          <BtImg src={buttonplus} onClick={() => navigate("/analysis/add/food")}></BtImg>
          <P>식단 기록 추가</P>
        </Add>
        </Cover>
      </NoteAddGrid>    
    </>
  );
};

export default NoteAdd;