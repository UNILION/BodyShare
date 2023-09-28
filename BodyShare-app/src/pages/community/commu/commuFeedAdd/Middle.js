import styled from "styled-components";
import Banner from "./Banner";
import Profile from "./Profile";
import FeedTitle from "./FeedTitle";
import FeedContent from "./FeedContent";
import Record from "./Record";
import Button from "components/commons/Button";
import plus from "assets/Img/buttonplus.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const MiddleContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 20px;
  margin-bottom: 30px;
`;

const Middle = function () {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const navigate = useNavigate();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MiddleContainer>
        <Banner />

        <Profile register={register} />

        <FeedTitle register={register} errors={errors} />

        <FeedContent register={register} errors={errors} />

        <Record register={register} errors={errors} />
      </MiddleContainer>

      <Button
        name="글쓰기"
        img={plus}
        ml="auto"
        mb="10px"
        width="150px"
        display="block"
        // onClick={() => navigate("/community/commuIn/1")}
      />
    </form>
  );
};

export default Middle;
