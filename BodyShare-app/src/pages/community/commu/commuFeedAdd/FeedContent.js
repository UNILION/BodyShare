import styled from "styled-components";
import Check from "components/commons/Check";

const FeedContentContainer = styled.div``;

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

const FeedContent = function ({ register, errors }) {

  return (
    <FeedContentContainer>
      <Title>오늘 무슨 일이 있었나요?</Title>
      <Content
        maxLength={60}
        {...register("feedContent", {
          required: "피드 설명을 적어주세요!",
          maxLength: {
            value: 60,
            message: "최대 60글자까지 가능합니다!",
          },
        })}
        placeholder="나의 피드를 설명해주세요!
        (최대 60글자)"
      />
      <Check>{errors.feedContent?.message}</Check>
    </FeedContentContainer>
  );
};

export default FeedContent;
