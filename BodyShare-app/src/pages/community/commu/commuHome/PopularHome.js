import styled from "styled-components";
import Card from "components/commons/Card";
import useCustomAxios from "components/commons/CustomAxios"
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userSelector } from "recoil/userRecoil";
import { useRecoilValue } from 'recoil';

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
  width: 300px;
  height: 420px;
  margin-top: 30px;
  overflow-y: hidden;
`

const PopularHome = function () {
  const instance = useCustomAxios();
  const navigate = useNavigate();
  const userNo = useRecoilValue(userSelector);

  const [popularCommunityData, setPopularCommunityData] = useState([]);

  const fetchPopularData = async () => {
    try {
      const response = await instance.get(`/community/bypopular/${userNo}`);
      const community = response.data;

      setPopularCommunityData(community);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPopularData();
  }, []);

  return (
    <Group>
      {popularCommunityData ? popularCommunityData.length > 0 ?
        popularCommunityData.map((community, index) => (
          <Card
            key={index}
            img={`http://localhost:33000/images/communitys/${community.profileImageUrl}`}
            title={community.communityName}
            contents={community.intro}
            tagtitle={community.sportsName}
            footer={`${community.userCount}명의 회원이 가입함`}
            onClick={() => navigate(`/community/commuIn/${community.communityNo}`)}
          />
        )) : <Not>인기에 알맞은 커뮤니티가 존재하지 않습니다.</Not> : <Not>인기에 알맞은 커뮤니티가 존재하지 않습니다.</Not>}
    </Group>
  );
};

export default PopularHome;
