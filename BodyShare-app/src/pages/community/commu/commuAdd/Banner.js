import styled from "styled-components";

const BannerContainer = styled.div``;

const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin: 10px 0 10px 0;
`;

const Picture = styled.div`
  height: 350px;
  height: 60px;
  border: 1px dotted black;
  border-radius: 15px;
  text-align: center;
  padding-left: 50px;
  line-height: 60px;
`;

const Banner = function ({register}) {
  return(
    <BannerContainer>
    <Title>배너 사진</Title>
    <Picture>
      <input
        {...register("bannerImg")}
        type="file"
        accept="image/jpg, image/png, image/jpeg"
      />
    </Picture>
  </BannerContainer>
  )
}

export default Banner;