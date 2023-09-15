import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
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
  cursor: pointer;
`;

const ChartBox = styled.div`
  grid-row: 2;
  width: 380px;
  height: 261px;
  border-radius: 30px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.25);
  margin: 0 auto;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChartContainer1 = styled.div`
  width: 205px;
  height: 240px;
  background-color: white;
  border-radius: 15px;
  border: 1px solid rgba(135, 135, 135, 0.3);
  cursor: pointer;
`;

const ChartContainer2 = styled.div`
  width: 155px;
  height: 240px;
  background-color: white;
  border-radius: 15px;
  border: 1px solid rgba(135, 135, 135, 0.3);
  cursor: pointer;
`;

const CommunityDiv = styled.div`
  grid-row: 3;
  width: 380px;
  height: 305px;
  border-radius: 30px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.25);
  margin: 10px auto 0 auto;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  display: grid;
  grid-template-rows: auto auto;
`;

const CommunityP = styled.p`
  grid-row: 1;
  text-align: left;
  font-weight: bold;
  font-size: 16px;
  padding-top: 15px;
  padding-left: 15px;
`;

const PostDiv = styled.div`
  grid-row: 2;
  display: flex;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CommunityRecommend = styled.div``;

const CommunityRecommend2 = styled.div``;

const Index = function () {
  const navigate = useNavigate();

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
      <Record>
        <RecordInner1>
          <RecordText>오늘의 기록 0건</RecordText>
          <RecordButton to="/analysis">
            <ButtonImg src={CircleImg}></ButtonImg>
          </RecordButton>
        </RecordInner1>
      </Record>

      <ChartBox>
        <ChartContainer1
          onClick={() => {
            navigate("/analysis");
          }}
        >
          <Chart
            chartType="Bar"
            width="220px"
            height="240px"
            data={chartData2}
            options={chartOptions2}
            graph_id="barchart2"
          />
        </ChartContainer1>
        <ChartContainer2
          onClick={() => {
            navigate("/analysis");
          }}
        >
          <Chart
            chartType="PieChart"
            width="160px"
            height="240px"
            data={chartData}
            options={chartOptions}
            graph_id="donutchart"
          />
        </ChartContainer2>
      </ChartBox>

      <CommunityDiv>
        <CommunityP>News</CommunityP>
        <PostDiv>
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
        </PostDiv>
      </CommunityDiv>
    </Container>
  );
};

export default Index;
