import styled from "styled-components";
import CardImage1 from "assets/Img/card_image1.png";
import CardImage2 from "assets/Img/card_image2.png";
import Card from "components/commons/Card";
import { Link, useNavigate } from "react-router-dom";

const CommunityDiv = styled.div`
  grid-row: 3;
  width: 370px;
  height: 305px;
  border-radius: 30px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.25);
  margin: 10px auto 0 auto;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  display: grid;
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
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const CommunityRecommend = styled.div`
  margin: 0 auto;
`;

const CommunityRecommend2 = styled.div`
  margin: 0 auto;
`;

const CommunityRe = function () {
  const navigate = useNavigate();

  /*
const CommunityCharts = function () {
  const navigate = useNavigate();
  const [communityChartData1, setCommunityChartData1] = useState([]);
  const [communityChartData2, setCommunityChartData2] = useState([]);

  // 여기에 useEffect를 사용하여 데이터를 가져오는 로직을 작성하면 됩니다.

  return (
    <ChartBox>
      {communityChartData1.map((chartData, index) => (
        <ChartContainer
          key={index}
          onClick={() => {
            navigate(`/community/chart1/${chartData.id}`);
          }}
        >
          <Chart
            chartType="LineChart"
            width="170px"
            height="240px"
            data={chartData.data}
            options={chartData.options}
            graph_id={`community-chart1-${chartData.id}`}
            border-radius="30px"
          />
        </ChartContainer>
      ))}

      {communityChartData2.map((chartData, index) => (
        <ChartContainer
          key={index}
          onClick={() => {
            navigate(`/community/chart2/${chartData.id}`);
          }}
        >
          <Chart
            chartType="BarChart"
            width="170px"
            height="240px"
            data={chartData.data}
            options={chartData.options}
            graph_id={`community-chart2-${chartData.id}`}
            border-radius="30px"
          />
        </ChartContainer>
      ))}
    </ChartBox>
  );
};

export default CommunityCharts;
*/

  return (
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
  );
};
export default CommunityRe;
