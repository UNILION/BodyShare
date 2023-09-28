import styled from "styled-components";
import Button from "components/commons/Button"
import Image5 from "assets/Img/right.png"
import Image6 from "assets/Img/red.png"

const MainBar = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 90%;
  margin-top: 10px;
`;

const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid rgba(135, 135, 135, 0.3);
  border-radius: 15px;
  width: 206px;
  height: 48px;
  align-items: center;
` ;

const Feed = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: bold;
`;

const Member = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: bold;
`;

const Mainbar = function ({registerMember, userCnt, postCnt, registerChange}) {
  return (
    <MainBar>
      <Info>
        <Feed>
          <p>{postCnt}</p>
          <p>게시물</p>
        </Feed>
        <Member>
          <p>{userCnt}</p>
          <p>회원</p>
        </Member>
      </Info>
      <Button
        name={registerMember ? "탈퇴하기" : "가입하기"}
        bc={registerMember ? "#FF3131" : "#556FFF"}
        img={registerMember ? Image6 : Image5}
        hovercolor={registerMember ? "#FF0000" : ""}
        iwidth={registerMember ? "40px" : "30px"}
        iheight={registerMember ? "40px" : "30px"}
        imt={registerMember ? "5px" : "0"}
        width="130px"
        fs="15px"
        ml="10px"
        onClick={() => registerChange(registerMember)}
      />
    </MainBar>
  );
};

export default Mainbar;