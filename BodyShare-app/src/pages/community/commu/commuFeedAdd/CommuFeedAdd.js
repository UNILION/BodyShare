import styled from "styled-components";
import Top from "./Top";
import Middle from "./Middle";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  padding: 0 20px;
`;

const CommuFeedAdd = function () {
  const location = useLocation();
  const commuNo = location.pathname.split("/")[3];
  return (
    <Container>
      <Top commuNo = {commuNo}/>
      <Middle />
    </Container>
  );
};

export default CommuFeedAdd;
