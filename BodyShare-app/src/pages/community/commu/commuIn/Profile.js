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

const Profile = function ( {title, intro, sports} ) {
  return(
    <Pfcommentul>
      <CommuName>{title}</CommuName>
      <CommuInLi>
        <CommuIntro>{intro}</CommuIntro>
      </CommuInLi>
        <Inst>
          <Tag 
            tagtitle={sports}
            mr="10px;"
            hoverColor="rgba(85,111,255, 0.3)"
            cursor="default"
          />
        </Inst>
    </Pfcommentul>
  )
}

export default Profile;