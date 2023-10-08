import styled from "styled-components";

const Titlel = styled.div`
  border-radius: 15px 0px 0px 15px;
  background-color: #FFFFFF;
  border: 1px solid rgba(135, 135, 135, 0.3);
  font-size: 13px;
  width: 95px;
  text-align: center;
  line-height: 45px;
  color: black;
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

const Password = function ({password, register, errors, getValues}) {
  const hidePassword = (password) => {
    return password.charAt(0) + '*'.repeat(password.length - 1);
  };

  return(
    <>
      <Ul>
          <Titlel>기존 비밀번호</Titlel>
          <Input
          {...register("password", {
            validate: (value) =>
              value === password || "기존 비밀번호와 일치하지 않습니다."
          })}
          placeholder={hidePassword(password)}
          type="password"
        />
        <Warn>{errors.password?.message}</Warn>
        </Ul>
    </>
  )
};

export default Password