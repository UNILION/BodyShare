import styled from "styled-components";
import previous from "../../../assets/Img/Previous.png"

const Top = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`

const Previous = styled.img`
  width: 20px;
  height: 20px;
`

const TopRight = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`

const TopTitle = styled.div`
  font-size: 20px;
`

const TopContent = styled.div`
font-size: 10px;
`

const Middle = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
`

const CommuAdd = function () {
  return(
    <>
    <Top>
      <Previous src={previous} alt="뒤로가기" />
      <TopRight>
        <TopTitle>커뮤니티 만들기</TopTitle>
        <TopContent>나에게 맞는 커뮤니티를 만들어보세요! 😛</TopContent>
      </TopRight>
    </Top>

    <Middle>

    </Middle>
    
    </>
  );
};

export default CommuAdd;