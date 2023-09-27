import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { userSelector } from "recoil/userRecoil";
import { useRecoilValue } from "recoil";
import MyCommu from "./MyCommu";

const instance = axios.create({
  baseURL: "http://localhost:33000/api",
  withCredentials: true,
});

const Text = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
`;

const Group = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin-bottom: 30px;

  margin-top: 10px;
  max-height: 500px; /* 스크롤 가능한 최대 높이 설정 */
  overflow-y: auto;
`;

const Hr = styled.hr`
  border-color: rgba(0, 0, 0, 0.25);
`;

const My = function () {
  const [communityData, setCommunityData] = useState();

  const userNo = useRecoilValue(userSelector);

  const commuList = async function () {
    try {
      const communityResponse = await instance.get(
        `/users/community/${userNo}`
      );
      setCommunityData(communityResponse.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    commuList();
  }, []);

  return (
    <>
      <Text>내가 가입한 커뮤니티</Text>

      <Group>
        {communityData
          ? communityData.map((commu, idx) => (
              <MyCommu commu={commu} key={idx} />
            ))
          : null}
      </Group>

      <Hr />
    </>
  );
};

export default My;
