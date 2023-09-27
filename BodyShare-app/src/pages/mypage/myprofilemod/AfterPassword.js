import styled from "styled-components";
import React, { useState } from "react";

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

const AfterPassword = function ({ register, errors, getValues }) {
  return (
    <>
      <Ul>
        <Titlel>변경 비밀번호</Titlel>
        <Input
          {...register("afterpassword", {
            //required: "바꿀 비밀번호를 작성해주세요",
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/,
              message: "비밀번호는 대문자, 소문자, 숫자, 특수 문자(@#$%^&+=)를 최소 한 개씩 포함해야 합니다."
            }
          })}
          placeholder="비밀번호 입력"
        />
        <Warn>{errors.afterpassword?.message}</Warn>
      </Ul>
      <Ul>
        <Titlel>비밀번호 확인</Titlel>
        <Input
          {...register("checkpassword", {
            // validate 규칙 수정
            validate: (value) => {
              // 비밀번호 확인 필드와 변경 비밀번호 필드가 모두 빈 값인 경우 유효성 통과
              if (!value && !getValues().afterpassword) {
                return true;
              }
              return value === getValues().afterpassword || "비밀번호와 일치하지 않습니다.";
            },
          })}
          placeholder="비밀번호 확인"
        />
        <Warn>{errors.checkpassword?.message}</Warn>
      </Ul>
    </>
  )
};

export default AfterPassword;