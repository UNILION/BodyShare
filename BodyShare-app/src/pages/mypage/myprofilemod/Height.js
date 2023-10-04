import styled from "styled-components";
import React, { useState } from "react";

const Titlej = styled.div`
  border-radius: 15px 0px 0px 15px;
  background-color: #FFFFFF;
  border: 1px solid rgba(135, 135, 135, 0.3);
  font-size: 13px;
  width: 60px;
  text-align: center;
  line-height: 45px;
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

const Warn = styled.p`
  margin-top: 7px;
  font-size: 11px;
  color: red;
  margin-left: 10px;
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  width: 260px;
`

const Height = function ({ height, register, errors }) {
  
  return (
    <>
      <Bodydetail>
        <Titlej>키</Titlej>
        <BInput
          {...register("height", {
            required: "키를 작성해주세요",
            pattern: {
              value: /^\d{3}(\.\d{0,1})?$/,
              message: "3자리 숫자, 소수점 포함 4자리 숫자"
            }
          })}
          defaultValue={height}
          placeholder={height}
        />
        <BodyP>cm</BodyP>
        <Warn>{errors.height?.message}</Warn>
      </Bodydetail>
    </>
  )
};

export default Height;