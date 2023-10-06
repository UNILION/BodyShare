import styled from "styled-components";
import Top from "./Top";
import Middle from "./Middle";
import { useRecoilValue } from "recoil";
import { searchSelector } from "recoil/commuRecoil";

const Container = styled.div`
  display: grid;
  width: 390px;
  height: 600px;
  grid-template-rows: auto auto auto auto auto auto 1fr;
  gap: 10px;
`;

const CommuSearch = function () {
  const searchItemList = useRecoilValue(searchSelector);

  return (
    <Container>
      <Top />
      <Middle searchItemList={searchItemList}/>
    </Container>
  );
};

export default CommuSearch;
