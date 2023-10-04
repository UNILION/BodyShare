import styled from "styled-components";

const ProfileContainer = styled.div``;

const Button = styled.div`
margin-bottom : 10px;
background-color: #556FFF;
color: white;
border: 1px solid rgba(135,135,135,0.3);
border-radius: 15px;
font-size: 20px;
width: 150px;
height: 35px;
text-align: center;
line-height: 35px;
cursor: pointer;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin: 10px 0 10px 0;
`;

const Picture = styled.div`
  height: 100px;
  border: 1px dotted black;
  border-radius: 15px;
  text-align: center;
  line-height: 100px;
`;

const Profile = function ({ register, imagePreview, handleImageChange }) {
  
  return (
    <ProfileContainer>
      <Title>피드 사진 추가하기</Title>
        <Button type="text"><label htmlFor="imgUpload" Style="cursor: pointer;">이미지 추가하기</label></Button>
      <Picture>
        <input
          {...register("contentImageUrl")}
          type="file"
          accept="image/jpg, image/png, image/jpeg"
          id = "imgUpload"
          style={{display:"none"}}
          onChange={handleImageChange}
        />
        {imagePreview ? <img src={imagePreview} style={{width:"100px", height: "100px"}}/> : null}
      </Picture>
    </ProfileContainer>
  );
};

export default Profile;
