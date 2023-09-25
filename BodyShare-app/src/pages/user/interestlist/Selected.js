import styled from "styled-components";
import SelectedItem from "pages/user/interestlist/SelectedItem";

const Div = styled.div`
  grid-row: 6;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 300px;
  height: 25px;
  margin: 0 auto;
`;

const Selected = function ( { selectedList, changeSelected }) {
  const list = selectedList.map(record => {
    return (
      <SelectedItem key={record.no} record={record} selectedList={selectedList} changeSelected={changeSelected}/>
    );
  });
  return (
    <Div>
      {list}
    </Div>
  );
};

export default Selected;