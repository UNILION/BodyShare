import styled from "styled-components";
import Button from "components/commons/Button";
import plus from "assets/Img/buttonplus.png";
import bannerPic from "assets/Img/card_image2.png";
import next from "assets/Img/circletgo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
  background-color: rgba(0, 0, 0, 0.3);
  padding: 10px 20px;
`;

const MiddleContainer = styled.div`
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

const Targets = styled.div``;

const TargetTop = styled.div`
  background-color: rgba(85, 111, 2555, 0.3);
  border-radius: 15px;
  line-height: 30px;
  padding-left: 10px;
  font-weight: bold;
`;

const TargetLists = styled.div``;

const TargetList = styled.div``;

const TargetListTop = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-content: space-between;
  border-radius: 15px 15px 0 0;
  background-color: ${(props) =>
    props.select ? "rgba(85, 111, 255, 0.7)" : "rgba(85, 111, 255, 0.2)"};
  margin-top: 10px;
`;

const TargetListTitle = styled.div`
  color: #556fff;
  font-size: 15px;
  font-weight: bold;
  line-height: 30px;
  padding-left: 15px;
`;

const Next = styled.img`
  margin-left: auto;
  width: 30px;
  height: 30px;
  cursor: pointer;
  padding-right: 10px;
  transform: ${(props) => (props.click ? "rotate(-90deg)" : "rotate(90deg)")};
  transform-origin: 15px 15px;
  transition: all 0.3s linear;
`;

const DropDown = styled.div`
  position: relative;
  overflow: hidden;
  z-index: 1;
`;

const TargetListMiddle = styled.div`
  background-color: rgba(85, 111, 255, 0.1);
  display: ${(props) => (props.first < 1 ? "none" : "")};

  @keyframes dropdown1 {
    0% {
      transform: translateY(-100%);
      display: none;
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes dropdown2 {
    0% {
      transform: translateY(0);
      display: ${(props) => (props.first < 2 ? "none" : "")};
    }
    100% {
      transform: translateY(-100%);
      display: none;
    }
  }
  animation: ${(props) =>
    props.click ? "dropdown1 0.4s ease" : "dropdown2 0.4s ease forwards"};
`;

const MiddleDetail = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-content: space-between;
  padding: 10px 5px;
`;

const MiddleTitle = styled.div`
  margin-left: 10px;
`;

const MiddleTime = styled.div`
  margin-left: auto;
  margin-right: 10px;
`;

const Middle = function () {
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [select1, setSelect1] = useState(false);
  const [select2, setSelect2] = useState(false);
  const [select3, setSelect3] = useState(false);
  const [first, setFirst] = useState(0);
  const navigate = useNavigate();
  return (
    <>
      <MiddleContainer>
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

        <Targets>
          <TargetTop>기록 불러오기</TargetTop>
          <TargetLists>
            <TargetList>
              <TargetListTop select={select1}>
                <TargetListTitle onClick={() => setSelect1(!select1)}>
                  9월 16일 토
                </TargetListTitle>
                <Next
                  src={next}
                  click={click1}
                  onClick={() => {
                    setClick1(!click1);
                    setFirst(first + 1);
                  }}
                />
              </TargetListTop>
              <DropDown>
                <TargetListMiddle
                  first={first}
                  click={click1}
                  onClick={() => setSelect1(!select1)}
                >
                  <MiddleDetail>
                    <MiddleTitle>유산소 | 달리기</MiddleTitle>
                    <MiddleTime>30분</MiddleTime>
                  </MiddleDetail>
                  <MiddleDetail>
                    <MiddleTitle>유산소 | 조깅</MiddleTitle>
                    <MiddleTime>20분</MiddleTime>
                  </MiddleDetail>
                  <MiddleDetail>
                    <MiddleTitle>유산소 | 마라톤</MiddleTitle>
                    <MiddleTime>100분</MiddleTime>
                  </MiddleDetail>
                </TargetListMiddle>
              </DropDown>
            </TargetList>

            <TargetList>
              <TargetListTop select={select2}>
                <TargetListTitle onClick={() => setSelect2(!select2)}>
                  9월 17일 일
                </TargetListTitle>
                <Next
                  src={next}
                  click={click2}
                  onClick={() => {
                    setClick2(!click2);
                    setFirst(first + 1);
                  }}
                />
              </TargetListTop>
              <DropDown>
                <TargetListMiddle first={first} click={click2}>
                  <MiddleDetail>
                    <MiddleTitle>근력 | 스쿼트</MiddleTitle>
                    <MiddleTime>30분</MiddleTime>
                  </MiddleDetail>
                  <MiddleDetail>
                    <MiddleTitle>근력 | 데드리프트</MiddleTitle>
                    <MiddleTime>20분</MiddleTime>
                  </MiddleDetail>
                  <MiddleDetail>
                    <MiddleTitle>근력 | 파워리프팅</MiddleTitle>
                    <MiddleTime>10분</MiddleTime>
                  </MiddleDetail>
                </TargetListMiddle>
              </DropDown>
            </TargetList>

            <TargetList>
              <TargetListTop select={select3}>
                <TargetListTitle onClick={() => setSelect3(!select3)}>
                  9월 18일 월
                </TargetListTitle>
                <Next
                  src={next}
                  click={click3}
                  onClick={() => {
                    setClick3(!click3);
                    setFirst(first + 1);
                  }}
                />
              </TargetListTop>
              <DropDown>
                <TargetListMiddle
                  first={first}
                  click={click3}
                  onClick={() => setSelect3(!select3)}
                >
                  <MiddleDetail>
                    <MiddleTitle>기타 | 수영</MiddleTitle>
                    <MiddleTime>70분</MiddleTime>
                  </MiddleDetail>
                  <MiddleDetail>
                    <MiddleTitle>기타 | 농구</MiddleTitle>
                    <MiddleTime>20분</MiddleTime>
                  </MiddleDetail>
                  <MiddleDetail>
                    <MiddleTitle>기타 | 축구</MiddleTitle>
                    <MiddleTime>100분</MiddleTime>
                  </MiddleDetail>
                </TargetListMiddle>
              </DropDown>
            </TargetList>
          </TargetLists>
        </Targets>
      </MiddleContainer>

      <Button
        name="글쓰기"
        img={plus}
        ml="auto"
        mb="10px"
        width="150px"
        display="block"
        onClick={() => navigate("/community/commuIn")}
      />
    </>
  );
};

export default Middle;
