import styled from "styled-components";

const StyledButton = styled.button`
  display: ${(props) => (props.tagName ? "inline" : "none")};
  width: ${(props) => (props.width ? props.width : "56px")};
  height: ${(props) => (props.height ? props.height : "23px")};
  color: ${(props) => (props.color ? props.color : "#656565")};
  background-color: ${(props) => (props.bc ? props.bc : "rgba(85,111,255, 0.3)")};
  font-size: ${(props) => (props.fs ? props.fs : "11px")};
  font-weight: ${(props) => (props.fw ? props.fw : "bold")};
  border-radius: ${(props) => (props.br ? props.br : "23px")};
  border: ${(props) => (props.border ? props.border : "none")};
  margin-top: ${(props) => (props.mt ? props.mt : "0px")};
  margin-right: ${(props) => (props.mr ? props.mr : "0px")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "0px")};
  margin-left: ${(props) => (props.ml ? props.ml : "0px")};
  cursor:  ${(props) => (props.cursor ? props.cursor : "pointer")};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;  /* 말줄임 적용 */

  &:hover {
    background-color: ${(props) => props.hoverColor ? props.hoverColor : "#A6B2F3"};
  }
`

const Name = styled.span`
  margin-top: ${(props) => (props.nmt ? props.nmt : "0px")};
  margin-right: ${(props) => (props.nmr ? props.nmr : "0px")};
  margin-bottom: ${(props) => (props.nmb ? props.nmb : "0px")};
  margin-left: ${(props) => (props.nml ? props.nml : "0px")};
`
const Tag = (props) => {
  return (
    <StyledButton {...props} >
      <Name>{props.tagName}</Name>
    </StyledButton>
  );
};

export default Tag;