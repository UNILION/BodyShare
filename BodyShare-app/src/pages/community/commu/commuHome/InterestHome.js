import styled from "styled-components";
import Card from "components/commons/Card";
import useCustomAxios from "components/commons/CustomAxios"
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userSelector } from "recoil/userRecoil";
import { useRecoilValue } from "recoil";

const Group = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 10px;
  max-height: 450px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const Not = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  width: 310px;
  height: 420px;
  overflow-y: hidden;
  margin-top: 30px;
`;

const InterestHome = function () {
  const instance = useCustomAxios();
  const navigate = useNavigate();
  const userNo = useRecoilValue(userSelector);

  const [interestCommunityData, setInterestCommunityData] = useState([]);

  const fetchInterestData = async () => {
    try {
      const inResponse = await instance.get(`/users/interest/${userNo}`);
      const inData = inResponse.data;

      const byResponse = await instance.get(`/community/bypopular/${userNo}`);
      const byData = byResponse.data;

      const filteredData = byData.filter(community => {
        const matchingInterest = inData.find(data => data.sportsNo === community.interest);
        return matchingInterest;
      });


      setInterestCommunityData(filteredData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchInterestData();
  }, [userNo]);

  return (
    <>
      <Group>
        {interestCommunityData ? interestCommunityData.length > 0 ?
          interestCommunityData.map((community, index) => (
            <Card
              key={index}
              img={`${process.env.REACT_APP_IMAGE_SERVER}/communitys/${community.profileImageUrl}`}
              title={community.communityName}
              contents={community.intro}
              tagtitle={community.sportsName}
              footer={`${community.userCount}명의 회원이 가입함`}
              onClick={() => navigate(`/community/commuIn/${community.communityNo}`)}
            />
          )) : <Not>관심사에 알맞은 커뮤니티가 존재하지 않습니다.</Not> : <Not>관심사에 알맞은 커뮤니티가 존재하지 않습니다.</Not>}
      </Group>
    </>
  );
};

export default InterestHome;