import SearchListItem from "pages/community/commu/commuSearch/SearchListItem";
import styled from "styled-components";

const Div = styled.div`
  grid-row: 5;
  overflow: auto; /* 스크롤 가능하도록 설정 */
  text-align: center;
  max-height: 300px;
`;

const SearchList = function ({ itemList, selectedList, changeSelected }) {
  const list = itemList.map(record => {
    return (
      <SearchListItem key={record.no} record={record} selectedList={selectedList} changeSelected={changeSelected} />
    );
  });
  return (
    <Div>
      {list}
    </Div>
  );
};

export default SearchList;