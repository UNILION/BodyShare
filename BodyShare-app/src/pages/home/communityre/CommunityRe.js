import styled from "styled-components";
import Card from "components/commons/Card";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { userSelector } from "recoil/userRecoil";
import { useRecoilValue } from 'recoil';
import useCustomAxios from "components/commons/CustomAxios"


const CommunityDiv = styled.div`
  grid-row: 3;
  width: 360px;
  height: 305px;
  border-radius: 30px;
  border: 1px solid rgba(135, 135, 135, 0.3);
  margin: 5px auto 0 auto;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  display: grid;
`;

const Not = styled.div`
  text-align: center;
  font-size: 17px;
  font-weight: bold;
  width: 300px;
  overflow-y: hidden;
  margin: 0 auto;
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

const CommunityRe = function () {
  const instance = useCustomAxios();
  const navigate = useNavigate();
  const userNo = useRecoilValue(userSelector);

  const [communityData, setCommunityData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await instance.get(`/post/community/${userNo}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };


  useEffect(() => {
    const fetchCommunityData = async () => {
      const data = await fetchData();
      setCommunityData(data);
    };

    fetchCommunityData();
  }, [userNo]);

  return (
    <CommunityDiv>
      <CommunityP>새소식</CommunityP>
      {communityData && communityData.length > 0 ? (
        <PostDiv>
          {communityData.slice(0, 2).map((communityPost, index) => (
            <CommunityRecommend
              key={index}
              onClick={() => {
                navigate(`/community/feed/${communityPost.postNo}`);
              }}
            >
              <Card
                width="170px"
                img={`http://localhost:33000/images/posts/${communityPost.contentImageUrl}`}
                title={communityPost.title}
                contents={communityPost.content}
                footer={String(communityPost.createdDate.split('-')[0]) + "년" + String(communityPost.createdDate.split('-')[1]) + "월" + String(communityPost.createdDate.split('-')[2]).substring(0, 2) + "일"}
              />
            </CommunityRecommend>
          ))}
        </PostDiv>
      ) : (
        <Not>커뮤니티에 새 글이 아직 없습니다 :( </Not>
      )}
    </CommunityDiv>
  );
};

export default CommunityRe;