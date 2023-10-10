import styled from "styled-components";
import Check from "components/commons/Check";

const FeedTitleContainer = styled.div``;

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

const FeedTitle = function ({ register, errors }) {
  return (
    <FeedTitleContainer>
      <Title>피드 제목 추가하기</Title>
      <Content
        maxLength={10}
        {...register("feedTitle", {
          required: "피드 제목을 필수로 입력해주세요!",
          maxLength: {
            value: 10,
            message: "최대 10글자까지 가능합니다!",
          },
        })
        }
        placeholder="나의 피드에 제목을 붙여주세요!"
      />
      <Check>{errors.feedTitle?.message}</Check>
    </FeedTitleContainer>
  );
};

export default FeedTitle;
