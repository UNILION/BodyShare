import styled from "styled-components";
import React, { useState, useEffect } from "react";
import useCustomAxios from "components/commons/CustomAxios"
import { interestSelector, userSelector } from "recoil/userRecoil";
import { sportsSelector } from 'recoil/sportList';
import { useRecoilState, useRecoilValue } from "recoil";
import { interestAtom } from "recoil/userRecoil";
import Tag from "components/commons/useFormTag";

const Nickli = styled.li`
  font-size: 28px;
  font-weight: 800;
  color: black;
`;

const Inst = styled.li`

`;

const Pf = styled.ul`
  border: 5px solid rgba(85, 111, 255, 0.2);
  width: 360px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 3fr;
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

const Cover = styled.div`
  background-color: white;
  border-radius: 15px;
  width: 370px;
  margin-left: 9.5px;
`;

const Not = styled.div`
  text-align: center;
  font-size: 17px;
  font-weight: bold;
  width: 300px;
  height: 420px;
  margin-top: 170px;
  overflow-y: hidden;
  color: black;
`

const Icon = function ({ id, url }) {
  const instance = useCustomAxios();
  const userNo = useRecoilValue(userSelector);
  const sports = useRecoilValue(sportsSelector);
  const [interestList, setInterestList] = useRecoilState(interestAtom);
  const inter = useRecoilValue(interestSelector);
  const [matchingSportNames, setMatchingSportNames] = useState([]);

  const interestInit = function (list) {
    setInterestList(list);
  }

  const loadSport = async function () {
    try {
      // 스포츠 데이터를 가져온 후, 사용자의 관심 스포츠를 필터링하여 일치하는 스포츠를 설정
      const userInterestData = await instance.get(`/users/interest/${userNo}`);
      const userInterestNo = userInterestData.data.map(item => item.sportsNo); // 관심 스포츠 번호 추출
      let tempList = [];

      if (Array.isArray(userInterestData.data)) {
        for (let i = 0; i < userInterestData.data.length; i++) {
          const matchingSport = sports.find(item => item.no === userInterestData.data[i].sportsNo);
          if (matchingSport) {
            tempList.push(matchingSport);
          }
        }
        interestInit(tempList);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const matching = function () {
    const matchingList = inter.map(sport => sport.name); // 매칭되는 스포츠의 이름 추출

    if (matchingList.length === 0) {
      // 사용자의 관심 스포츠가 없는 경우에 대한 처리
      setMatchingSportNames(['No matching sports found']); // 또는 다른 기본값 설정
    } else {
      setMatchingSportNames(matchingList);
    }
  };

  useEffect(() => {
    loadSport();
  }, []);

  useEffect(() => {
    matching();
  }, [interestList]);

  return (
    <>
    {userNo > 0 ? 
      <Cover>
        <Pf>
          <Pfpic src={`http://localhost:33000/images/users/${url}`} />
          <Pfcommentul>
            <Nickli>{id}</Nickli>
            <Inst>
              {matchingSportNames.map((sport, index) => (
                <Tag key={index} cursor="auto" tagtitle={sport} hovercolor="rgba(85,111,255, 0.3)" ml="5px" />
              ))}
            </Inst>
          </Pfcommentul>

        </Pf>
      </Cover> :  <Not>오늘의 영양정보가 존재하지 않습니다. 기록 탭에서 등록해주세요</Not>
}
    </>
  );
};

export default Icon;
