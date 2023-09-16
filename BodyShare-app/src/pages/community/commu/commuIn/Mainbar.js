import styled from "styled-components";
import Button from "../../../../components/commons/Button"
import Image5 from "../../../../assets/Img/right.png"
import Image6 from "../../../../assets/Img/red.png"

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

const Mainbar = function ({register, registerChange}) {
  
  return (
    <MainBar>
      <Info>
        <Feed>
          <p>404</p>
          <p>게시물</p>
        </Feed>
        <Member>
          <p>298</p>
          <p>회원</p>
        </Member>
      </Info>
      <Button
        name={register ? "탈퇴하기" : "가입하기"}
        bc={register ? "#FF3131" : "#556FFF"}
        img={register ? Image6 : Image5}
        hoverColor={register ? "#FF0000" : ""}
        iwidth={register ? "40px" : "30px"}
        iheight={register ? "40px" : "30px"}
        imt={register ? "5px" : "0"}
        width="130px"
        fs="15px"
        ml="10px"
        onClick={() => registerChange(register)}
      />
    </MainBar>
  );
};

export default Mainbar;