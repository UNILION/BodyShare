import styled from "styled-components";
import IntroMessage from "pages/user/userinfo/IntroMessage";
import Info from "pages/user/userinfo/Info";

const Container = styled.div`
  display: grid;
  width: 390px;
  height: 696px;
  grid-template-rows: auto auto auto ;
  gap: 10px;
  
`;

const UserInfo = function () {

  return (
    <Container>
      <IntroMessage />

      <Info />
    </Container>
  );
};

export default UserInfo;