import styled from "styled-components";
import ChartBox from "pages/home/chart/Chart";
import Record from "pages/home/record/Record";
import CommunityRe from "pages/home/communityre/CommunityRe";
import axios from "axios";
import { useEffect } from "react";
import { useRecoilState } from 'recoil';
import { sportsAtom } from "recoil/sportList";
import { foodAtom } from "recoil/foodList";


const instance = axios.create({
  baseURL: "http://localhost:33000/api",
  withCredentials: true
});

const Container = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr;
  gap: 10px;
  text-align: center;
  padding: 5px 10px;
`;

const MainHome = function () {
  const [sports, setSports] = useRecoilState(sportsAtom);
  const [food, setFood] = useRecoilState(foodAtom);

  const loadDB = async function(){
    try {
      const response = await instance.get('/sports');
      setSports(response.data)
    } catch (error) {
      // 에러 처리
      console.error(error);
    }

    try {
      const response = await instance.get('/food');
      setFood(response.data)
    } catch (error) {
      // 에러 처리
      console.error(error);
    }
  };
  
  useEffect(() => {
    loadDB();
  }, []);

  return (
    <Container>
      <Record />
      <ChartBox />
      <CommunityRe />
    </Container>
  );
};

export default MainHome;
