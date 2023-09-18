import styled from "styled-components";
import ChartBox from "pages/home/chart/Chart";
import Record from "pages/home/record/Record";
import CommunityRe from "pages/home/communityre/CommunityRe";

const Container = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr;
  gap: 10px;
  text-align: center;
`;

const MainHome = function () {
  return (
    <Container>
      <Record />
      <ChartBox />
      <CommunityRe />
    </Container>
  );
};

export default MainHome;
