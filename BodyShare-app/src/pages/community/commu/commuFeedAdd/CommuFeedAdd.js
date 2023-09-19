import styled from "styled-components";
import Top from "./Top";
import Middle from "./Middle";

const Container = styled.div`
  padding: 0 20px;
`;

const CommuFeedAdd = function () {
  return (
    <Container>
      <Top />
      <Middle />
    </Container>
  );
};

export default CommuFeedAdd;
