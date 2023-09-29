import styled from "styled-components";

const ProfileContainer = styled.div``;

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

const Profile = function ({ register, imagePreview, setImagePreview }) {
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        console.log(e.target)
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <ProfileContainer>
      <Title>피드 사진 추가하기</Title>
        <button><label htmlFor="imgUpload">이미지 추가하기</label></button>
      <Picture>
        <input
          {...register("contentImageURL")}
          type="file"
          name="contentImageURL"
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
