import styled from "styled-components";
import Button from "components/commons/Button";
import plus from "assets/Img/buttonplus.png";
import { useForm } from "react-hook-form";
import Banner from "./Banner";
import Profile from "./Profile";
import CommunityTitle from "./CommunityTitle";
import CommunityContent from "./CommunityContent";
import CommunityCategory from "./CommunityCategory";

const MiddleContainer = styled.div`
  display: grid;
  grid-template-rows: 0.8fr 0.8fr 0.8fr 0.8fr 1fr;
  margin-bottom: 10px;
`;

const Middle = function () {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
