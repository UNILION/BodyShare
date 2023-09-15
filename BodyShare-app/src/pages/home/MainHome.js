import styled from "styled-components";
import { Link } from "react-router-dom";
import { Chart } from "react-google-charts";
import Card from "../../components/commons/Card";
import CardImage1 from "../../assets/Img/card_image1.png";
import CardImage2 from "../../assets/Img/card_image2.png";
import CircleImg from "../../assets/Img/circletgo.png";

const Container = styled.div`
  width: 390px;
  height: 711px;
  display: grid;
  grid-template-rows: auto auto 1fr;
  gap: 10px;
  text-align: center;
`;

const Record = styled.div`
  grid-row: 1;
  width: 370px;
  height: 60px;
  margin: 20px auto 15px auto;
  border-radius: 30px;
  border: 1px solid rgba(135, 135, 135, 0.3);
  background-color: #ffffff;
  text-align: center;
`;

const RecordInner1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RecordText = styled.p`
  width: 315.87px;
  height: 31px;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  color: #878787;
  padding-top: 8px;
  padding-left: 15px;
`;

const RecordButton = styled(Link)`
  width: 67.13px;
  height: 60px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  background-color: #556fff;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonImg = styled.img`
  width: 34.62px;
  height: 34px;
`;

const ChartBox = styled.div`
  grid-row: 2;
  width: 380px;
  border-radius: 30px;
  background-color: #ffffff;
  border: 1px solid #878787;
  margin: 0 auto;
  display: flex;

`;

const ChartContainer1 = styled.div`
  padding-right: 10px;
`;

const ChartContainer2 = styled.div`
`;

const CommunityDiv = styled.div`
  grid-row: 3;
  display: flex;
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
    ["지", 2]
  ];

  const chartOptions = {
    title: "Calorie",
    pieHole: 0.4,
    titleTextStyle: {
      fontSize: 18,
    }
  };

  const chartData2 = [
    ["", "운동 분"],
    ["월", 60],
    ["화", 45],
    ["수", 30],
    ["목", 75],
    ["금", 90],
    ["토", 120],
    ["일", 60]
  ];

  const chartOptions2 = {
    legend: { position: "none" },
    chart: {
      title: "Daily Diet",
    }
  };

  return (
    <Container>
      <Record>
        <RecordInner1>
          <RecordText>오늘의 기록 0건</RecordText>
          <RecordButton to="/analysis">
            <ButtonImg src={CircleImg}></ButtonImg>
          </RecordButton>
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

      <CommunityDiv>
        <CommunityRecommend>
          <Card
            img={CardImage1}
            title="News"
            contents="커뮤니티에 News 및 소식"
            tagName="요가"
            footer="TEST"
          />
        </CommunityRecommend>
        <CommunityRecommend2>
          <Card
            img={CardImage2}
            title="News"
            contents="커뮤니티에 News 및 소식"
            tagName="요가"
            footer="TEST"
          />
        </CommunityRecommend2>
      </CommunityDiv>
    </Container>
  );
};

export default Index;
