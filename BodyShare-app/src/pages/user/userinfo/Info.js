import styled from "styled-components";
import user from "assets/Img/userProfileDefault.png"
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { interestAtom, interestSelector } from "recoil/userRecoil";

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
  width: 390px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 98px;
  height: 98px;
  cursor: pointer;
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
  width: 390px;
  grid-template-rows: auto auto auto auto auto;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

const IdDiv = styled.div`

`;

const Id = styled.input`
  width: 300px;
  height: 45px;
  color: #808080;
  border-radius: 15px;
  background-color: #FFFFFF;
  border: 1px solid rgba(135, 135, 135, 0.3);
  font-size: 13px;
  padding-left: 10px;
`;

const NicknameDiv = styled.div`
`;

const Nickname = styled.input`
  width: 300px;
  height: 45px;
  color: #808080;
  border-radius: 15px;
  background-color: #FFFFFF;
  border: 1px solid rgba(135, 135, 135, 0.3);
  font-size: 13px;
  padding-left: 10px;
`;

const Pw = styled.input.attrs({ type: "password" })`
  width: 300px;
  height: 45px;
  color: #808080;
  border-radius: 15px;
  background-color: #FFFFFF;
  border: 1px solid rgba(135, 135, 135, 0.3);
  font-size: 13px;
  padding-left: 10px;
`;

const CheckPw = styled.input.attrs({ type: "password" })`
  width: 300px;
  height: 45px;
  color: #808080;
  border-radius: 15px;
  background-color: #FFFFFF;
  border: 1px solid rgba(135, 135, 135, 0.3);
  font-size: 13px;
  padding-left: 10px;
`;

const BodyDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;

const HeightDiv = styled.div`
  grid-column: 1;
  width: 155px;
  height: 70px;
  display: grid;
  grid-template-rows: auto auto;
  justify-content: center;
  align-items: center;
`;

const HDiv = styled.div`
  grid-row: 1;
  height: 60px;
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
  grid-column: 2;
  width: 155px;
  height: 70px;
  display: grid;
  grid-template-rows: auto auto;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
`;

const WDiv = styled.div`
  grid-row: 1;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  height: 80px;
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

const ErrorP = styled.p`
  color: red;
  font-size: 10px;
`;

const Info = function () {
  const navigate = useNavigate();

  const [image, setImage] = useState(user);
  const [interest, setInterest] = useRecoilState(interestAtom);
  const interestList = useRecoilValue(interestSelector);

  const { handleSubmit, register, formState: { errors, dirtyFields }, getValues, setError } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    // 중복 아이디 검사
    if (dirtyFields.id) {
      const idValue = getValues('id');
      try {
        const response = await instance.post('/users/checkid', { id: idValue });
        if (response.data.check) {
          // 중복된 아이디인 경우 에러 메시지 설정
          setError('id', {
            type: 'manual',
            message: '중복된 아이디입니다',
          });
          return; // 중복된 아이디일 경우 가입을 중단합니다.
        }
      } catch (error) {
        // 에러 처리
        console.error(error);
        setError('id', {
          type: 'manual',
          message: '중복 확인 중 오류가 발생했습니다',
        });
        return; // 중복 확인 중 에러가 발생한 경우 가입을 중단합니다.
      }
    }

     // 중복 닉네임 검사
     if (dirtyFields.nickname) {
      const nicknameValue = getValues('nickname');
      try {
        const response = await instance.post('/users/checknic', { nic: nicknameValue });
        if (response.data.check) {
          // 중복된 닉네임인 경우 에러 메시지 설정
          setError('nickname', {
            type: 'manual',
            message: '중복된 닉네임입니다',
          });
          return; // 중복된 닉네임일 경우 가입을 중단합니다.
        }
      } catch (error) {
        // 에러 처리
        console.error(error);
        setError('nickname', {
          type: 'manual',
          message: '중복 확인 중 오류가 발생했습니다',
        });
        return; // 중복 확인 중 에러가 발생한 경우 가입을 중단합니다.
      }
    }

    // FormData 생성 및 데이터 추가
    const formData = new FormData();
    if (data.profileImage[0]) {
      formData.append('profileImg', data.profileImage[0]);
    }
    formData.append('userId', data.id);
    formData.append('nickname', data.nickname);
    formData.append('password', data.password);
    formData.append('height', data.height);
    formData.append('weight', data.weight);

    try {
      // axios 수정필요, 관심사 부분 보내서 등록하는 기능 필요
      const response = await instance.post("/users/signup", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // 서버 응답 처리
      if (response.data.id) {
        // 성공적으로 가입된 경우 처리

        // 관심사 추가 코드 (for 문 이용), 추가 후 recoil에 있는 관심사 리스트 초기화 해야함
        try{
          for(let i=0; i<interestList.length; i++){
            const data = {
              userNo: response.data.id,
              sportsNo: interestList[i].no
            };
            const result = await instance.post("/users/interestadd", data);
          }
          // recoil 초기화
          setInterest([]);

          // 로그인 페이지로 이동
          navigate("/")
        } catch (error) {
          console.error(error);
        }
        
      } else {
        // 가입 실패 시 에러 처리
        console.error('가입 실패');
      }
    } catch (error) {
      console.error(error);
    }

  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <ProfileDiv>
        <ProfileImg src={image} onClick={() => document.getElementById("profileImageInput").click()}></ProfileImg>
        <label htmlFor="profileImageInput">
          <ProfileButton as="span">등록하기</ProfileButton>
        </label>
        <input
          type="file"
          id="profileImageInput"
          {...register('profileImage')}
          style={{ display: 'none' }} // 원래 input 숨김
          onChange={handleProfileImageChange}
        />
      </ProfileDiv>

      <InputDiv>
        <IdDiv>
          <Id
            {...register('id', {
              required: '아이디를 입력하세요',
              pattern: {
                value: /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{6,16}$/,
                message: '영문과 숫자로 이루어진 6~16자의 아이디를 입력하세요',
              },
            })}
            placeholder="아이디"
          />
        </IdDiv>
        {errors.id && (
          <ErrorP>{errors.id.message}</ErrorP>
        )}

        <NicknameDiv>
          <Nickname
            {...register('nickname', {
              required: '닉네임을 입력하세요',
              pattern: {
                value: /^[a-zA-Z0-9가-힣]{4,16}$/,
                message: '영문, 한글, 숫자로 이루어진 4~16자',
              },
            })}
            placeholder="닉네임"
          />
        </NicknameDiv>
        {errors.nickname && (
          <ErrorP>{errors.nickname.message}</ErrorP>
        )}

        <Pw
          {...register('password', {
            required: '비밀번호 영문, 숫자 포함 8~16글자',
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9가-힣]{8,16}$/,
              message: '영문, 숫자를 최소 1개씩 포함하여 8~16글자',
            },
          })}
          placeholder="비밀번호 영문, 숫자 포함 8~16글자"
        />
        {errors.password && (
          <ErrorP>{errors.password.message}</ErrorP>
        )}

        <CheckPw
          {...register('checkPassword', {
            required: '비밀번호를 확인해주세요',
            validate: (value) => {
              const password = getValues('password');
              return value === password || '비밀번호와 일치하지 않습니다';
            },
          })}
          placeholder="비밀번호 재확인"
        />
        {errors.checkPassword && (
          <ErrorP>{errors.checkPassword.message}</ErrorP>
        )}


        <BodyDiv>
          <HeightDiv>
            <HDiv>
              <Height
                {...register('height', {
                  required: '키',
                  pattern: {
                    value: /^\d{3}(\.\d{1})?$/,
                    message: '3자리 숫자, 소수점 포함 4자리 숫자',
                  },
                })}
                placeholder="키"
              />
              <HeightP>cm</HeightP>
            </HDiv>
            {errors.height && (
              <ErrorP>{errors.height.message}</ErrorP>
            )}
          </HeightDiv>
          
          <WeigthDiv>
            <WDiv>
              <Weight
                {...register('weight', {
                  required: '몸무게',
                  pattern: {
                    value: /^\d{2,3}(\.\d{1})?$/,
                    message: '2~3자리 숫자, 소수점 포함 3~4자리 숫자',
                  },
                })}
                placeholder="몸무게"
              />
              <WeigthP>kg</WeigthP>
            </WDiv>
            {errors.weight && (
              <ErrorP>{errors.weight.message}</ErrorP>
            )}
          </WeigthDiv>
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