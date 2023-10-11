import styled from "styled-components";
import Tag from "./Tag";

const StyledCard = styled.div`
  width: ${(props) => (props.width ? props.width : "180px")};
  height: ${(props) => (props.height ? props.height : "")};
  color: ${(props) => (props.color ? props.color : "black")};
  background-color: ${(props) => (props.bc ? props.bc : "white")};
  font-weight: ${(props) => (props.fw ? props.fw : "")};
  border-radius: ${(props) => (props.br ? props.br : "15px")};
  border: ${(props) => (props.border ? props.border : "1px solid rgba(135,135,135,0.3)")};
  margin-top: ${(props) => (props.mt ? props.mt : "10px")};
  margin-right: ${(props) => (props.mr ? props.mr : "0px")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "0px")};
  margin-left: ${(props) => (props.ml ? props.ml : "0px")};
  cursor: pointer;
`

const Image = styled.img`
  width: ${(props) => (props.iwidth ? props.iwidth : "170px")};
  height: ${(props) => (props.iheight ? props.iheight : "170px")};
  margin-top: ${(props) => (props.imt ? props.imt : "5px")};
  margin-right: ${(props) => (props.imr ? props.imr : "auto")};
  margin-bottom: ${(props) => (props.imb ? props.imb : "auto")};
  margin-left: ${(props) => (props.iml ? props.iml : "auto")};
  display: ${(props) => (props.img ? "grid" : "none")};
  place-items: center;
  border-radius: 13px;
`

const Title = styled.span`
  margin-top: ${(props) => (props.tmt ? props.tmt : "5px")};
  margin-right: ${(props) => (props.tmr ? props.tmr : "5px")};
  margin-bottom: ${(props) => (props.tmb ? props.tmb : "0px")};
  margin-left: ${(props) => (props.tml ? props.tml : "5px")};
  font-size: ${(props) => (props.tfs ? props.tfs : "15px")};
  font-weight: ${(props) => (props.tfw ? props.tfw : "bold")};
  color: ${(props) => (props.fcolor ? props.fcolor : "black")};
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;  /* 말줄임 적용 */
`

const Contents = styled.span`
  margin-top: ${(props) => (props.cmt ? props.cmt : "5px")};
  margin-right: ${(props) => (props.cmr ? props.cmr : "5px")};
  margin-bottom: ${(props) => (props.cmb ? props.cmb : "0px")};
  margin-left: ${(props) => (props.cml ? props.cml : "5px")};
  font-size: ${(props) => (props.cfs ? props.cfs : "12px")};
  color: ${(props) => (props.ccolor ? props.ccolor : "#878787")};
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;  /* 말줄임 적용 */
`

const Hr = styled.hr`
  border: 1px solid rgba(46,44,61,0.3);
  max-width: 180px;
  margin: 3px auto;
`

const Bottom = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.tagtitle ? "1fr 2fr" : "1fr"};
  place-items: center;
  max-width: 180px;
  margin: 3px;
`

const Footer = styled.span`
  margin-top: ${(props) => (props.fmt ? props.fmt : "0px")};
  margin-right: ${(props) => (props.fmr ? props.fmr : "0px")};
  margin-bottom: ${(props) => (props.fmb ? props.fmb : "0px")};
  margin-left: ${(props) => (props.fml ? props.fml : "0px")};
  font-size: ${(props) => (props.ffs ? props.ffs : "10px")};
  color: ${(props) => (props.fcolor ? props.fcolor : "#878787")};
`


const Card = (props) => {
  return (
    <StyledCard {...props} >
      <Image {...props} src={props.img}></Image>
      <Title>{props.title}</Title>
      <Contents>{props.contents}</Contents>
      <Hr />
      <Bottom {...props}>
        {props.tagtitle ? <Tag hovercolor="rgba(85,111,255, 0.3)" {...props}></Tag> : null}
        <Footer>{props.footer}</Footer>
      </Bottom>
    </StyledCard>
  );
};

export default Card;