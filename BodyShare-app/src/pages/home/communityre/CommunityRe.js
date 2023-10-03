import styled from "styled-components";
import Card from "components/commons/Card";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { userSelector } from "recoil/userRecoil";
import { useRecoilValue } from 'recoil';

const instance = axios.create({
  baseURL: "http://localhost:33000/api",
  withCredentials: true
});

const CommunityDiv = styled.div`
  grid-row: 3;
  width: 370px;
  height: 305px;
  border-radius: 30px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.25);
  margin: 5px auto 0 auto;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  display: grid;
`;

const CommunityP = styled.p`
  grid-row: 1;
  text-align: left;
  font-weight: bold;
  font-size: 16px;
  padding-top: 15px;
  padding-left: 15px;
`;

const PostDiv = styled.div`
  grid-row: 2;
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const CommunityRecommend = styled.div`
  margin: 0 auto;
`;

const CommunityRecommend2 = styled.div`
  margin: 0 auto;
`;

const CommunityRe = function () {
  const navigate = useNavigate();
  const userNo = useRecoilValue(userSelector);

  const [communityData, setCommunityData] = useState([]);

  const fetchData = async (commuNo) => {
    try {
      const communityResponse = await instance.get(`/community/${commuNo}/${userNo}`);
      const community = communityResponse.data;
      return community;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  useEffect(() => {
    const fetchCommunityData = async () => {
      const community1 = await fetchData(1);
      setCommunityData([community1]);

      const community2 = await fetchData(2);
      setCommunityData(prevData => [...prevData, community2]);
    };

    fetchCommunityData();
  }, [userNo]);

  return (
    <CommunityDiv>
      <CommunityP>News</CommunityP>
      <PostDiv>
        {communityData.map((community, index) => (
          <div key={index}>
            {index === 0 && (
              <CommunityRecommend
                onClick={() => {
                  navigate(`/community/${community.communityNo}`);
                }}
              >
                <Card
                  img={community.profileImageUrl}
                  title={community.communityName}
                  contents={community.intro}
                  footer={` ${community.createdDate}`}
                />
              </CommunityRecommend>
            )}
            {index === 1 && (
              <CommunityRecommend2
                onClick={() => {
                  navigate(`/community/${community.communityNo}`);
                }}
              >
                <Card
                  img={community.profileImageUrl}
                  title={community.communityName}
                  contents={community.intro}
                  footer={` ${community.createdDate}`}
                />
              </CommunityRecommend2>
            )}
          </div>
        ))}
      </PostDiv>
    </CommunityDiv>
  );
};
export default CommunityRe;