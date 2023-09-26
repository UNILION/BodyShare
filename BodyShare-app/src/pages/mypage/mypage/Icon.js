import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { userSelector } from "recoil/userRecoil";
import { useRecoilValue } from "recoil";
import Tag from "components/commons/Tag";
import { interestSelector } from "recoil/userRecoil";

const instance = axios.create({
  baseURL: "http://localhost:33000/api",
  withCredentials: true
});

const Nickli = styled.li`
  font-size: 28px;
  font-weight: 800;
`;

const Inst = styled.li`

`;

const Pf = styled.ul`
  border: 5px solid rgba(85, 111, 255, 0.2);
  width: 360px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin-left: 9.5px;
`;

const Pfpic = styled.img`
  width: 163px;
  height: 163px;
`;

const Pfcommentul = styled.div`
  display: grid;
  grid-template-rows: 5fr 1fr;
  list-style: none;
  place-items: center;
  margin-bottom: 25px;
`;

const Icon = function ({ id, url }) {
  const userNo = useRecoilValue(userSelector);
  const interest = useRecoilValue(interestSelector);
  const [userInfo, setUserInfo] = useState();

  const loadUser = async function () {
    try {
      const response = await instance.get(`/users/user/${userNo}`);
      const userDataFromApi = response.data;

      setUserInfo(userDataFromApi);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <>
      <Pf>
        <Pfpic src={`http://localhost:33000/images/users/${url}`} />
        <Pfcommentul>
          <Nickli>{id}</Nickli>
          <Inst>
            {interest.map((item, index) => (
              <Tag key={index} tagtitle={item.name} />
            ))}
          </Inst>
        </Pfcommentul>
      </Pf>
    </>
  );
};

export default Icon;
