import { useEffect, useState } from "react";
import styled from "styled-components";
import InterestHome from "./InterestHome"
import PopularHome from "./PopularHome"
import Search from "../../../assets/Img/buttonsearch.png"
import Plus from "../../../assets/Img/buttonplus.png"

const Container = styled.div``;

const Tab = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  width: 100%;
  margin: 20px 0 15px 0;
  cursor: pointer;
  font-weight: bold;
`;

const Tab1 = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  border-radius: 23px 23px 0 0;
  background-color: ${(props) => props.bg};
  border-bottom: ${(props) => props.under};
`;

const Tab2 = styled.div`
  display: grid;
  place-items: center;
  margin: 0 auto;
  width: 100%;
  border-radius: 23px 23px 0 0;
  background-color: ${(props) => props.bg};
  border-bottom: ${(props) => props.under};
`;

const Text = styled.span`
  color: ${(props) => props.color};
  margin-bottom: 3px;
  font-weight: bolder;

  &:hover{
    color: #556FFF;
  }
`;

const Img = styled.img`
  display: grid;
  align-items: end;
  margin-left: auto;
  width: 50px;
  height: 50px;
`


const CommuHome = function () {
  const [Interest, setInterest] = useState(true);
  const [Popular, setPopular] = useState(false);

  const showInterest = async () => {
    setInterest(true);
    setPopular(false);
  };

  const showPopular = async () => {
    setInterest(false);
    setPopular(true);
  };

  useEffect(() => {
    showInterest();
  }, []);

  return (
    <Container>
      <Tab>
        <Tab1
          onClick={showInterest}
          under={Interest ? "3px solid rgba(85, 111, 255,0.5)" : ""}
        >
          <Text color={Interest ? "#556FFF" : "rgba(0,0,0,0.2)"}>관심사 추천</Text>
        </Tab1>
        <Tab2
          onClick={showPopular}
          under={Popular ? "3px solid rgba(85, 111, 255,0.5)" : ""}
        >
          <Text
            color={Popular ? "#556FFF" : "rgba(0,0,0,0.2)"}
          >
            인기 추천
          </Text>
        </Tab2>
        <Img src={Search} />
      </Tab>
      {Interest ? <InterestHome /> : null}
      {Popular ? <PopularHome /> : null}
        <Img src={Plus} />
    </Container>
  );
};

export default CommuHome;
