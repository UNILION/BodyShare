import styled from "styled-components";
import xbutton from "assets/Img/xbutton.png";

const SelectedDiv = styled.div`
  
`;

const Select = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

`;

const SelectCircle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 23px;
  border-radius: 23px;
  background-color: rgba(85, 111, 255, 0.3);
`;

const SelectP = styled.p`
  font-size: 11px;
  font-weight: bold;
  color: #656565;
`;
const DeleteButtonDiv = styled.div`
  width: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Xbutton = styled.img`
  width: 25px;
  height: 25px;
  background-color: rgba(85, 111, 255, 0.3);
  border-radius: 15px;
  margin-left: 3px;
  cursor: pointer;
`;

const SelectedItem = function ({ record, selectedList, changeSelected }) {
  console.log(record);

  const handleButtonClick = () => {
    const temp = [...selectedList].filter(item => item.no !== record.no );
    changeSelected(temp);
  };

  return (
    < SelectedDiv >
      <Select>
        <SelectCircle>
          <SelectP>{record.name}</SelectP>
        </SelectCircle>
        <DeleteButtonDiv>
          <Xbutton src={xbutton} onClick={handleButtonClick}></Xbutton>
        </DeleteButtonDiv>
      </Select>
    </SelectedDiv >
  );
};

export default SelectedItem;