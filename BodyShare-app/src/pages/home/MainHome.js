import styled from "styled-components";
import { Link } from "react-router-dom";
import { Chart } from "react-google-charts";
import Card from "../../components/commons/Card";
import Tag from "../../components/commons/Tag";

const Container = styled.div`
  width: 390px;
  height: 844px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
  gap: 10px;
  text-align: center;
  padding: 60px;
`;

const ChartBox = styled.div`
  width: 380px;
  display: flex;
  align-items: left;
  border-radius: 30px;
  background-color: #ffffff;
  border: 1px solid #878787;
  margin: 0 auto;
`;

const ChartContainer1 = styled.div`
  flex: 1;
  padding-right: 10px;
`;

const ChartContainer2 = styled.div`
  flex: 1;
  padding-left: 10px;
`;

const Logo = styled.img``;

const Record = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  margin-bottom: 20px;
`;

const RecordInner1 = styled.div`
  width: 355.38px;
  display: flex;
  align-items: left;
  max-width: 400px;
  border-radius: 30px;
  background-color: #ffffff;
  border: 1px solid #878787;
  opacity: 0.3;
  margin: 0 auto;
`;

const RecordText = styled.p`
  width: 100%;
  padding: 10px;
  border-radius: 0;
  background-color: #ffffff;
  opacity: 0.3;
  font-size: 2rem;
  font-weight: bold;
  text-align: left;
  color: black;
  margin: 0;
`;

const RecordButton = styled(Link)`
  width: 67.13px;
  height: 60px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  background-color: #556fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: white;
  cursor: pointer;
  justify-content: flex-start;
`;

const CommunityRecommend = styled.div`
  margin-bottom: 10px;
`;

const CommunityRecommend2 = styled.div`
  margin-bottom: 10px;
`;

const Index = function () {
  const chartData = [
    ["작업", "하루 시간"],
    ["탄", 3],
    ["단", 5],
    ["지", 2],
  ];

  const chartOptions = {
    title: "Calorie",
    pieHole: 0.4,
    titleTextStyle: {
      fontSize: 18,
    },
  };

  const chartData2 = [
    ["", "운동 분"],
    ["월", 60],
    ["화", 45],
    ["수", 30],
    ["목", 75],
    ["금", 90],
    ["토", 120],
    ["일", 60],
  ];

  const chartOptions2 = {
    legend: { position: "none" },
    chart: {
      title: "Daily Diet",
    },
  };

  return (
    <Container>
      <Logo></Logo>

      <Record>
        <RecordInner1>
          <RecordText>오늘의 기록 0건</RecordText>
          <RecordButton to="/analysis">{">"}</RecordButton>
        </RecordInner1>
      </Record>

      <ChartBox>
        <ChartContainer1>
          <Chart
            chartType="Bar"
            width="175px"
            height="240px"
            data={chartData2}
            options={chartOptions2}
            graph_id="barchart2"
          />
        </ChartContainer1>
        <ChartContainer2>
          <Chart
            chartType="PieChart"
            width="175px"
            height="240px"
            data={chartData}
            options={chartOptions}
            graph_id="donutchart"
          />
        </ChartContainer2>
      </ChartBox>

      <div style={{ display: "flex", gap: "10px" }}>
        <CommunityRecommend>
          <Card
            title="News"
            contents="커뮤니티에 News 및 소식"
            img="이미지 URL"
            footer={
              <Tag
                tagName="태그명"
                width="56px"
                height="23px"
                color="#656565"
                bc="rgba(85,111,255, 0.3)"
                fs="11px"
                fw="bold"
                br="23px"
                border="none"
                mt="0px"
                mr="0px"
                mb="0px"
                ml="0px"
                hoverColor="#A6B2F3"
              />
            }
          />
        </CommunityRecommend>
        <CommunityRecommend2>
          <Card
            title="News"
            contents="커뮤니티에 News 및 소식"
            img="이미지 URL"
            footer={
              <Tag
                tagName="태그명"
                width="56px"
                height="23px"
                color="#656565"
                bc="rgba(85,111,255, 0.3)"
                fs="11px"
                fw="bold"
                br="23px"
                border="none"
                mt="0px"
                mr="0px"
                mb="0px"
                ml="0px"
                hoverColor="#A6B2F3"
              />
            }
          />
        </CommunityRecommend2>
      </div>
    </Container>
  );
};

export default Index;
