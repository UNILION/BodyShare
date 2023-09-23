import styled from "styled-components";

const PicInput = styled.input`
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
`;

const Profile = function ({ register }) {
  return (
    <>
      <TitleT>프로필 사진</TitleT>
      <ProfilePic>
        <PicInput
          {...register("profileImg")}
          type="file"
          accept="image/jpg, image/png, image/jpeg"
        >
        </PicInput>
      </ProfilePic>
    </>
  )
};

export default Profile;