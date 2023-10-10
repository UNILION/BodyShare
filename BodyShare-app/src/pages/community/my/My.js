import styled from "styled-components";
import { useEffect, useState } from "react";
import useCustomAxios from "components/commons/CustomAxios"
import { userSelector } from "recoil/userRecoil";
import { useRecoilValue } from "recoil";
import MyCommu from "./MyCommu";

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

const Not = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  width: 390px;
  height: 290px;
  margin-top: 30px;
  overflow-y: hidden;
`

const My = function () {
  const instance = useCustomAxios();
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
        <>
          {communityData ? communityData.length > 0
            ? communityData.map((commu, idx) => (
              <MyCommu commu={commu} key={idx} />
            )) : <Not>가입한 커뮤니티가 존재하지 않습니다.</Not> : <Not>가입한 커뮤니티가 존재하지 않습니다.</Not>}
        </>
      </Group>
    </>
  );
};

export default My;
