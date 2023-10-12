import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useCustomAxios from "components/commons/CustomAxios"
import MyItem from "./Feed";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "recoil/themeRecoil";

const Group = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin-bottom: 30px;

  margin-top: 10px;
  max-height: 500px; /* 스크롤 가능한 최대 높이 설정 */
  overflow-y: auto;
`;

const Img = styled.img`
  margin-top: 20px;
  width: 83px;
  height: 83px;
  cursor: pointer;
`;

const Register = styled.div``;

const Title = styled.div`
  width: 150px;
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* 말줄임 적용 */
  cursor: pointer;
`;

const Member = styled.div`
  color: ${props => props.isDarkMode ? "white" : "rgba(0, 0, 0, 0.4)"};
  font-size: 13px;
  font-weight: bold;
  margin-top: 10px;
`;

const Hr = styled.hr`
  border-color: ${props => props.isDarkMode ? "white" : "rgba(0, 0, 0, 0.25)"};
`;

const MyCommu = function ({ commu }) {
  const instance = useCustomAxios();
  const [feeds, setFeeds] = useState([]);
  const [memberList, setMemberList] = useState([]);
  const navigate = useNavigate();
  const isDarkMode = useRecoilValue(isDarkAtom);

  const myCommuList = async function (commuNo) {
    const limit = 3;
    try {
      const response = await instance.get(
        `/community/${commuNo}/feeds/${limit}`
      );
      const myCommuList = response.data; // API 응답의 구조에 따라 수정
      setFeeds(myCommuList);
      for (let i = 0; i < myCommuList.length; i++) {
        setMemberList(myCommuList[i].member);
        break;
      }
    } catch (error) {
      // 에러 처리
      console.error(error);
    }
  };

  useEffect(() => {
    myCommuList(commu.communityNo);
  }, []);

  return (
    <>
      <Group>
        <Img
          src={`${process.env.REACT_APP_IMAGE_SERVER}/communitys/${commu.profileImageUrl}`}
          onClick={() => navigate(`/community/commuIn/${commu.communityNo}`)}
        />
        <Register>
          <Title onClick={() => navigate(`/community/commuIn/${commu.communityNo}`)}>
            {commu.communityName}
          </Title>
          {memberList > 0 ? (
            <>
              <Member isDarkMode={isDarkMode}>{memberList}명의 회원</Member>
              {feeds.map((feed, idx) => (
                <MyItem feed={feed} key={idx} />
              ))}
            </>
          ) : (
            <div style={{ marginTop: "20px" }}>
              현재 새롭게 등록된 글이 없습니다.
            </div>
          )}
        </Register>
      </Group>

      <Hr isDarkMode={isDarkMode} />
    </>
  );
};

export default MyCommu;
