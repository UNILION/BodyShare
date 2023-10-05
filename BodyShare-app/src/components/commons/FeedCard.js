import styled from "styled-components";
import dumbbell from "assets/Img/dumbbell.png"
import timer from "assets/Img/timer.png"

const StyledCard = styled.div`
  width: ${(props) => (props.width ? props.width : "370px")};
  height: ${(props) => (props.height ? props.height : "")};
  color: ${(props) => (props.color ? props.color : "black")};
  background-color: ${(props) => (props.bc ? props.bc : "white")};
  font-weight: ${(props) => (props.fw ? props.fw : "")};
  border-radius: ${(props) => (props.br ? props.br : "15px")};
  border: ${(props) => (props.border ? props.border : "1px solid rgba(135,135,135,0.3)")};
  margin-top: ${(props) => (props.mt ? props.mt : "0px")};
  margin-right: ${(props) => (props.mr ? props.mr : "0px")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "0px")};
  margin-left: ${(props) => (props.ml ? props.ml : "0px")};
`

const Image = styled.img`
  width: ${(props) => (props.iwidth ? props.iwidth : "300px")};
  height: ${(props) => (props.iheight ? props.iheight : "300px")};
  margin-top: ${(props) => (props.imt ? props.imt : "10px")};
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
  margin-left: ${(props) => (props.tml ? props.tml : "20px")};
  font-size: ${(props) => (props.tfs ? props.tfs : "15px")};
  font-weight: ${(props) => (props.tfw ? props.tfw : "bold")};
  color: ${(props) => (props.fcolor ? props.fcolor : "black")};
  display: block;
  margin-top: 20px;
  font-size: 20px;
`

const Contents = styled.div`
  margin-top: ${(props) => (props.cmt ? props.cmt : "5px")};
  margin-right: ${(props) => (props.cmr ? props.cmr : "5px")};
  margin-bottom: ${(props) => (props.cmb ? props.cmb : "0px")};
  margin-left: ${(props) => (props.cml ? props.cml : "5px")};
  font-size: ${(props) => (props.cfs ? props.cfs : "15px")};
  color: ${(props) => (props.ccolor ? props.ccolor : "#878787")};
  display: block;
  border: none;
  width: 330px;
  padding: 5px 20px;
  line-height: 20px;
`

const Footer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
`

const Left = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr 1fr;
`

const Img = styled.img`
  width: 15px;
  height: 15px;
  margin: auto;
`

const Exer = styled.div`
  color: #878787;
  font-size: 14px;
  text-align: start;
  margin: 20px;
`

const Time = styled.div`
  color: #878787;
  font-size: 14px;
  text-align: start;
  margin: 20px;
`

const Upload = styled.div`
  color: #878787;
  font-size: 14px;
  text-align: end;
  margin: 20px;
`

const Hr = styled.hr`
  border: 1px solid rgba(46,44,61,0.3);
  max-width: 100%;
  margin: 3px auto;
`


const FeedCard = (props) => {
  return (
    <StyledCard {...props} >
      <Image {...props} src={props.img}></Image>
      <Title>{props.title}</Title>
      <Hr />
      <Contents>{props.contents}</Contents>
      <Footer>
        <Left>
          <Img src={dumbbell} />
          <Exer>{props.exercise}개</Exer>
          <Img src={timer} />
          <Time>{props.time}분</Time>
        </Left>
          <Upload>{props.upload}</Upload>
      </Footer>
    </StyledCard>
  );
};

export default FeedCard;