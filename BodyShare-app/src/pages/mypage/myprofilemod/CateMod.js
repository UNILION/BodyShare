import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ButtonTT from "pages/mypage/newverst/ButtonTT"
import CateItem from "./CateItem"

const Cateckul = styled.div`
  margin-top: 7px;
  display: grid;
  grid-template-columns: auto auto auto;
`;

const Catetitle = styled.p`
  align-items: center;
  font-size: 18px;
  color: #000000;
  margin-top: 15px;
`;

const Cateul = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 3fr;
  margin-top: 3px;
`;


const CateMod = function ({ usersList }) {
  const navigate = useNavigate();
  if (!usersList || usersList.length === 0) {
    return null; // 또는 다른 적절한 처리
  }

  const list = usersList.map(record => {
    return (
      <CateItem key={record.no} record={record} />
    );
  });
  
  return (
    <>
      <Cateckul>
        <Catetitle>나의 관심 카테고리</Catetitle>
        <ButtonTT
          name="검색"
          onClick={() => navigate("/mypage/modify/interest")}
          width="65px"
          height="31px"
          fs="15px"
          mt="8px"
          ml="173px"
        />
      </Cateckul>
      <Cateul>
        {list}
      </Cateul>
    </>
  );
};

export default CateMod;