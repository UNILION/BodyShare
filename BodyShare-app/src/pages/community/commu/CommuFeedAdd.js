import styled from "styled-components";
import previous from "../../../assets/Img/Previous.png";
import Button from "../../../components/commons/Button";
import plus from "../../../assets/Img/buttonplus.png";
import bannerPic from "../../../assets/Img/card_image2.png";
import { useNavigate } from "react-router-dom";
import next from "../../../assets/Img/circletgo.png"

const Container = styled.div`
  padding: 0 20px;
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Previous = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const TopRight = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const TopTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

const TopContent = styled.div`
  font-size: 13px;
  margin-top: 5px;
`;

const BannerPic = styled.div`
  width: 100%;
  height: 100px;
  overflow: hidden;
  position: relative;
`;

const Banner = styled.img`
  position: absolute;
  width: 100%;
  top: -100px;
`;

const Text = styled.div`
  position: absolute;
  top: 20px;
  left: 10px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  background-color: rgba(0,0,0,0.3);
  padding: 10px 20px;
`;

const Middle = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 20px;
  margin-bottom: 30px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin: 10px 0 10px 0;
`;

const Content = styled.textarea`
  width: 310px;
  height: 50px;
  font-size: 15px;
  border: 1px solid rgba(46, 44, 61, 0.3);
  border-radius: 15px;
  text-align: center;
  padding: 5px 20px;
`;

const Picture = styled.div`
  height: 350px;
  height: 60px;
  border: 1px dotted black;
  border-radius: 15px;
  text-align: center;
  padding-left: 50px;
  line-height: 60px;
`;

const Profile = styled.div``;

const FeedTitle = styled.div``;

const FeedContent = styled.div``;

const Target = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.1fr;
  width: 100%;
  background-color: rgba(85,111,255,0.3);
  border-radius: 15px;
`;

const TargetTitle = styled.div`
  line-height: 30px;
  padding-left: 10px;
  font-weight: bold;
`;

const Next = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  padding-right: 10px;
`;

const CommuFeedAdd = function () {
  const navigate = useNavigate();
  return (
    <Container>
      <Top>
        <Previous
          src={previous}
          alt="뒤로가기"
          onClick={() => navigate("/community")}
        />
        <TopRight>
          <TopTitle>커뮤니티 피드 쓰기</TopTitle>
          <TopContent>
            오늘 나에게 어떤 일이 있었는지 커뮤니티 사람들과 공유해주세요! 😛
          </TopContent>
        </TopRight>
      </Top>

      <Middle>
        <BannerPic>
          <Banner src={bannerPic} />
          <Text>클라이밍 동아리</Text>
        </BannerPic>

        <Profile>
          <Title>피드 사진 추가하기</Title>
          <Picture>
            <input type="file" accept="image/jpg, image/png, image/jpeg" />
          </Picture>
        </Profile>

        <FeedTitle>
          <Title>피드 제목 추가하기</Title>
          <Content placeholder="나의 피드에 제목을 붙여주세요!"></Content>
        </FeedTitle>

        <FeedContent>
          <Title>오늘 무슨 일이 있었나요?</Title>
          <Content
            placeholder="나의 피드를 설명해주세요!
        (최대 60글자)"
          ></Content>
        </FeedContent>

        <Target>
          <TargetTitle>기록 불러오기</TargetTitle>
          <Next src={next} />
        </Target>
      </Middle>

      <Button
        name="글쓰기"
        img={plus}
        ml="auto"
        mb="10px"
        width="150px"
        display="block"
        onClick={() => navigate("/community/commuIn")}
      />
    </Container>
  );
};

export default CommuFeedAdd;
