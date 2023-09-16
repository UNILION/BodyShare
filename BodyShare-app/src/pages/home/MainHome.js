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
  margin: 10px auto 5px auto;
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
  height: 280px;
  border-radius: 30px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.25);
  margin: 0 auto;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  display: flex;
  place-items: center;
`;

const ChartContainer1 = styled.div`
  width: 185px;
  height: 270px;
  background-color: white;
  border-radius: 30px;
  border: 1px solid rgba(135, 135, 135, 0.3);
  cursor: pointer;
  display: grid;
  place-items: center;
  margin: 0 auto;
  
`;

const ChartContainer2 = styled.div`
  width: 185px;
  height: 270px;
  background-color: white;
  border-radius: 30px;
  border: 1px solid rgba(135, 135, 135, 0.3);
  cursor: pointer;
  display: grid;
  place-items: center;
  margin: 0 auto;
  
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

const CommunityRecommend = styled.div`
  margin: 0 auto;
`;

const CommunityRecommend2 = styled.div`
  margin: 0 auto;
`;

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
      fontSize: 16,
    },
  };

  const chartData2 = [
    ["", "운동 분"],
    ["M", 60],
    ["T", 45],
    ["W", 30],
    ["T", 75],
    ["F", 90],
    ["S", 120],
    ["S", 60],
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
            navigate("/analysis/sportschart");
          }}
        >
          <Chart
            chartType="Bar"
            width="170px"
            height="240px"
            data={chartData2}
            options={chartOptions2}
            graph_id="barchart2"
            border-radius= "30px"
            
          />
        </ChartContainer1>
        <ChartContainer2
          onClick={() => {
            navigate("/analysis/foodchart");
          }}
        >
          <Chart
            chartType="PieChart"
            width="170px"
            height="240px"
            data={chartData}
            options={chartOptions}
            graph_id="donutchart"
            border-radius= "30px"
          />
        </ChartContainer2>
      </ChartBox>

      <CommunityDiv>
        <CommunityP>News</CommunityP>
        <PostDiv>
          <CommunityRecommend
            onClick={() => {
              navigate("/community");
            }}
          >
            <Card
              img={CardImage1}
              title="관심사 요가 게시물"
              contents="요가에 재미를 붙이셨네요 :)"
              tagName="요가"
              footer="96명의 회원이 가입함"
            />
          </CommunityRecommend>
          <CommunityRecommend2
            onClick={() => {
              navigate("/community");
            }}
          >
            <Card
              img={CardImage2}
              title="클라이밍 게시물"
              contents="클라이밍에 재미를 붙이셨네요 :)"
              tagName="클라이밍"
              footer="196명의 회원이 가입함"
            />
          </CommunityRecommend2>
        </PostDiv>
      </CommunityDiv>
    </Container>
  );
};

export default Index;
