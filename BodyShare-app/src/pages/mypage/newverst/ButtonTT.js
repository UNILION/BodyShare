import styled from "styled-components";

const StyledButton = styled.button`
  width: ${(props) => (props.width ? props.width : "200px")};
  height: ${(props) => (props.height ? props.height : "45px")};
  color: ${(props) => (props.color ? props.color : "white")};
  background-color: ${(props) => (props.bc ? props.bc : "#556FFF")};
  font-size: ${(props) => (props.fs ? props.fs : "20px")};
  border-radius: ${(props) => (props.br ? props.br : "23px")};
  border: ${(props) => (props.border ? props.border : "1px solid rgba(135,135,135,0.3)")};
  margin-top: ${(props) => (props.mt ? props.mt : "0px")};
  margin-right: ${(props) => (props.mr ? props.mr : "0px")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "0px")};
  margin-left: ${(props) => (props.ml ? props.ml : "0px")};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.hovercolor ? props.hovercolor : "#2748FF"};
  }
`

const ButtonContainer = styled.div`
  display: grid;
`

const Name = styled.span` 
  margin-top: ${(props) => (props.nmt ? props.nmt : "auto")};
  margin-right: ${(props) => (props.nmr ? props.nmr : "auto")};
  margin-bottom: ${(props) => (props.nmb ? props.nmb : "auto")};
  margin-left: ${(props) => (props.nml ? props.nml : "auto")};
`

const Image = styled.img`
  width: ${(props) => (props.iwidth ? props.iwidth : "30px")};
  height: ${(props) => (props.iheight ? props.iheight : "30px")};
  margin-top: ${(props) => (props.imt ? props.imt : "auto")};
  margin-right: ${(props) => (props.imr ? props.imr : "auto")};
  margin-bottom: ${(props) => (props.imb ? props.imb : "auto")};
  margin-left: ${(props) => (props.iml ? props.iml : "auto")};
  display: ${(props) => (props.img ? "grid" : "none")};
  place-items: center;
`

const Button = (props) => {
  return (
    <StyledButton {...props} >
      <ButtonContainer>
        <Name>{props.name}</Name>
      </ButtonContainer>
    </StyledButton>
  );
};

export default Button;