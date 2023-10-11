import styled from "styled-components";
import next from "assets/Img/circletgo.png";
import Check from "components/commons/Check";
import useCustomAxios from "components/commons/CustomAxios"
import { useRecoilValue } from "recoil";
import { userSelector } from "recoil/userRecoil";
import { useEffect, useState } from "react";
import { isDarkAtom } from "recoil/themeRecoil";

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
    (props.select) ? "rgba(85, 111, 255, 0.7)" : "rgba(85, 111, 255, 0.2)"};
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
  display: ${(props) => ((props.first < 1) ? "none" : "")};

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
      display: ${(props) => ((props.first < 2) ? "none" : "")};
    }
    100% {
      transform: translateY(-100%);
      display: none;
    }
  }
  animation: ${(props) =>
    (props.click) ? "dropdown1 0.4s ease" : "dropdown2 0.4s ease forwards"};
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

const Cover = styled.div`
  background-color: white;
  border-radius: 15px 15px 0 0;
`;

const Cover_record = styled.div`
  background-color: ${(props) => (props.isDarkMode ? ' rgba(85, 111, 255, 0.8)' : ' rgba(85, 111, 255, 0.3)')};
`;

const Record = function ({ register, setRecordDate, errors }) {
  const isDarkMode = useRecoilValue(isDarkAtom)
  const instance = useCustomAxios();
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
  const [todayList, setTodayList] = useState([])
  const [yesterdayList, setYesterdayList] = useState([])
  const [beforeYesterdayList, setBeforeYesterdayList] = useState([])
  const userNo = useRecoilValue(userSelector);
  const date = new Date();
  const today = new Date().toLocaleDateString();
  const yesterday = new Date(date.setDate(date.getDate() - 1)).toLocaleDateString();
  const beforeYesterday = new Date(date.setDate(date.getDate() - 1)).toLocaleDateString();
  let week = ["(일)", "(월)", "(화)", "(수)", "(목)", "(금)", "(토)"]
  const handleRecord = async function () {
    try {
      const recordResponse = await instance.get(
        `/record/sports/recent/${userNo}/${today}`
      );
      handleDay(recordResponse.data)
    } catch (error) {
      console.error(error);
    }
  }

  const handleDay = function (recordList) {
    const todayFilter = recordList.filter((record) => {
      return (
        record.exerciseDate === today
      )
    })

    setTodayList(todayFilter)

    const yesterdayFilter = recordList.filter((record) => {
      return (
        record.exerciseDate === yesterday
      )
    })

    setYesterdayList(yesterdayFilter)

    const beforeYesterdayFilter = recordList.filter((record) => {
      return (
        record.exerciseDate === beforeYesterday
      )
    })

    setBeforeYesterdayList(beforeYesterdayFilter)
  }

  useEffect(() => {
    handleRecord()
  }, []);

  return (
    <Targets>
      <TargetTop>기록 불러오기 (선택, 최대 1개)</TargetTop>
      <Explan>3일 이내의 기록 중 하루를 클릭해주세요</Explan>
      <TargetLists>
        <TargetList>
          <Cover>
            <TargetListTop select={select["select1"]}>
              <TargetListTitle
                onClick={() =>
                  setSelect((prevState) => ({
                    ["select1"]: !prevState["select1"],
                    ["select2"]: false,
                    ["select3"]: false,
                  }),
                    select["select1"] ? setRecordDate("NULL") : setRecordDate(beforeYesterday)
                  )
                }
              >
                {beforeYesterday} {week[new Date(beforeYesterday).getDay()]}
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
          </Cover>
          <DropDown>
            <TargetListMiddle
              first={first}
              click={click["click1"]}
              onClick={() =>
                setSelect((prevState) => ({
                  ["select1"]: !prevState["select1"],
                  ["select2"]: false,
                  ["select3"]: false,
                }),
                  select["select1"] ? setRecordDate("NULL") : setRecordDate(beforeYesterday)
                )
              }
            >
              {beforeYesterdayList ? beforeYesterdayList.map((record, idx) => (
                <Cover_record isDarkMode={isDarkMode}>
                  <MiddleDetail key={idx}>
                    <MiddleTitle>{record.sportsName}</MiddleTitle>
                    <MiddleTime>{record.exerciseTime}분</MiddleTime>
                  </MiddleDetail>
                </Cover_record>
              )) : null}
            </TargetListMiddle>
          </DropDown>
        </TargetList>

        <TargetList>
          <Cover>
            <TargetListTop select={select["select2"]}>
              <TargetListTitle
                onClick={() =>
                  setSelect((prevState) => ({
                    ["select1"]: false,
                    ["select2"]: !prevState["select2"],
                    ["select3"]: false,
                  }),
                    select["select2"] ? setRecordDate("NULL") : setRecordDate(yesterday)
                  )
                }
              >
                {yesterday} {week[new Date(yesterday).getDay()]}
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
          </Cover>
          <DropDown>
            <TargetListMiddle first={first} click={click["click2"]}
              onClick={() =>
                setSelect((prevState) => ({
                  ["select1"]: false,
                  ["select2"]: !prevState["select2"],
                  ["select3"]: false,
                }),
                  select["select2"] ? setRecordDate("NULL") : setRecordDate(yesterday)
                )
              }
            >
              {yesterdayList ? yesterdayList.map((record, idx) => (
                <Cover_record isDarkMode={isDarkMode}>
                  <MiddleDetail key={idx}>
                    <MiddleTitle>{record.sportsName}</MiddleTitle>
                    <MiddleTime>{record.exerciseTime}분</MiddleTime>
                  </MiddleDetail>
                </Cover_record>
              )) : null}
            </TargetListMiddle>
          </DropDown>
        </TargetList>

        <TargetList>
          <Cover>
            <TargetListTop select={select["select3"]}>
              <TargetListTitle
                onClick={() =>
                  setSelect((prevState) => ({
                    ["select1"]: false,
                    ["select2"]: false,
                    ["select3"]: !prevState["select3"],
                  }),
                    select["select3"] ? setRecordDate("NULL") : setRecordDate(today)
                  )
                }
              >
                {today} {week[new Date(today).getDay()]}
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
          </Cover>
          <DropDown>
            <TargetListMiddle
              first={first}
              click={click["click3"]}
              onClick={() =>
                setSelect((prevState) => ({
                  ["select1"]: false,
                  ["select2"]: false,
                  ["select3"]: !prevState["select3"],
                }),
                  select["select3"] ? setRecordDate("NULL") : setRecordDate(today)
                )
              }
            >
              {todayList ? todayList.map((record, idx) => (
                <Cover_record isDarkMode={isDarkMode}>
                  <MiddleDetail key={idx}>
                    <MiddleTitle>{record.sportsName}</MiddleTitle>
                    <MiddleTime>{record.exerciseTime}분</MiddleTime>
                  </MiddleDetail>
                </Cover_record>
              )) : null}
            </TargetListMiddle>
          </DropDown>
        </TargetList>
      </TargetLists>

      <input
        type="hidden"
        value={select["select1"]}
        {...register("record", {
          required: "한 개의 카테고리를 선택해주세요!",
        })}
      />

      <Check>{errors.record?.message}</Check>
    </Targets>
  );
};

export default Record;
