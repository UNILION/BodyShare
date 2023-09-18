import styled from "styled-components";
import Top from "./Top";
import Middle from "./Middle";

const Container = styled.div`
  padding: 10px 20px;
`;

const CommuSearch = function () {
  return (
    <Container>
      <Top />
      <Middle />
    </Container>
  );
};

export default CommuSearch;
