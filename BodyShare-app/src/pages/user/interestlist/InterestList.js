import styled from "styled-components";
import IntroMessage from "pages/user/interestlist/IntroMessage";
import Search from "pages/user/interestlist/Search";

const Container = styled.div`
  display: grid;
  width: 390px;
  height: 696px;
  grid-template-rows: auto auto auto auto auto auto 1fr;
  gap: 10px;
`;

const InterestList = function() {
  return (
    <Container>
      <IntroMessage />

      <Search />
    </Container>
  );
  
};

export default InterestList;