import styled from "styled-components";

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

const Check = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 10px;
`;


const CommunityContent = function ({register, errors}) {
  return (
    <CommunityContentContainer>
    <Title>커뮤니티 설명</Title>
    <Contents
      {...register("content", {
        required: true,
        maxLength: 60,
      })}
      placeholder="나의 커뮤니티를 설명해주세요!
(최대 60글자)"
    />
    {errors.content?.type === "required" && (
      <Check>설명을 필수로 적어주세요!</Check>
    )}
    {errors.content?.type === "maxLength" && (
      <Check>최대 60글자까지 가능합니다!</Check>
    )}
  </CommunityContentContainer>
  )
}

export default CommunityContent;