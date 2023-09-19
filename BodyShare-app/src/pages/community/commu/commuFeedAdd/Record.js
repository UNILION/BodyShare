import styled from "styled-components";
import next from "assets/Img/circletgo.png";
import { useState } from "react";

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
  grid-template-columns: 8fr 1fr;
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

const Explan = styled.div`
  font-size: 13px;
  padding-left: 15px;
  margin-top: 5px;
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

const Record = function () {
  const [click, setClick] = useState({
    click1: false,
    click2: false,
    click3: false,
  });
  const [select, setSelect] = useState({
    select1: false,
    select2: false,
    select3: false,
  });
  const [first, setFirst] = useState(0);

  return (
    <Targets>
      <TargetTop>기록 불러오기 (선택, 최대 1개)</TargetTop>
      <Explan>3일 이내의 기록 중 하루를 클릭해주세요</Explan>
      <TargetLists>
        <TargetList>
          <TargetListTop select={select["select1"]}>
            <TargetListTitle
              onClick={() =>
                setSelect((prevState) => ({
                  ["select1"]: !prevState["select1"],
                }))
              }
            >
              9월 16일 토
            </TargetListTitle>
            <Next
              src={next}
              click={click["click1"]}
              onClick={() => {
                setClick((prevState) => ({
                  ...prevState,
                  ["click1"]: !prevState["click1"],
                }));
                setFirst(first + 1);
              }}
            />
          </TargetListTop>
          <DropDown>
            <TargetListMiddle
              first={first}
              click={click["click1"]}
              onClick={() =>
                setSelect((prevState) => ({
                  ["select1"]: !prevState["select1"],
                }))
              }
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
          <TargetListTop select={select["select2"]}>
            <TargetListTitle
              onClick={() =>
                setSelect((prevState) => ({
                  ["select2"]: !prevState["select2"],
                }))
              }
            >
              9월 17일 일
            </TargetListTitle>
            <Next
              src={next}
              click={click["click2"]}
              onClick={() => {
                setClick((prevState) => ({
                  ...prevState,
                  ["click2"]: !prevState["click2"],
                }));
                setFirst(first + 1);
              }}
            />
          </TargetListTop>
          <DropDown>
            <TargetListMiddle first={first} click={click["click2"]}>
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
          <TargetListTop select={select["select3"]}>
            <TargetListTitle
              onClick={() =>
                setSelect((prevState) => ({
                  ["select3"]: !prevState["select3"],
                }))
              }
            >
              9월 18일 월
            </TargetListTitle>
            <Next
              src={next}
              click={click["click3"]}
              onClick={() => {
                setClick((prevState) => ({
                  ...prevState,
                  ["click3"]: !prevState["click3"],
                }));
                setFirst(first + 1);
              }}
            />
          </TargetListTop>
          <DropDown>
            <TargetListMiddle
              first={first}
              click={click["click3"]}
              onClick={() => setSelect(!select["select3"])}
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
  );
};

export default Record;
