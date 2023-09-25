import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { userSelector } from "recoil/userRecoil";
import { sportsSelector } from 'recoil/sportList';
import { useRecoilValue } from "recoil";
import Tag from "components/commons/Tag";

const instance = axios.create({
  baseURL: "http://localhost:33000/api",
  withCredentials: true
});

const Nickli = styled.li`
  font-size: 28px;
  font-weight: 800;
`;

const Inst = styled.li`

`;

const Pf = styled.ul`
  border: 5px solid rgba(85, 111, 255, 0.2);
  width: 360px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin-left: 9.5px;
`;

const Pfpic = styled.img`
  width: 163px;
  height: 163px;
`;

const Pfcommentul = styled.div`
  display: grid;
  grid-template-rows: 5fr 1fr;
  list-style: none;
  place-items: center;
  margin-bottom: 25px;
`;

const Icon = function ({ id, url }) {
  const userNo = useRecoilValue(userSelector);
  const sports = useRecoilValue(sportsSelector);

  const [userInfo, setUserInfo] = useState();
  const [sportData, setSportData] = useState([]);
  const [matchingSportNames, setMatchingSportNames] = useState([]);

  const loadUser = async function () {
    try {
      const response = await instance.get(`/users/user/${userNo}`);
      const userDataFromApi = response.data;
      console.log('user Data:', userDataFromApi);
      setUserInfo(userDataFromApi);
    } catch (error) {
      console.error(error);
    }
  };

  const loadSport = async function () {
    try {
      const response = await instance.get(`/sports`);
      const sportsDataFromApi = response.data;
      console.log('sports Data:', sportsDataFromApi);
      setSportData(sportsDataFromApi);

      // 스포츠 데이터를 가져온 후, 사용자의 관심 스포츠를 필터링하여 일치하는 스포츠를 설정
      const userInterestData = await instance.get(`/users/interest/${userNo}`);
      const userInterestNo = userInterestData.data.map(item => item.sportsNo); // 관심 스포츠 번호 추출

      const matchingSportNames = sportsDataFromApi
        .filter(sport => userInterestNo.includes(sport.no))
        .map(sport => sport.name); // 매칭되는 스포츠의 이름 추출

      if (matchingSportNames.length === 0) {
        // 사용자의 관심 스포츠가 없는 경우에 대한 처리
        setMatchingSportNames(['No matching sports found']); // 또는 다른 기본값 설정
      } else {
        setMatchingSportNames(matchingSportNames);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadUser();
    loadSport();
  }, []);

  return (
    <>
      <Pf>
        <Pfpic src={`http://localhost:33000/images/users/${url}`} />
        <Pfcommentul>
          <Nickli>{id}</Nickli>
          <Inst>
            {matchingSportNames.map((sport, index) => (
              <Tag key={index} tagtitle={sport} ml="5px"/>
            ))}
            {/* <Tag>
              {matchingSportNames.map((sport, index) => (
                <span key={index}>{sport}</span>
              ))}
            </Tag> */}
          </Inst>
        </Pfcommentul>
      </Pf>
    </>
  );
};

export default Icon;
