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
  width: 372px;
  height: 60px;
  background-color: #FFFFFF;
  color: #878787;
  font-size: 13px; 
`;

const PicInput = styled.input`
  cursor: pointer;
`

const Banner = function ({register}) {
  return (
    <>
      <Titleo>배너사진</Titleo>
      <BannerPic>
        <PicInput 
          {...register("bannerImg")}
          type="file"
          accept="image/jpg, image/png, image/jpeg"
        >
        </PicInput>
      </BannerPic>
    </>
  )
};

export default Banner;