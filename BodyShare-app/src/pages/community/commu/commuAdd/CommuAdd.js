import styled from "styled-components";
import previous from "assets/Img/Previous.png";
import Tag from "components/commons/Tag";
import Button from "components/commons/Button";
import xbutton from "assets/Img/xbutton.png";
import plus from "assets/Img/buttonplus.png";
import { useNavigate } from "react-router-dom";

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
  font-size: 15px;
  margin-top: 5px;
`;

const Middle = styled.div`
  display: grid;
  grid-template-rows: 0.8fr 0.8fr 0.8fr 0.8fr 1fr;
  margin-bottom: 10px;
`;

const Banner = styled.div``;

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

const CommunityTitle = styled.div``;

const CommunityContent = styled.div``;

const CommunityCategory = styled.div``;

const Check = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 10px;
`;

const Category = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 30%;
`;

const CategoryContent = styled.div`
  width: 350px;
  height: 60px;
  font-size: 15px;
  color: #878787;
  border: 1px solid rgba(46, 44, 61, 0.3);
  border-radius: 15px;
  text-align: center;
  line-height: 60px;
  cursor: pointer;
`;

const Xbutton = styled.img`
  width: 25px;
  height: 25px;
  background-color: rgba(85, 111, 255, 0.3);
  border-radius: 15px;
  margin-left: 3px;
  cursor: pointer;
`;

const CommuAdd = function () {
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
          <TopTitle>커뮤니티 만들기</TopTitle>
          <TopContent>나에게 맞는 커뮤니티를 만들어보세요! 😛</TopContent>
        </TopRight>
      </Top>

      <Middle>
        <Banner>
          <Title>배너 사진</Title>
          <Picture>
            <input type="file" accept="image/jpg, image/png, image/jpeg" />
          </Picture>
        </Banner>

        <Profile>
          <Title>프로필 사진</Title>
          <Picture>
            <input type="file" accept="image/jpg, image/png, image/jpeg" />
          </Picture>
        </Profile>

        <CommunityTitle>
          <Title>커뮤니티 명</Title>
          <Content placeholder="원하는 커뮤니티 이름을 지정해주세요!"></Content>
        </CommunityTitle>

        <CommunityContent>
          <Title>커뮤니티 설명</Title>
          <Content
            placeholder="나의 커뮤니티를 설명해주세요!
        (최대 60글자)"
          ></Content>
        </CommunityContent>

        <CommunityCategory>
          <Title>커뮤니티 카테고리</Title>
          <CategoryContent onClick={() => navigate("/community/category")}>
            1개의 카테고리를 필수로 선택해주세요!
          </CategoryContent>
          <Check>한 개의 카테고리를 선택해주세요!</Check>
          <Category>
            <Tag tagName="요가" />
            <Xbutton src={xbutton} />
          </Category>
        </CommunityCategory>
      </Middle>

      <Button
        name="만들기"
        img={plus}
        ml="auto"
        mb="10px"
        width="150px"
        display="block"
        onClick={() => navigate("/community")}
      />
    </Container>
  );
};

export default CommuAdd;
