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
            required: '비밀번호 영문, 숫자 포함 8~16글자',
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9가-힣]{8,16}$/,
              message: '영문, 숫자를 최소 1개씩 포함하여 8~16글자',
            }
          })}
          placeholder="비밀번호 입력"
          type="password"
        />
        {errors.afterpassword && (
          <Warn>{errors.afterpassword.message}</Warn>
        )}
      </Ul>
      <Ul> 
        <Titlel>비밀번호 확인</Titlel>
        <Input
          {...register("checkpassword", {
            required: '비밀번호를 확인해주세요',
            validate: (value) => {
              const afterpassword = getValues('afterpassword');
              return value === afterpassword || '비밀번호와 일치하지 않습니다';
            },
          })}
          placeholder="비밀번호 확인"
          type="password"
        />
        {errors.checkpassword && (
          <Warn>{errors.checkpassword.message}</Warn>
        )}
      </Ul>
    </>
  )
};

export default AfterPassword;