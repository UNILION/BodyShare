import styled from "styled-components";
import logoutLogo from "assets/Img/logout.png";
import { useNavigate } from "react-router-dom";
import Button from "components/commons/Button";
import Image5 from "assets/Img/right.png";
import ButtonT from "pages/mypage/newverst/ButtonT";
import Image6 from "assets/Img/left.png";
import { useRecoilState } from 'recoil';
import { userAtom } from "recoil/userRecoil";
import axios from "axios";

//axios.defaults.baseURL = "http://localhost:33000/api";
const instance = axios.create({
  baseURL: "http://localhost:33000/api",
  withCredentials: true
});

const All = styled.div`
  margin-left: 3px;
  margin-right: 3px;
  margin-top: 19px;
`;

const Title = styled.p`
  margin-left: 5px;
  font-size: 23px;
  font-style: bold;
`;

const Main = styled.div`
  margin-left: 7px;
  margin-top: 20px;
  width: 366px;
  height: 433px;
  border: 1px solid #B3B3B3;
  border-radius: 100px;
`;

const Imt = styled.img`
  margin-top: 53px;
  margin-left: 96px;
  width: 180px;
  height: 180px;
`;

const To = styled.p`
  margin-top: 20px;
  text-align: center;
  font-size: 28px;
`;

const Tt = styled.p`
  text-align: center;
  font-size: 28px;
`;

const Ttt = styled.div`
  text-align: center;
  font-size: 15px;
`;

const Tf = styled.p`
  text-align: center;
  font-size: 15px;
`;

const Tff = styled.p`
  text-align: center;
  font-size: 15px;
`;

const Buttons = styled.ul`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr; /* 가로로 두 개의 열을 생성합니다. */
  margin-bottom: 23px;
  gap: 5px; 
`;

const PasswordModify = function () {
  const navigate = useNavigate();

  const [userNo, setUserNo] = useRecoilState(userAtom);

  const Logout = async function(){
    try {
      // 서버 세션 처리 - 서버에서 세션 삭제 API 호출
      const response = await instance.get('/users/logout'); // 예시: 로그아웃 요청을 서버로 보냄

      if (response.data.success) {
        // 서버에서 세션 삭제 성공
        // Recoil Atom 초기화
        setUserNo('');
        navigate('/');
      } else {
        // 서버에서 세션 삭제 실패 또는 다른 오류 처리
        console.error('서버에서 로그아웃 실패');
      }
    } catch (error) {
      // 서버와 통신 중 에러 처리
      console.error('로그아웃 요청 중 에러:', error);
    }
    
  };

  return (
    <>
      <All>
        <Title>로그아웃</Title>
        <Main>
          <Imt src={logoutLogo}></Imt>
          <To>정말 로그아웃</To>
          <Tt>하시겠어요?</Tt>
          <Ttt>저희 BODY SHARE에는</Ttt>
          <Tf>아직 많은 재밌는 컨텐츠가</Tf>
          <Tff>준비되어 있답니다ㅜㅡㅜ</Tff>
        </Main>
        <Buttons>
          <ButtonT
            name="돌아가기"
            img={Image6}
            onClick={() => navigate("/mypage")}
            width="180px"
            ml="10px"
          />
          <Button
            name="로그아웃"
            img={Image5}
            onClick={Logout}
            bc="rgba(85, 111, 255, 0.5)"
            width="180px"
          />
        </Buttons>
      </All>
    </>
  );
};

export default PasswordModify;