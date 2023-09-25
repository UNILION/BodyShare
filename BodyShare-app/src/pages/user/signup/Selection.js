import styled from "styled-components";
import xbutton from "assets/Img/xbutton.png";

const SelectedDiv = styled.div`
  grid-row: 4;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 300px;
  height: 25px;
  margin: 0 auto;
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

const Selection = function () {
  return (
    <SelectedDiv>
      <Select>
        <SelectCircle>
          <SelectP>요가</SelectP>
        </SelectCircle>
        <DeleteButtonDiv>
          <Xbutton src={xbutton} ></Xbutton>
        </DeleteButtonDiv>
      </Select>
      <Select>
        <SelectCircle>
          <SelectP>수영</SelectP>
        </SelectCircle>
        <DeleteButtonDiv>
          <Xbutton src={xbutton}></Xbutton>
        </DeleteButtonDiv>
      </Select>
      <Select>
        <SelectCircle>
          <SelectP>달리기</SelectP>
        </SelectCircle>
        <DeleteButtonDiv>
          <Xbutton src={xbutton}></Xbutton>
        </DeleteButtonDiv>
      </Select>
    </SelectedDiv>
  );
};

export default Selection;