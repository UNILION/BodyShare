import styled from "styled-components";

const CheckContainer = styled.div`
  color:  ${(props) => (props.ccolor ? props.ccolor : "red")};
  font-size:  ${(props) => (props.cfs ? props.cfs : "12px")};
  margin-top:  ${(props) => (props.cmt ? props.cmt : "5px")};
  margin-bottom:  ${(props) => (props.cmb ? props.cmb : "10px")};
`

const Check = function (props) {
  return (
    <CheckContainer {...props} />
  )
}

export default Check;