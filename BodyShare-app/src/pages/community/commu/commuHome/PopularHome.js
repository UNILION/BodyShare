import styled from "styled-components";
import Card from "components/commons/Card";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userSelector } from "recoil/userRecoil";
import { useRecoilValue } from 'recoil';

const instance = axios.create({
  baseURL: "http://localhost:33000/api",
  withCredentials: true
});

const Group = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 10px;
  max-height: 500px;
  overflow-y: auto;
`;

const PopularHome = function () {
  const navigate = useNavigate();
  const userNo = useRecoilValue(userSelector);

  const [popularCommunityData, setPopularCommunityData] = useState([]);

  const fetchPopularData = async () => {
    try {
      const response = await instance.get("/community/bypopular");
      const community = response.data;
      console.log(community);
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
      {(Array.isArray(popularCommunityData) 
        ? popularCommunityData : [])
        .slice(0, 4).map((community, index) => (
          <div key={index} onClick={() => navigate(`/community/${community.communityNo}`)}>
            <Card
              img={community.profileImageUrl} 
              title={community.communityName}
              contents={community.intro}
              footer={`${community.interest}명의 회원이 가입함`}
            />
          </div>
        ))}
    </Group>
  );
};

export default PopularHome;
