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
import axios from "axios";
import { useRecoilValue } from "recoil";
import { userSelector } from "recoil/userRecoil";
import { useEffect, useState } from "react";

const instance = axios.create({
  baseURL: "http://localhost:33000/api",
  withCredentials: true,
});

const MiddleContainer = styled.div`
  display: grid;
  grid-template-rows: 0.5fr 1.3fr 1fr 1fr;
  gap: 20px;
  margin-bottom: 30px;
`;

const Middle = function () {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [imagePreview, setImagePreview] = useState("");
  const image = watch("contentImageURL");
  const [postTitle, setPostTitle] = useState();
  const [postContent, setPostContent] = useState();
  const [postContentImageURL, setPostContentImageURL] = useState();
  const [recordDate, setRecordDate] = useState();
  const location = useLocation();
  const commuNo = location.pathname.split("/")[3];
  const userNo = useRecoilValue(userSelector);
  const navigate = useNavigate();
  const postTime = String(new Date().toLocaleDateString())

  
  const onSubmit = async function (data) {
    try {
      console.log("data" + JSON.stringify(data))
      const postData = {
        communityNo: commuNo,
        userNo,
        createdDate: postTime,
        title : postTitle,
        content: postContent,
        contentImageURL: postContentImageURL,
        recordDate : recordDate
      }
      console.log("포스트" + JSON.stringify(postData))
      // const response = await instance.post(`post/postadd`, postData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (image && image.length > 0) {
      console.log("image" + JSON.stringify(image))
      const file = image[0];
      setImagePreview(URL.createObjectURL(file));
    }
  }, [image]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MiddleContainer>
        <Banner />

        <Profile register={register} imagePreview={imagePreview} setImagePreview = {setImagePreview} />

        <FeedTitle register={register} setPostTitle = {setPostTitle} errors={errors} />

        <FeedContent register={register} setPostContent = {setPostContent} errors={errors} />

        <Record register={register} setRecordDate={setRecordDate} errors={errors} />
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
