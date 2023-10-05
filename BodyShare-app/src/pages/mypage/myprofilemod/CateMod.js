import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { userSelector } from "recoil/userRecoil";
import { sportsSelector } from 'recoil/sportList';
import { useRecoilValue } from "recoil";
import ButtonTT from "pages/mypage/newverst/ButtonTT";
import CateItem from "./CateItem";
import Tag from "components/commons/Tag";


const instance = axios.create({
  baseURL: "http://localhost:33000/api",
  withCredentials: true
});

const Cateckul = styled.div`
  margin-top: 7px;
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

const Catetitle = styled.p`
  align-items: center;
  font-size: 18px;
  color: #000000;
  margin-top: 15px;
`;

const Cateul = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 3fr;
  margin-top: 3px;
`;

const CateMod = function ({ usersList }) {
  const navigate = useNavigate();
  const userNo = useRecoilValue(userSelector);
  const sports = useRecoilValue(sportsSelector);
  // const [userInfo, setUserInfo] = useState();
  // const [sportData, setSportData] = useState([]);
  const [matchingSportNames, setMatchingSportNames] = useState([]);

  const loadMatchingSportNames = async () => {
    try {
      // const response = await instance.get(`/users/user/${userNo}`);
      // const userDataFromApi = response.data;
      // setUserInfo(userDataFromApi);

      // const responseSport = await instance.get(`/sports`);
      // const sportsDataFromApi = responseSport.data;
      // setSportData(sportsDataFromApi);

      const userInterestData = await instance.get(`/users/interest/${userNo}`);
      const userInterestNo = userInterestData.data.map(item => item.sportsNo);

      const matchingSportNames = sports
        .filter(sport => userInterestNo.includes(sport.no))
        .map(sport => sport.name);

      if (matchingSportNames.length === 0) {
        setMatchingSportNames(['매칭되는 스포츠가 없습니다.']);
      } else {
        setMatchingSportNames(matchingSportNames);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadMatchingSportNames();
  }, [userNo]);

  const handleCategorySelection = async (selectedCategoryNo) => {
    try {
      await instance.put(`/users/interest/${userNo}`, { sportsNo: selectedCategoryNo });
      loadMatchingSportNames();
    } catch (error) {
      console.error(error);
    }
  };

  if (!usersList || usersList.length === 0) {
    return (
      <>
        <Cateckul>
          <Catetitle>나의 관심 카테고리</Catetitle>
          <ButtonTT
            name="검색"
            onClick={() => navigate("/mypage/modify/interest")}
            width="65px"
            height="31px"
            fs="15px"
            mt="8px"
            ml="20px"
          />
        </Cateckul>
        {matchingSportNames.map((sport, index) => (
          <Tag key={index} tagtitle={sport} ml="5px" />
        ))}
      </>
    );
  }

  const list = usersList.map(record => {
    return (
      <CateItem
        key={record.no}
        record={record}
        onCategorySelect={handleCategorySelection}
      />
    );
  });

  return (
    <>
      <Cateckul>
        <Catetitle>나의 관심 카테고리</Catetitle>
        <ButtonTT
          name="검색"
          onClick={() => navigate("/mypage/modify/interest")}
          width="65px"
          height="31px"
          fs="15px"
          mt="8px"
          ml="20px"
        />
      </Cateckul>
      <Cateul>
        {list}
      </Cateul>
    </>
  );
};

export default CateMod;
