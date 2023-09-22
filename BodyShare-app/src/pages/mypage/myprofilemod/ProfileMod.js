import styled from "styled-components";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

const Titleo = styled.p`
  margin-top: 20px;
  font-size: 18px;
`;

const BannerPic = styled.button`
  margin-top: 7px;
  border: 1px solid rgba(135, 135, 135, 0.3);
  border-radius: 15px;
  border-style: dashed;
  width: 372px;
  height: 60px;
  background-color: #FFFFFF;
  color: #878787;
  font-size: 13px; 
`;

const PicInput = styled.input`
  cursor: pointer;
`

const TitleT = styled.p`
  margin-top: 7px;
  font-size: 18px;
`;

const ProfilePic = styled.button`
  margin-top: 7px;
  border: 1px solid rgba(135, 135, 135, 0.3);
  border-style: dashed;
  border-radius: 15px;
  width: 372px;
  height: 60px;
  background-color: #FFFFFF;
  color: #878787;
  font-size: 13px;
`;

const Titlej = styled.div`
  border-radius: 15px 0px 0px 15px;
  background-color: #FFFFFF;
  border: 1px solid rgba(135, 135, 135, 0.3);
  font-size: 13px;
  width: 60px;
  text-align: center;
  line-height: 45px;
`;

const Titlel = styled.div`
  border-radius: 15px 0px 0px 15px;
  background-color: #FFFFFF;
  border: 1px solid rgba(135, 135, 135, 0.3);
  font-size: 13px;
  width: 95px;
  text-align: center;
  line-height: 45px;
`

const Input = styled.input`
  height: 45px;
  color: #808080;
  border-radius: 0px 15px 15px 0px;
  background-color: #FFFFFF;
  border: 1px solid rgba(135, 135, 135, 0.3);
  font-size: 13px;
  padding-left: 10px;
`;

const Ul = styled.ul`
  margin-top: 7px;
  display: grid;
  grid-template-columns: 95px auto;
`

const Warn = styled.p`
  margin-top: 7px;
  font-size: 11px;
  color: red;
  margin-left: 100px;
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  width: 260px;
`

const BodyDiv = styled.div`
  margin-top: 7px;
  margin-right: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Bodydetail = styled.div`
  display: grid;
  grid-template-columns: 60px auto 50px;
  justify-content: center;
  margin-right: 15px;
`;

const BInput = styled.input`
  width: 50px;
  height: 43px;
  color: #808080;
  background-color: #FFFFFF;
  border: 1px solid rgba(135, 135, 135, 0.3);
  font-size: 13px;
  padding-left: 10px;

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const BodyP = styled.div`
  border-radius: 0px 15px 15px 0px;
  background-color: #FFFFFF;
  border: 1px solid rgba(135, 135, 135, 0.3);
  font-size: 13px;
  width: 50px;
  text-align: center;
  line-height: 45px;
`;


const ProfileMod = function ({ password, nickname, height, weight }) {
  const {
    register,
    control,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const validatePassword = (value, password) => {
    return value === password || "기존 비밀번호와 다릅니다.";
  };

  const [heightInput, setHeightInput] = useState(height);
  const [weightInput, setWeightInput] = useState(weight);

  const handleHeightChange = (event) => {
    const value = event.target.value.replace(/[^\d.]/g, '');
    const parts = value.split('.');
    const integerPart = parts[0].slice(0, 3);
    let decimalPart = '';
    if (parts.length > 1) {
      decimalPart = `.${parts[1].slice(0, 1)}`;
    }
    const formattedValue = `${integerPart}${decimalPart}`;
    setHeightInput(formattedValue);
  };

  const handleWeightChange = (event) => {
    const value = event.target.value.replace(/[^\d.]/g, '');
    const parts = value.split('.');
    const integerPart = parts[0].slice(0, 3);
    let decimalPart = '';
    if (parts.length > 1) {
      decimalPart = `.${parts[1].slice(0, 1)}`;
    }
    const formattedValue = `${integerPart}${decimalPart}`;
    setWeightInput(formattedValue);
  };

  const hidePassword = (password) => {
    // 비밀번호 문자열의 첫 번째 문자를 제외한 나머지를 '*'로 대체
    return password.charAt(0) + '*'.repeat(password.length - 1);
  };


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Titleo>배너사진</Titleo>
        <BannerPic>
          <PicInput type="file"
            accept="image/gif, image/jpeg, image/png, image/jpg" name="bannerImg">
          </PicInput>
        </BannerPic>
        <TitleT>프로필 사진</TitleT>
        <ProfilePic>
          <PicInput type="file"
            accept="image/gif, image/jpeg, image/png, image/jpg" name="profileImg">
          </PicInput>
        </ProfilePic>
        <Ul>
          <Titlel>닉네임</Titlel>
          <Input placeholder={nickname}></Input>
        </Ul>
        <Warn>중복된 닉네임입니다.</Warn>
        <Ul>
          <Titlel>기존 비밀번호</Titlel>
          <Controller
            name="currentPassword"
            control={control}
            rules={{
              required: "기존 비밀번호를 입력하세요.",
              validate: (value) => validatePassword(value, password),
            }}
            render={({ field }) => (
              <>
                <Input
                  {...field}
                  type="password"
                  id="currentPassword"
                  placeholder={hidePassword(password)}
                />
                <Warn>
                  {errors.currentPassword && (
                    <p style={{ color: "red" }}>{errors.currentPassword.message}</p>
                  )}
                </Warn>
              </>
            )}
          />
        </Ul>
        <Ul>
          <Titlel>변경 비밀번호</Titlel>
          <Controller
            name="password"
            control={control}
            rules={{
              required: "비밀번호를 입력하세요.",
              minLength: {
                value: 8,
                message: "비밀번호는 최소 8자 이상이어야 합니다.",
              },
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/,
                message:
                  "비밀번호는 대문자, 소문자, 숫자, 특수 문자(@#$%^&+=)를 최소 한 개씩 포함해야 합니다.",
              },
            }}
            render={({ field }) => (
              <>
                <Input
                  {...field}
                  type="password"
                  id="password"
                  placeholder="비밀번호 입력"
                />
                <Warn>
                  {errors.password ? (
                    <p>{errors.password.message}</p>
                  ) : (
                    <p style={{ display: "none" }} />
                  )}
                </Warn>
              </>
            )}
          />
        </Ul>
        <Ul>
          <Titlel>비밀번호 확인</Titlel>
          <Controller
            name="passwordConfirm"
            control={control}
            rules={{
              required: "비밀번호를 다시 입력하세요.",
              validate: (value) =>
                value === getValues("password") ||
                "비밀번호와 일치하지 않습니다.",
            }}
            render={({ field }) => (
              <>
                <Input
                  {...field}
                  type="password"
                  id="passwordConfirm"
                  placeholder="비밀번호 확인"
                />
                <Warn>
                  {errors.passwordConfirm ? (
                    <p>{errors.passwordConfirm.message}</p>
                  ) : (
                    <p style={{ display: "none" }} />
                  )}
                </Warn>
              </>
            )}
          />
        </Ul>
        <BodyDiv>
          <Bodydetail>
            <Titlej>키</Titlej>
            <BInput
              placeholder={height}
              value={heightInput}
              onChange={handleHeightChange} // 값이 변경될 때 실행될 함수 설정
              type="text" // 숫자만 입력되도록 설정
            />
            <BodyP>cm</BodyP>
          </Bodydetail>
          <Bodydetail>
            <Titlej>몸무게</Titlej>
            <BInput
              placeholder={weight}
              value={weightInput}
              onChange={handleWeightChange} // 값이 변경될 때 실행될 함수 설정
              type="text" // 숫자만 입력되도록 설정
            />
            <BodyP>kg</BodyP>
          </Bodydetail>
        </BodyDiv>
      </form>

    </>
  );
};

export default ProfileMod;