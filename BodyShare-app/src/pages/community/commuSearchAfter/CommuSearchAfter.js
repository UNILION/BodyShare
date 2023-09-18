import styled from "styled-components";
import Top from "./Top";
import Middle from "./Middle";

const Container = styled.div`
  padding: 20px;
`;

const CommuSearchAfter = function () {
  return (
    <Container>
      <Top />
      <Middle />
    </Container>
  );
};

export default CommuSearchAfter;
