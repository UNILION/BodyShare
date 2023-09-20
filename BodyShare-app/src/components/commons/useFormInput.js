import styled from "styled-components";
import { forwardRef } from "react";

const StyledInput = styled.input`
  width: ${(props) => (props.width ? props.width : "200px")};
  height: ${(props) => (props.height ? props.height : "45px")};
  color: ${(props) => (props.color ? props.color : "black")};
  background-color: ${(props) => (props.bc ? props.bc : "white")};
  font-size: ${(props) => (props.fs ? props.fs : "")};
  font-weight: ${(props) => (props.fw ? props.fw : "")};
  border-radius: ${(props) => (props.br ? props.br : "15px")};
  border: ${(props) => (props.border ? props.border : "1px solid rgba(135,135,135,0.3)")};
  margin-top: ${(props) => (props.mt ? props.mt : "0px")};
  margin-right: ${(props) => (props.mr ? props.mr : "0px")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "0px")};
  margin-left: ${(props) => (props.ml ? props.ml : "0px")};
  padding-left: 15px;
  padding-right: 15px;
`

const Input = forwardRef((props, ref) => {
  return (
    <StyledInput {...props} ref={ref}
      type={props.type ? props.type : "text"}
      placeholder={props.placeholder ? props.placeholder : ""} />
  );
});

export default Input;