import styled from "styled-components";
import Check from "components/commons/Check";

const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin: 10px 0 10px 0;
`;

const Contents = styled.textarea`
  width: 310px;
  height: 50px;
  font-size: 15px;
  border: 1px solid rgba(46, 44, 61, 0.3);
  border-radius: 15px;
  text-align: center;
  padding: 5px 20px;
`;

const CommunityContentContainer = styled.div``;

const CommunityContent = function ({register, errors}) {
  return (
    <CommunityContentContainer>
    <Title>커뮤니티 설명</Title>
    <Contents
      {...register("content", {
        required: "설명을 필수로 적어주세요!",
        maxLength: {
          value: 60,
          message: "최대 60글자까지 가능합니다!"
        }
      })}
      placeholder="나의 커뮤니티를 설명해주세요!
(최대 60글자)"
    />
    <Check>{errors.content?.message}</Check>
  </CommunityContentContainer>
  )
}

export default CommunityContent;