import styled from "styled-components";

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

const Nickname = function ({nickname, register, errors}) {
  return (
    <>
      <Ul>
        <Titlel>닉네임</Titlel>
        <Input 
        {...register("nickname", {
          required: "닉네임을 적어주세요",
          maxLength: {
            value: 10,
            message: "최대 10글자까지 가능합니다",
          },
        })}
        placeholder={nickname}
        defaultValue={nickname}
        >
        </Input>
      </Ul>
      <Warn>{errors.nickname?.message}</Warn>
    </>
  )
};

export default Nickname