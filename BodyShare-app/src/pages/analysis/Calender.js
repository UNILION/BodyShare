import styled from "styled-components";

const Calender = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  /* grid-template-rows: repeat(9, 1fr);  */
  height: 270px;
  gap: 10px;
  background-color: #556FFF; 
  border-radius: 15px;
  margin-bottom: 5px; 
`;
const Note = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  background-color: white;
  border: 1px solid rgba(135, 135, 135, 0.3);
  border-radius: 15px;
  margin-bottom: 5px; 
`;
const TitleDate = styled.div`
    background-color: rgba(85, 111, 255, 0.3); 
    border-radius: 15px 15px 0 0;
`;
const SportNote = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr auto;
`;

const FoodNote = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr auto;
`;
const NoteAdd = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  align-items: start;
`;
const SportAdd = styled.div`
  text-align: left; 
  border-radius: 15px;
  height: 45px;
  padding: 10px;
  background-color: rgba(85, 111, 255, 0.3);
`;
const FoodAdd = styled.div`
  text-align: left; 
  border-radius: 15px;
  height: 45px;
  padding: 10px;
  background-color: rgba(85, 111, 255, 0.3);
`;
const AddBt = styled.button`
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
    text-align: left;
`;

const Record = function() {
  return (
    <>
      <Calender></Calender>
      <Note>
        <TitleDate>9월 7일 목</TitleDate>
        <SportNote></SportNote>
        <FoodNote></FoodNote>
      </Note>
      <NoteAdd>
        <SportAdd>
            <AddBt>+</AddBt>
        </SportAdd>
        <FoodAdd>
            <AddBt>+</AddBt>
        </FoodAdd>
      </NoteAdd>
      <Outlet />
    </>
  );
};


export default Record;