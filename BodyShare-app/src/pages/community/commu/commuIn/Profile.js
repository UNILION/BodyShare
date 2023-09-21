import styled from "styled-components";
import Tag from "components/commons/Tag";

const Pfcommentul = styled.div``;

const CommuName = styled.li`
  margin-top: 28px;
  font-size: 16px;
  font-weight: bold;
`;

const CommuInLi = styled.div`
  margin-top: 10px;
`;

const CommuIntro = styled.p`
  font-size: 14px;
`;

const Inst = styled.div`
    margin-top: 10px;
`;

const Profile = function () {
  return(
    <Pfcommentul>
      <CommuName>클라이밍이 좋은 사람들</CommuName>
      <CommuInLi>
        <CommuIntro>저희는 그저 클라이밍이 좋아서 모인 사람들입니다.</CommuIntro>
      </CommuInLi>
        <Inst>
          <Tag 
            tagtitle="요가"
            mr="10px;"
            hoverColor="rgba(85,111,255, 0.3)"
            cursor="default"
          />
        </Inst>
    </Pfcommentul>
  )
}

export default Profile;