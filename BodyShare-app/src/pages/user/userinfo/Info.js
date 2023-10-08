import styled from "styled-components";
import user from "assets/Img/userProfileDefault.png"
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useState } from "react";
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
  cursor: pointer;
`;

const ProfileButton = styled.button`
  display: grid;
  text-align: center;
  line-height: 25px;
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
  grid-template-rows: auto auto auto auto auto;
  gap: 10px;
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
  margin-left: 20px;
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

  const { handleSubmit, register, formState: { errors }, getValues } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
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

  // id 중복검사 useState
  const [checkId, setCheckId] = useState("1");

  const checkIdServer = async function(id){
    try{
      const response = await instance.post('/users/checkid', { id });
      if (response.data.check){
        //중복 있음
        setCheckId("2");
      } else {
        //중복 없음
        setCheckId("3");
      }
    } catch(error){
      // 에러 처리
      console.error(error);
    }
  };

  const checkIdValidate = function(){
    if(checkId==1){
      return "중복확인을 해주세요";
    }
    else if(checkId==2){
      return "중복된 아이디입니다."
    }
    else{
      return ;
    }
  };

  // nickname 중복검사 useState
  const [checkNic, setCheckNic] = useState("1");

  const checkNicServer = async function(nic){
    try{
      const response = await instance.post('/users/checknic', { nic });
      if (response.data.check){
        //중복 있음
        setCheckNic("2");
      } else {
        //중복 없음
        setCheckNic("3");
      }
    } catch(error){
      // 에러 처리
      console.error(error);
    }
  };

  const checkNicValidate = function(){
    if(checkNic==1){
      return "중복확인을 해주세요";
    }
    else if(checkNic==2){
      return "중복된 닉네임입니다."
    }
    else{
      return ;
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
          {...register('profileImage', {
            //required: '프로필 이미지를 업로드하세요',
          })}
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
              validate: checkIdValidate,
            })}
            placeholder="아이디"
          />
          <IdButton onClick={() => checkIdServer(getValues('id'))}>중복확인</IdButton>
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
              validate: checkNicValidate,
            })}
            placeholder="닉네임"
          />
          <NicknameButton onClick={() => checkNicServer(getValues('nickname'))}>중복확인</NicknameButton>
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
                    value: /^\d+(\.\d{1})?$/,
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