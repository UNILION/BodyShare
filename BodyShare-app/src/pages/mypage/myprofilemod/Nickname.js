import styled from "styled-components";
import { useRecoilValue } from "recoil";
import axios from "axios";
import { useState } from "react";

const instance = axios.create({
  baseURL: "http://localhost:33000/api",
  withCredentials: true
});

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
  width: 185px;
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
  grid-template-columns: 95px 190px auto;
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

const NicknameButton = styled.button`
  width: 68px;
  height: 25px;
  font-size: 13px;
  color: white;
  border-radius: 15px;
  background-color: #556FFF;
  border: none;
  margin-left: 15px;
  margin-top: 12px;

  &:hover {
    cursor: pointer;
  }
`;

const Nickname = function ({ nickname, register, errors, getValues }) {

  const [checkNic, setCheckNic] = useState("1");

  const checkNicServer = async function (nic) {
    try {
      if (!nic) {
        // 닉네임이 비어 있는 경우 중복 확인을 하지 않음
        return;
      }
      const response = await instance.post('/users/checknic', { nic });
      if (response.data.check) {
        //중복 있음
        setCheckNic("2");
      } else {
        //중복 없음
        setCheckNic("3");
      }
    } catch (error) {
      // 에러 처리
      console.error(error);
    }
  };

  const checkNicValidate = function () {
    if (checkNic == 1) {
      return "중복확인을 해주세요";
    }
    else if (checkNic == 2) {
      return "중복된 닉네임입니다."
    }
    else {
      return;
    }
  };

  return (
    <>
      <Ul>
        <Titlel>닉네임</Titlel>
        <Input
          {...register("nickname", {
            required: '닉네임을 입력하세요',
            pattern: {
              value: /^[a-zA-Z0-9가-힣]{4,16}$/,
              message: '영문, 한글, 숫자로 이루어진 4~16자',
            },
            validate: checkNicValidate,
          })}
          placeholder={nickname}
        >
        </Input>
        <NicknameButton onClick={() => checkNicServer(getValues('nickname'))}>중복확인</NicknameButton>
      </Ul>
      {errors.nickname && (
        <Warn>{errors.nickname.message}</Warn>
      )}
    </>
  )
};

export default Nickname