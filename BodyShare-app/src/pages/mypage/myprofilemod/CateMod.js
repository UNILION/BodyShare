import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ButtonTT from "pages/mypage/newverst/ButtonTT"
import xbutton from "assets/Img/xbutton.png"
import Tag from "components/commons/Tag";

const Cateckul = styled.div`
  margin-top: 7px;
  display: grid;
  grid-template-columns: auto auto;
`;

const Catetitle = styled.p`
  align-items: center;
  font-size: 18px;
  color: #000000;
  margin-top: 15px;
`;

const Cateul = styled.div`
  margin-top: 3px;
  display: grid;
  grid-template-columns: 65px auto;
`;

const Xbutton = styled.img`
  width: 22px;
  height: 22px;
  background-color: rgba(85, 111, 255, 0.3);
  border-radius: 15px;
  cursor: pointer;
`;

const Catewarnig = styled.p`
  margin-top: 5px;
  font-size: 11px;
  color: red;
`;

const CateMod = function () {
  const navigate = useNavigate();

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
          ml="175px"
        />
      </Cateckul>
      <Cateul>
        <Tag
          tagName="요가"
        />
        <Xbutton src={xbutton} />
      </Cateul>
      <Catewarnig>한 개 이상의 카테고리를 선택해주세요!</Catewarnig>
    </>
  );
};

export default CateMod;