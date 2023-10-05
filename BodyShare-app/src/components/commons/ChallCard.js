import styled from "styled-components";

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
  margin-left: ${(props) => (props.cml ? props.cml : "0px")};
  font-size: ${(props) => (props.cfs ? props.cfs : "15px")};
  color: ${(props) => (props.ccolor ? props.ccolor : "black")};
  display: block;
  border: none;
  width: 330px;
  padding-left: 20px;
  line-height: 20px;
`


const Img = styled.img`
  width: 15px;
  height: 15px;
  margin: auto;
`

const Partner = styled.div`
  color: #878787;
  font-size: 14px;
  text-align: start;
  margin: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 10px 0px 10px 20px; 
`

const Time = styled.div`
  color: #878787;
  font-size: 14px;
  text-align: start;
  margin: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 10px 0px 10px 20px; 
`

const Dday = styled.div`
  color: #878787;
  font-size: 14px;
  text-align: start;
  margin: 10px 0px 10px 20px; 
  font-weight: bold;
`

const Upload = styled.div`
  color: #878787;
  font-size: 14px;
  margin: 10px 0px 10px 20px; 
  font-weight: bold;
`

const Hr = styled.hr`
  border: 1px solid rgba(46,44,61,0.3);
  max-width: 100%;
  margin: 3px auto;
`
const Name = styled.p`
  font-weight: bold;
`

const Num = styled.p`

`

const ChallCard = (props) => {
  return (
    <StyledCard {...props} >
      <Image {...props} src={props.img}></Image>
      <Hr />
      <Title>{props.title}</Title>
      <Upload>{props.upload}</Upload>
      <Contents>{props.contents}</Contents>
      <Dday>{props.dday}일 남음</Dday>
      <Time>
        <Name>
          총 시간
        </Name>
        <Num>
          {props.time}시간
        </Num>
      </Time>
      <Partner>
        <Name>
          참가자
        </Name>
        <Num>
          {props.exercise}명
        </Num>
      </Partner>
    </StyledCard>
  );
};

export default ChallCard;