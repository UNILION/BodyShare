import styled from "styled-components";

const SelectedDiv = styled.div`

`;

const Select = styled.div`
  display: grid;
  grid-template-columns: auto;

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

const CateItem = function ({record}) {
  if (!record || typeof record.name === 'undefined') {
    return null; // 'record'가 정의되지 않았거나 'name' 속성이 없는 경우 처리
  }
  return (
    < SelectedDiv >
      <Select>
        <SelectCircle>
          <SelectP>{record.name}</SelectP>
        </SelectCircle>
      </Select>
    </SelectedDiv >
  );
};

export default CateItem;