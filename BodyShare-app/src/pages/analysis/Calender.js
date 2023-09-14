import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import calender from "../../assets/Img/calender.png";
import buttonplus from "../../assets/Img/buttonplus.png";
import seemore from "../../assets/Img/seemore.png";

const RecordGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
`;

const Calender = styled.img`
  width: 390px;
  height: 270px;
  border-radius: 15px;
`;

const NoteGrid = styled.div`
  background-color: white;
  border: 1px solid rgba(135, 135, 135, 0.3);
  border-radius: 15px;
  padding: 0;
`;

const TitleDate = styled.div`
  background-color: rgba(85, 111, 255, 0.3);
  border-radius: 15px 15px 0 0;
  padding: 10px 20px;
  border-bottom: 2px solid #556FFF;
`;

const P = styled.p`
  color: #556FFF;
  font-weight: bold;
  margin: 0;
`;

const SportNoteContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  padding: 20px;
`;
const FoodNoteContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  padding: 20px;
`;

const SportNote = styled.p`
  font-size: 14px;
`;

const SportTime = styled.p`
  font-size: 14px;
`;

const SeeMore = styled.button`
  width: 20px;
  height: 26px;
  border: none;
  background-color: white;
  cursor: pointer;
  padding: 0;
`;

const SmIng = styled.img`
  width: 20px;
  height: 26px;
`;

const FoodNote = styled.p`
  font-size: 14px;
`;

const NoteAddGrid = styled.div`
  display: grid;
  gap: 10px;
`;

const Line = styled.div`
  width: 390px;
  height: 1px;
  background-color: rgba(135, 135, 135, 0.3);
`;

const Add = styled.div`
  text-align: left;
  padding: 10px 20px;
  border-radius: 15px;
  background-color: rgba(85, 111, 255, 0.3);
`;

const AddBt = styled.button`
  border: none;
  float: left;
  text-align: left;
  margin-right: 10px;
`;

const BtImg = styled.img`
  width: 19px;
  border: none;
  background: none;
`;

const Record = function () {
  return (
    <>
    <RecordGrid>
      <Calender src={calender} />
      <NoteGrid>
        <TitleDate>
          <P>9월 7일 목</P>
        </TitleDate>
        <SportNoteContainer>
          <SportNote>유산소 달리기</SportNote>
          <SportTime>30분</SportTime>
          <SeeMore>
            <SmIng src={seemore}></SmIng>
          </SeeMore>
        </SportNoteContainer>
        <Line></Line>
        <FoodNoteContainer>
          <FoodNote>닭죽</FoodNote>
          <SeeMore>
            <SmIng src={seemore}></SmIng>
          </SeeMore>
        </FoodNoteContainer>
      </NoteGrid>
      <NoteAddGrid>
        <Add>
          <AddBt>
            <BtImg src={buttonplus}></BtImg>
          </AddBt>
          <P>운동 기록 추가</P>
        </Add>
        <Add>
          <AddBt>
            <BtImg src={buttonplus}></BtImg>
          </AddBt>
          <P>식단 기록 추가</P>
        </Add>
      </NoteAddGrid>
    </RecordGrid>
    </>
   
  );
};

export default Record;
