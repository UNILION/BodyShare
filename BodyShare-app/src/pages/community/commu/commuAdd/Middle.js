import styled from "styled-components";
import Button from "components/commons/Button";
import plus from "assets/Img/buttonplus.png";
import { useForm } from "react-hook-form";
import Banner from "./Banner";
import Profile from "./Profile";
import CommunityTitle from "./CommunityTitle";
import CommunityContent from "./CommunityContent";
import CommunityCategory from "./CommunityCategory";
import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import { userSelector } from "recoil/userRecoil";
import { categoryAtom, categorySelector } from "recoil/commuRecoil";
import { useNavigate } from "react-router-dom";

const instance = axios.create({
  baseURL: "http://localhost:33000/api",
  withCredentials: true
});

const MiddleContainer = styled.div`
  display: grid;
  grid-template-rows: 0.8fr 0.8fr 0.8fr 0.8fr 1fr;
  margin-bottom: 10px;
`;

const Middle = function () {
  const navigate = useNavigate();
  const userNo = useRecoilValue(userSelector);
  const categoryList = useRecoilValue(categorySelector);
  const [categoryItem, setCategoryItem] = useRecoilState(categoryAtom);
  const titled = sessionStorage.getItem("commu-title")
  const contentd = sessionStorage.getItem("commu-content")

  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    // FormData 생성 및 데이터 추가
    const formData = new FormData();
    if (data.profileImg[0]) {
      formData.append('profileImg', data.profileImg[0]);
    }
    if (data.bannerImg[0]){
      formData.append('bannerImg', data.bannerImg[0]);
    }
    formData.append('adminUserNo', userNo);
    formData.append('interest', categoryList[0].no);
    formData.append('communityName', data.title);
    formData.append('intro', data.content);

    sessionStorage.removeItem("commu-title")
    sessionStorage.removeItem("commu-content")
    try {
      // 서버로 데이터를 전송합니다.
      const response = await instance.post("/community/commuadd", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }, 
      });

      // 성공적으로 업데이트된 경우 usesCommunity에 등록 하고 관련 recoil 초기화하고 메인 페이지로 이동
      if (response.status === 200) {
        try{
          const result = await instance.post(`/users/communityadd/${response.data.id}/${userNo}`);
          if(result.data)
          // 성공시 메인 페이지 이동
          setCategoryItem([]);
          navigate("/community");
        }catch(err){
          console.error("usersCommunity 업데이트 실패")
        }
      } else {
        console.error("업데이트 실패");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MiddleContainer>
        <CommunityTitle titled={titled} register={register} errors={errors} />

        <CommunityContent contentd={contentd} register={register} errors={errors} />

        <CommunityCategory register={register} errors={errors} />
        
        <Banner register={register} />

        <Profile register={register} />
      </MiddleContainer>

      <Button
        name="만들기"
        img={plus}
        mt="-10px"
        ml="auto"
        mb="10px"
        width="150px"
        display="block"
        type="submit"
      />
    </form>
  );
};

export default Middle;
