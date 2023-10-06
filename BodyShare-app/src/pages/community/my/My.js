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
  margin-left: 5px;
`;

const Group = styled.div`
  margin-bottom: 30px;
  margin-top: 10px;
  overflow-y: auto;
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
      console.log(communityResponse.data)
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
        <>
          {communityData
            ? communityData.map((commu, idx) => (
                <MyCommu commu={commu} key={idx} />
              ))
            : null}
        </>
      </Group>
    </>
  );
};

export default My;
