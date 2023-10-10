import styled from "styled-components";

const SelectedDiv = styled.div``;

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

const Cover = styled.div`
  background-color: white;
  border-radius: 15px;
  width: 56px;
  height: 23px;
`

const SelectionItem = function ({ record }) {
  return (
    < SelectedDiv >
      <Select>
        <Cover>
          <SelectCircle>
            <SelectP>{record.name}</SelectP>
          </SelectCircle>
        </Cover>
      </Select>
    </SelectedDiv >
  );
};

export default SelectionItem;