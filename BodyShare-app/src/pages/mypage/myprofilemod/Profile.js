import styled from "styled-components";
import React, { useState } from "react";

const PicInput = styled.input`
  margin-top: 15px;
  cursor: pointer;
`

const TitleT = styled.p`
  margin-top: 7px;
  font-size: 18px;
`;

const ProfilePic = styled.button`
  margin-top: 7px;
  border: 1px solid rgba(135, 135, 135, 0.3);
  border-style: dashed;
  border-radius: 15px;
  width: 372px;
  height: 60px;
  background-color: #FFFFFF;
  color: #878787;
  font-size: 13px;
  display: grid;
  grid-template-columns: 1fr auto;
`;

const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 60px; /* 세로 높이를 최대 60px로 제한 */
  display: ${(props) => (props.src ? "block" : "none")};
`;

const Profile = function ({ register }) {
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
    <>
      <TitleT>프로필 사진</TitleT>
      <ProfilePic>
        <label htmlFor="profileImg">
          <PicInput
            {...register("profileImg")}
            type="file"
            accept="image/jpg, image/png, image/jpeg"
            id="profileImg"
            onChange={handleFileChange}
          />
        </label>
        <PreviewImage src={previewImage} alt="Preview" />
      </ProfilePic>
    </>
  )
};

export default Profile;