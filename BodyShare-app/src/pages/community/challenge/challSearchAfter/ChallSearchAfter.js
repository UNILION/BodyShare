import styled from "styled-components";
import Top from "./Top";
import Middle from "./Middle";
import { useRecoilValue } from "recoil";
import { searchSelector } from "recoil/commuRecoil";

const Container = styled.div`
  padding: 20px;
`;

const CommuSearchAfter = function () {
  const searchItemList = useRecoilValue(searchSelector);

  return (
    <Container>
      <Top searchItemList={searchItemList}/>
      <Middle searchItemList={searchItemList}/>
    </Container>
  );
};

export default CommuSearchAfter;
