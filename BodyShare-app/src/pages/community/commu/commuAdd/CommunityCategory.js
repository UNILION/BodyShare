import styled from "styled-components";
import Check from "components/commons/Check";
import Tag from "components/commons/useFormTag";
import xbutton from "assets/Img/xbutton.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CommunityCategoryContainer = styled.div``;

const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin: 10px 0 10px 0;
`;

const Category = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 30%;
`;

const CategoryContent = styled.div`
  width: 350px;
  height: 60px;
  font-size: 15px;
  color: #878787;
  border: 1px solid rgba(46, 44, 61, 0.3);
  border-radius: 15px;
  text-align: center;
  line-height: 60px;
  cursor: pointer;
`;

const Xbutton = styled.img`
  width: 25px;
  height: 25px;
  background-color: rgba(85, 111, 255, 0.3);
  border-radius: 15px;
  margin-left: 3px;
  cursor: pointer;
`;

const CommunityCategory = function ({ register, errors }) {
  const navigate = useNavigate();
  const [tagtitle, setagTitle] = useState("요가");
  return (
    <CommunityCategoryContainer>
      <Title>커뮤니티 카테고리</Title>
      <CategoryContent onClick={() => navigate("/community/category")}>
        1개의 카테고리를 필수로 선택해주세요!
      </CategoryContent>
      <Category>
        <Tag tagtitle="요가" />
        <Xbutton src={xbutton} />
        <input
          type="hidden"
          value={tagtitle}
          {...register("tag", {
            required: "한 개의 카테고리를 선택해주세요!",
          })}
        />
      </Category>

      <Check>{errors.tag?.message}</Check>
    </CommunityCategoryContainer>
  );
};

export default CommunityCategory;