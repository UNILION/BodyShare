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
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      // 서버로 데이터를 전송합니다.
      const response = await instance.post("/community/commuadd", data);

      // 성공적으로 업데이트된 경우 메인 페이지로 이동
      if (response.status === 200) {
        // 리디렉션 등 필요한 동작 수행
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
        <Banner register={register} />

        <Profile register={register} />

        <CommunityTitle register={register} errors={errors} />

        <CommunityContent register={register} errors={errors} />

        <CommunityCategory register={register} errors={errors} />
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
  );
};

export default Middle;
