import { useEffect, useState } from "react";
import styled from "styled-components";
import InterestHome from "pages/community/commu/commuHome/InterestHome"
import PopularHome from "pages/community/commu/commuHome/PopularHome"
import Search from "assets/Img/buttonsearch.png"
import Plus from "assets/Img/buttonplus.png"
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "recoil/themeRecoil";

const Container = styled.div``;

const Tab = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  width: 100%;
  margin: 0px 0 15px 0;
  font-weight: bold;
`;

const Tab1 = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  border-radius: 23px 23px 0 0;
  background-color: ${(props) => props.bg};
  border-bottom: ${(props) => props.under};
  cursor: pointer;
`;

const Tab2 = styled.div`
  display: grid;
  place-items: center;
  margin: 0 auto;
  width: 100%;
  border-radius: 23px 23px 0 0;
  background-color: ${(props) => props.bg};
  border-bottom: ${(props) => props.under};
  cursor: pointer;
`;

const Text = styled.span`
  color: ${(props) => props.color};
  margin-bottom: 3px;
  font-weight: bolder;

  &:hover{
   color:"#556FFF";
  }
`;

const Img = styled.img`
  display: grid;
  align-items: end;
  margin-top: 10px;
  margin-left: auto;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const CommuHome = function () {
  const [Interest, setInterest] = useState(true);
  const [Popular, setPopular] = useState(false);
  const navigate = useNavigate();
  const isDarkMode = useRecoilValue(isDarkAtom);

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
          <Text color={isDarkMode ? (Interest ? "#556FFF" : "rgba(255,255,255,0.8)") : (Interest ? "#556FFF" : "rgba(0,0,0,0.2)")}>관심사 추천</Text>
        </Tab1>
        <Tab2
          onClick={showPopular}
          under={Popular ? "3px solid rgba(85, 111, 255,0.5)" : ""}
        >
          <Text color={isDarkMode ? (Popular ? "#556FFF" : "rgba(255,255,255,0.8)") : (Popular ? "#556FFF" : "rgba(0,0,0,0.2)")}>인기 추천</Text>
        </Tab2>
        <Img src={Search} onClick={() => navigate("/community/search")} />
      </Tab>
      {Interest ? <InterestHome /> : null}
      {Popular ? <PopularHome /> : null}
      <Img src={Plus} onClick={() => navigate("/community/communityAdd")} />
    </Container>
  );
};

export default CommuHome;
