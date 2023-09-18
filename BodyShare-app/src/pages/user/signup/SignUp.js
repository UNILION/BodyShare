import styled from "styled-components";
import IntroMessage from "pages/user/signup/IntroMessage";
import Interest from "pages/user/signup/Interest";
import Selected from "pages/user/signup/Selected";
import Button from 'pages/user/signup/Button';

const Container = styled.div`
  display: grid;
  width: 390px;
  height: 696px;
  grid-template-rows: auto auto auto 1fr;
  gap: 10px;
`;

const SignUp = function() {

  return (
    <Container>
      <IntroMessage />

      <Interest />

      <Selected />

      <Button />
    </Container>
  );
};

export default SignUp;