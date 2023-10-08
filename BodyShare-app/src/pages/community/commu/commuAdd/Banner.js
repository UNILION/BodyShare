import styled from "styled-components";
import React, { useState } from "react";

const BannerContainer = styled.div``;

const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin: 10px 0 10px 0;
`;

const Picture = styled.div`
  height: 350px;
  height: 60px;
  border: 1px dotted rgb(135, 135, 135);
  background-color: white;
  color: black;
  border-radius: 15px;
  text-align: center;
  padding-left: 50px;
  line-height: 60px;
  display: grid;
  grid-template-columns: 1fr auto;
`;

const PicInput = styled.input`
  margin-top: 15px;
  cursor: pointer;
`;

const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 60px; /* 세로 높이를 최대 60px로 제한 */
  display: ${(props) => (props.src ? "block" : "none")};
`;

const Banner = function ({ register }) {
  const [previewImage, setPreviewImage] = useState(null);

  // 파일 선택 시 미리보기 이미지 업데이트
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <BannerContainer>
      <Title>배너 사진</Title>
      <Picture>
        <label htmlFor="bannerImg">
          <PicInput
            {...register("bannerImg")}
            type="file"
            accept="image/jpg, image/png, image/jpeg"
            id="bannerImg"
            onChange={handleFileChange}
          />
        </label>
        <PreviewImage src={previewImage} alt="Preview" />
      </Picture>
    </BannerContainer>
  )
}

export default Banner;