import styled from "styled-components";
import Card from "components/commons/Card";
import Plus from "assets/Img/buttonplus.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:33000/api",
  withCredentials: true
});

const Group = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 10px;
`;

const AddImg = styled.img`
  display: grid;
  align-items: end;
  margin-left: auto;
  width: 50px;
  height: 50px;
  cursor: pointer;
  margin-top: 20px;
`;

const Middle = function ({ searchItemList }) {
  const navigate = useNavigate();

  const [list, setList] = useState([]);

  const commuList = async function () {
    try{
      const response = await instance.get(`/community/byinterest/${searchItemList[0].no}`)
      setList(response.data);
      console.log(response.data);
    } catch (error) {
      // 에러 처리
      console.error(error);
    }
  };

  useEffect(() => {
    commuList();
  }, [searchItemList]);

  return (
    <>
      <Group>
        {list.length > 0 && list.map((community, index) => (        
          <Card
            img={`http://localhost:33000/public/images/communitys/${community.profileImageUrl}`}
            title={community.communityName}
            contents={community.intro}
            tagtitle={community.sportsName}
            footer={`${community.userCount}명의 회원이 가입함`}
            onClick={() => navigate(`/community/commuIn/${community.communityNo}`)}
          />
        ))}
      </Group>
      
      <AddImg src={Plus} onClick={() => navigate("/community/communityAdd")} />
    </>
  );
};

export default Middle;
