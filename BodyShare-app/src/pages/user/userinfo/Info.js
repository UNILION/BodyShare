import styled from "styled-components";
import user from "assets/Img/userProfileDefault.png"
import { useNavigate } from "react-router-dom";
import { useForm, Controller} from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message"
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:33000/api",
  withCredentials: true
});

const Form = styled.form`
  grid-row: 3;
  display: grid;
  grid-template-rows: auto auto auto auto;
  gap: 10px;
`;

const ProfileDiv = styled.div`
  grid-row: 1;
  width: 372px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 98px;
  height: 98px;
`;

const ProfileButton = styled.button`
  width: 68px;
  height: 25px;
  font-size: 13px;
  color: white;
  border-radius: 15px;
  background-color: #556FFF;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

const InputDiv = styled.div`
  grid-row: 2;
  display: grid;
  width: 372px;
  grid-template-rows: auto auto auto auto 1fr;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

const IdDiv = styled.div`

`;

const Id = styled.input`
  width: 240px;
  height: 45px;
  color: #808080;
  border-radius: 15px;
  background-color: #FFFFFF;
  border: 1px solid rgba(135, 135, 135, 0.3);
  font-size: 13px;
  padding-left: 10px;
`;

const IdButton = styled.button`
  width: 68px;
  height: 25px;
  font-size: 13px;
  color: white;
  border-radius: 15px;
  background-color: #556FFF;
  border: none;
  margin-left: 15px;

  &:hover {
    cursor: pointer;
  }
`;

const NicknameDiv = styled.div`
`;

const Nickname = styled.input`
  width: 240px;
  height: 45px;
  color: #808080;
  border-radius: 15px;
  background-color: #FFFFFF;
  border: 1px solid rgba(135, 135, 135, 0.3);
  font-size: 13px;
  padding-left: 10px;
`;

const NicknameButton = styled.button`
  width: 68px;
  height: 25px;
  font-size: 13px;
  color: white;
  border-radius: 15px;
  background-color: #556FFF;
  border: none;
  margin-left: 15px;

  &:hover {
    cursor: pointer;
  }
`;

const Pw = styled.input.attrs({ type: "password" })`
  width: 311px;
  height: 45px;
  color: #808080;
  border-radius: 15px;
  background-color: #FFFFFF;
  border: 1px solid rgba(135, 135, 135, 0.3);
  font-size: 13px;
  padding-left: 10px;
`;

const CheckPw = styled.input.attrs({ type: "password" })`
  width: 311px;
  height: 45px;
  color: #808080;
  border-radius: 15px;
  background-color: #FFFFFF;
  border: 1px solid rgba(135, 135, 135, 0.3);
  font-size: 13px;
  padding-left: 10px;
`;

const BodyDiv = styled.div`
  display: flex;
`;

const HeightDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Height = styled.input`
  width: 110px;
  height: 45px;
  color: #808080;
  border-radius: 15px;
  background-color: #FFFFFF;
  border: 1px solid rgba(135, 135, 135, 0.3);
  font-size: 13px;
  padding-left: 10px;
`;

const HeightP = styled.p`
  font-size: 13px;
  color: #808080;
  margin-left: 10px;
`;

const WeigthDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

const Weight = styled.input`
  width: 110px;
  height: 45px;
  color: #808080;
  border-radius: 15px;
  background-color: #FFFFFF;
  border: 1px solid rgba(135, 135, 135, 0.3);
  font-size: 13px;
  padding-left: 10px;
`;

const WeigthP = styled.p`
  font-size: 13px;
  color: #808080;
  margin-left: 10px;
`;

const ButtonDiv = styled.div`
  grid-row: 3;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const PreviousButton = styled.button`
  background-color: #878787;
  width: 150px;
  height: 43.88px;
  border-radius: 15px;
  color: white;
  font-size: 13px;
  border: 1px solid rgba(135, 135, 135, 0.3);
  margin-right: 15px;

  &:hover {
    cursor: pointer;
  }
`;

const NextButton = styled.button`
  background-color: #556fff;
  width: 150px;
  height: 43.88px;
  border-radius: 15px;
  color: white;
  font-size: 13px;
  border: 1px solid rgba(135, 135, 135, 0.3);

  &:hover {
    cursor: pointer;
  }
`;

const Info = function () {
  const navigate = useNavigate();

  const { handleSubmit, control, formState: { errors }, getValues } = useForm();

  const onSubmit = async (data) => {
    // FormData 생성 및 데이터 추가
    const formData = new FormData();
    formData.append('profileImage', data.profileImage[0]);
    formData.append('id', data.id);
    formData.append('nickname', data.nickname);
    formData.append('password', data.password);
    formData.append('checkPassword', data.checkPassword);
    formData.append('height', data.height);
    formData.append('weight', data.weight);

    try {
      // axios 수정필요, 관심사 부분 보내서 등록하는 기능 필요
      const response = await instance.put("/register", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // 서버 응답 처리
      if (response.status === 200) {
        // 성공적으로 가입된 경우 처리
        // 로그인 페이지로 이동
        navigate("/")
      } else {
        // 가입 실패 시 에러 처리
        console.error('가입 실패');
      }
    } catch (error) {
      console.error(error);
    }

  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <ProfileDiv>
        <ProfileImg src={user}></ProfileImg>
        <Controller
          name="profileImage"
          control={control}
          render={({ field }) => (
            <>
            <input
              type="file"
              style={{ display: 'none' }} // 원래 input 숨김
              id="profileImageInput"
              onChange={(e) => field.onChange(e.target.files[0])}
            />
            <label htmlFor="profileImageInput">
              <ProfileButton as="span">등록하기</ProfileButton>
            </label>
          </>
          )}
        />
      </ProfileDiv>

      <InputDiv>
        <Controller
          name="id"
          control={control}
          rules={{
            required: '아이디를 입력하세요',
            // 추가적인 유효성 검사 규칙을 여기에 추가할 수 있습니다.
          }}
          render={({ field }) => (
            <IdDiv>
              <Id {...field} placeholder="아이디" />
              <IdButton>중복확인</IdButton>
            </IdDiv>
          )}
        />

        <Controller
          name="nickname"
          control={control}
          rules={{
            required: '닉네임을 입력하세요',
          }}
          render={({ field }) => (
            <NicknameDiv>
              <Nickname {...field} placeholder="닉네임" />
              <NicknameButton>중복확인</NicknameButton>
            </NicknameDiv>
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={{
            required: '비밀번호 영문, 숫자 포함 8~16글자',
          }}
          render={({ field }) => (
            <Pw {...field} placeholder="비밀번호 영문, 숫자 포함 8~16글자"></Pw>
          )}
        />
        
        <Controller
          name="checkPassword"
          control={control}
          rules={{
            required: '비밀번호를 확인해주세요',
            validate: (value) => {
              // value는 비밀번호 확인 필드의 값입니다.
              const password = getValues('password'); // 비밀번호 필드의 값 가져오기
              return value === password || '비밀번호와 일치하지 않습니다';
            },
          }}
          render={({ field, fieldState }) => (
            <>
              <CheckPw {...field} placeholder="비밀번호 재확인" />
              {fieldState.error && (
                <ErrorMessage>{fieldState.error.message}</ErrorMessage>
              )}
            </>
          )}
        />
        
        <BodyDiv>
          <Controller
            name="height"
            control={control}
            rules={{
              required: '키',
            }}
            render={({ field }) => (
              <HeightDiv>
                <Height {...field} placeholder="키"></Height>
                <HeightP>cm</HeightP>
              </HeightDiv>
            )}
          />
          
          <Controller
            name="weight"
            control={control}
            rules={{
              required: '몸무게',
            }}
            render={({ field }) => (
              <WeigthDiv>
                <Weight placeholder="몸무게"></Weight>
                <WeigthP>kg</WeigthP>
              </WeigthDiv>
            )}
          />
        </BodyDiv>
      </InputDiv>

      <ButtonDiv>
        <PreviousButton onClick={() => navigate("/signup")}>이전</PreviousButton>
        <NextButton type="submit">회원가입</NextButton>
      </ButtonDiv>
    </Form>
  );
};

export default Info;