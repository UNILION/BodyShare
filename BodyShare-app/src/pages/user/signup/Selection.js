import styled from "styled-components";
import SelectionItem from "pages/user/signup/SelectionItem";

const Div = styled.div`
  grid-row: 4;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 300px;
  height: 25px;
  margin: 0 auto;
`;

const Selection = function ({usersList}) {
  if (!usersList || usersList.length === 0) {
    return null; // 또는 다른 적절한 처리
  }

  const list = usersList.map(record => {
    return (
      <SelectionItem key={record.no} record={record} />
    );
  });
  return (
    <Div>
      {list}
    </Div>
  );
};

export default Selection;