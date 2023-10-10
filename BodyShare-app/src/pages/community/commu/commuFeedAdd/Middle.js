import styled from "styled-components";
import Banner from "./Banner";
import Profile from "./Profile";
import FeedTitle from "./FeedTitle";
import FeedContent from "./FeedContent";
import Record from "./Record";
import Button from "components/commons/Button";
import plus from "assets/Img/buttonplus.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useCustomAxios from "components/commons/CustomAxios"
import { useRecoilValue } from "recoil";
import { userSelector } from "recoil/userRecoil";
import { useEffect, useState } from "react";

const MiddleContainer = styled.div`
  display: grid;
  grid-template-rows: 0.5fr 1.3fr 1fr 1fr;
  gap: 20px;
  margin-bottom: 30px;
`;

const Middle = function () {
  const instance = useCustomAxios();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [imagePreview, setImagePreview] = useState("");
  const image = watch("contentImageURL");
  const [imageInfo, setImageInfo] = useState();
  const [recordDate, setRecordDate] = useState(0);
  const location = useLocation();
  const commuNo = location.pathname.split("/")[3];
  const userNo = useRecoilValue(userSelector);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const formData = new FormData()
    if (imageInfo) {
      formData.append('contentImg', imageInfo);
    }
    formData.append("communityNo", commuNo)
    formData.append("userNo", userNo)
    formData.append("title", data.feedTitle)
    formData.append("content", data.feedContent)
    formData.append("recordDate", recordDate)

    try {
      await instance.post(`post/postadd`, formData);
      navigate(`/community/commuIn/${commuNo}`)
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageChange = (e) => {
    setImageInfo(e.target.files[0])
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (image && image.length > 0) {
      const file = image[0];
      setImagePreview(URL.createObjectURL(file));
    }
  }, [image]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MiddleContainer>
        <Banner />
        <Profile register={register} handleImageChange={handleImageChange} imagePreview={imagePreview} />

        <FeedTitle register={register} errors={errors} />

        <FeedContent register={register} errors={errors} />

        <Record register={register} setRecordDate={setRecordDate} errors={errors} />
      </MiddleContainer>

      <Button
        name="글쓰기"
        img={plus}
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
