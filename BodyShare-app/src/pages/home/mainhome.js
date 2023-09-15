import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Chart } from 'react-google-charts';
import Card from '../../components/commons/Card';
import Tag from '../../components/commons/Tag';

const Container = styled.div`
  width: 390px;
  height: 844px;
  display: grid;
  grid-template-rows: auto 1fr auto; /* 상단, 중간, 하단 */
  grid-template-columns: 1fr; 
  gap: 10px; 
`;

const TopSection = styled.div`
  grid-row: 1 / 2; /* 상단 */
  text-align: center;
  padding: 60px;
`;

const MiddleSection = styled.div`
  grid-row: 2 / 3; /* 중간 */
  display: grid;
  grid-template-columns: 1fr 1fr; /* 좌측과 우측 */
  gap: 15px; /* 그리드 간격 */
  justify-content: center;
`;

const BottomSection = styled.div`
  grid-row: 3 / 3; /* 하단  */
  text-align: center;
  padding: 20px;
  display: flex;
`;

const ChartContainer1 = styled.div`
  flex: 1;
  padding-right: 10px;
`;

const ChartContainer2 = styled.div`
  flex: 1;
  padding-right: 10px;
`;

const Logo = styled.img``;

const Record = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const RecordInner1 = styled.div`
  width: 250px;
  height: 40px;
  border-radius: 20px;
  background-color: #ffffff;
  border: 1px solid #878787;
  opacity: 0.3;
  display: flex;
`;

const RecordText = styled.p`
  width: 250px;
  height: 40px;
  border-radius: 0px;
  background-color: #ffffff;
  opacity: 0.3;
  display: flex;
  align-items: center;
  justify-content: flex-start; /* 왼쪽 정렬 */
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  color: black;
`;

const RecordButton = styled(Link)`
  width: 40px;
  height: 40px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  background-color: #556fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: white;
  cursor: pointer;
  justify-self: flex-end; /* 오른쪽 정렬 */
`;

const CommunityRecommend = styled.div`
  flex: 1;
  padding-right: 10px;
`;

const CommunityRecommend2 = styled.div`
  flex: 1;
  padding-right: 10px;
`;

const Index = function () {
  const chartData = [
    ['작업', '하루 시간'],
    ['탄수화물', 3],
    ['단백질', 5],
    ['지방', 2],
  ];

  const chartOptions = {
    title: '내 일일 활동',
    pieHole: 0.4,
    titleTextStyle: {
      fontSize: 18,
    },
  };

  const chartData2 = [
    ['요일', '운동 분'],
    ['월', 60],
    ['화', 45],
    ['수', 30],
    ['목', 75],
    ['금', 90],
    ['토', 120],
    ['일', 60],
  ];

  const chartOptions2 = {
    legend: { position: 'none' },
    chart: {
      title: '주간 운동 시간 비교',
    },
  };

  return (
    <Container>
      <Logo></Logo>
      <TopSection>
        <Record>
          <RecordInner1>
            <RecordText>오늘의 기록 0건</RecordText>
            <RecordButton to="/analysis">{'>'}</RecordButton>
          </RecordInner1>
        </Record>
      </TopSection>

      <MiddleSection>
        <ChartContainer1>
          <Chart
            chartType="Bar"
            width="220px"
            height="300px"
            data={chartData2}
            options={chartOptions2}
            graph_id="barchart2"
          />
        </ChartContainer1>
        <ChartContainer2>
          <Chart
            chartType="PieChart"
            width="180px"
            height="300px"
            data={chartData}
            options={chartOptions}
            graph_id="donutchart"
          />
        </ChartContainer2>
      </MiddleSection>
      <BottomSection>
        <CommunityRecommend>
          <Card
            title="커뮤니티 명"
            contents="커뮤니티에 대한 간단한 설명"
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
            title="커뮤니티 명"
            contents="커뮤니티에 대한 간단한 설명"
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
      </BottomSection>
    </Container>
  );
};

export default Index;
