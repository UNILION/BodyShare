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
  margin: 5px auto 0 auto;
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
const CommunityRe = function () {
  const navigate = useNavigate();
  const [communityData1, setCommunityData] = useState(0);
  const [communitytData2, setCommunityData2] = useState(0);

  useEffect(() => {
    const communityDataR = async () => {
      try {
        const communityResponse = await communityData1(`/community/${userNo}`); 
        const communityData = communityResponse.data;
        setCommunityData(communityData)       
      } catch (error) {
        console.error(error);
      }
   

    try {
      const communityResponse = await communityData1(`/community/${userNo}`); 
      const communityData = communityResponse2.data;
      setCommunityDat2(communityData)       
    } catch (error) {
      console.error(error);
    }
  };

    communityDataR();
  }, []);
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
            title="요가 아무나 오세요"
            contents="요가에 재미를 붙이셨네요 :)"
            footer="2023년 9월 16일"
          />
        </CommunityRecommend>
        <CommunityRecommend2
          onClick={() => {
            navigate("/community");
          }}
        >
          <Card
            img={CardImage2}
            title="클라이밍 아무나 오세요"
            contents="클라이밍에 재미를 붙이셨네요 :)"
            footer="2023년 9월 15일"
          />
        </CommunityRecommend2>
      </PostDiv>
    </CommunityDiv>
  );
};
export default CommunityRe;
