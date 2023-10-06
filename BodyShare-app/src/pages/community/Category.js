import { useEffect, useState } from "react";
import styled from "styled-components";
import My from "./my/My";
import CommuHome from "./commu/commuHome/CommuHome";

const Container = styled.div`
  margin-bottom: 30px;
`;

const Tab = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  cursor: pointer;
  font-weight: bold;
`;

const Tab1 = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 50px;
  border-radius: 23px 23px 0 0;
  background-color: ${(props) => props.bg};
  border-bottom: ${(props) => props.under};
  
  &:hover{
    background-color: rgba(85,111,255,0.3);
  }
`;

const Tab2 = styled.div`
  display: grid;
  place-items: center;
  margin: 0 auto;
  width: 100%;
  height: 50px;
  border-radius: 23px 23px 0 0;
  background-color: ${(props) => props.bg};
  border-bottom: ${(props) => props.under};

  &:hover{
    background-color: rgba(85,111,255,0.3);
  }
`;

const Text = styled.span`
  color: ${(props) => props.color};
`;

const Category = function () {
  const [Mypage, setMypage] = useState(true);
  const [Commu, setCommu] = useState(false);

  const showMypage = async () => {
    setMypage(true);
    setCommu(false);

  };

  const showCommu = async () => {
    setMypage(false);
    setCommu(true);

  };

  useEffect(() => {
    showMypage();
  }, []);

  return (
    <Container>
      <Tab>
        <Tab1
          onClick={showMypage}
          bg={Mypage ? "rgba(85,111,255,0.3)" : "white"}
          under={Mypage ? "2px solid #556FFF" : "2px solid rgba(0,0,0,0.25)"}
        >
          <Text color={Mypage ? "#556FFF" : "rgba(0,0,0,0.2)"}>MY</Text>
        </Tab1>
        <Tab2
          onClick={showCommu}
          bg={Commu ? "rgba(85,111,255,0.3)" : "white"}
          under={Commu ? "2px solid #556FFF" : "2px solid rgba(0,0,0,0.25)"}
        >
          <Text
            color={Commu ? "#556FFF" : "rgba(0,0,0,0.2)"}
          >
            커뮤니티
          </Text>
        </Tab2>
      </Tab>
      {Mypage ? <My /> : null}
      {Commu ? <CommuHome /> : null}
    </Container>
  );
};

export default Category;
