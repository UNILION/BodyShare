import styled from "styled-components";
import Check from "components/commons/Check";

const CommunityTitleContainer = styled.div``;

const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin: 10px 0 10px 0;
`;

const Content = styled.input`
  width: 310px;
  height: 50px;
  font-size: 15px;
  border: 1px solid rgba(46, 44, 61, 0.3);
  border-radius: 15px;
  text-align: center;
  padding: 5px 20px;
`;

const CommunityTitle = function ({ register, errors }) {
  return (
    <CommunityTitleContainer>
      <Title>챌린지 명</Title>
      <Content
        {...register("title", {
          required: "챌린지 명을 필수로 적어주세요!",
          maxLength: {
            value: 10,
            message: "최대 10글자까지 가능합니다!",
          },
        })}
        placeholder="원하는 챌린지 이름을 지정해주세요!"
      />
      <Check>{errors.title?.message}</Check>
    </CommunityTitleContainer>
  );
};

export default CommunityTitle;
