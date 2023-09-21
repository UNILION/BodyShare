import styled from "styled-components";
import Tag from "components/commons/useFormTag";
import Button from "components/commons/Button";
import xbutton from "assets/Img/xbutton.png";
import plus from "assets/Img/buttonplus.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import CommunityContent from "./CommunityContent"
import CommunityTitle from "./CommunityTitle"

const MiddleContainer = styled.div`
  display: grid;
  grid-template-rows: 0.8fr 0.8fr 0.8fr 0.8fr 1fr;
  margin-bottom: 10px;
`;

const Banner = styled.div``;

const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin: 10px 0 10px 0;
`;

const Picture = styled.div`
  height: 350px;
  height: 60px;
  border: 1px dotted black;
  border-radius: 15px;
  text-align: center;
  padding-left: 50px;
  line-height: 60px;
`;

const Profile = styled.div``;

const CommunityCategory = styled.div``;

const Check = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 10px;
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

const Middle = function () {
  const navigate = useNavigate();
  const [tagtitle, setagTitle] = useState("요가");
  const {register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <MiddleContainer>
          <Banner>
            <Title>배너 사진</Title>
            <Picture>
              <input
                {...register("bannerImg")}
                type="file"
                accept="image/jpg, image/png, image/jpeg"
              />
            </Picture>
          </Banner>

          <Profile>
            <Title>프로필 사진</Title>
            <Picture>
              <input
                {...register("profileImg")}
                type="file"
                accept="image/jpg, image/png, image/jpeg"
              />
            </Picture>
          </Profile>

          <CommunityTitle register={register} errors={errors} />

          <CommunityContent register={register} errors={errors} />


          <CommunityCategory>
            <Title>커뮤니티 카테고리</Title>
            <CategoryContent onClick={() => navigate("/community/category")}>
              1개의 카테고리를 필수로 선택해주세요!
            </CategoryContent>
            <Category>
              <Tag 
              tagtitle="요가" />
              <Xbutton src={xbutton} />
              <input type="hidden" value={tagtitle} 
              {...register("tag", {
                required: true,
              })}
              />
            </Category>
            {errors.tag?.type === "required" && (
              <Check>한 개의 카테고리를 선택해주세요!</Check>
            )}
          </CommunityCategory>
        </MiddleContainer>

        <Button
          name="만들기"
          img={plus}
          ml="auto"
          mb="10px"
          width="150px"
          display="block"
          // onClick={() => navigate("/community")}
        />
      </form>
    </>
  );
};

export default Middle;
