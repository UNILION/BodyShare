import styled from "styled-components";

const Titleo = styled.p`
  margin-top: 20px;
  font-size: 18px;
`;

const BannerPic = styled.button`
  margin-top: 7px;
  border: 1px solid rgba(135, 135, 135, 0.3);
  border-radius: 15px;
  border-style: dashed;
  cursor: pointer;
  width: 372px;
  height: 60px;
  background-color: #FFFFFF;
  color: #878787;
  font-size: 13px; 
`;

const TitleT = styled.p`
  margin-top: 7px;
  font-size: 18px;
`;

const ProfilePic = styled.button`
  margin-top: 7px;
  border: 1px solid rgba(135, 135, 135, 0.3);
  border-style: dashed;
  border-radius: 15px;
  cursor: pointer;
  width: 372px;
  height: 60px;
  background-color: #FFFFFF;
  color: #878787;
  font-size: 13px;
`;

const Pic = function () {

  return (
    <>
      <Titleo>배너사진</Titleo>
        <BannerPic>
          <input type="file"
            accept="image/gif, image/jpeg, image/png, image/jpg">
          </input>
        </BannerPic>
        <TitleT>프로필 사진</TitleT>
        <ProfilePic>
          <input type="file"
            accept="image/gif, image/jpeg, image/png, image/jpg">
          </input>
        </ProfilePic>
    </>
  )
};

export default Pic;