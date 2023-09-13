import styled from "styled-components";
import bannerpic from "../../../src/assets/Img/banner.jpg"

const Banner = styled.img`
  width: 390px;
  height: 87px;
`;

const Pf = styled.ul`

`

const Pfpic = styled.img`
  width: 163px;
  height: 163px;
`;

const Title = styled.p`
  font-size: 23px;
`;

const Info = styled.ul`
  width: 349px;
  height: 206px;
`;

const Infoli = styled.li`

`;

const Infodt = styled.li`

`;

const logout = styled.div`

`;

const Pfcomment = styled.div`

`;

const Pfcommentul = styled.div`
  width: 174px;
  height: 25px;
  list-style: none;
  padding: 0;
`;



const Logout = styled.button`
    background-color: #ff0000; 
    color: #fff; 
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    margin-top: 16px;
`;

const Modifypf = styled.button`

`;

const Inst = styled.li`
    width: 215px;
    height: 153px;
`

const Mypage = function(){
    return(
        <>
            <Banner src={bannerpic} />
            <Title>마이페이지</Title>
            <Pf>
                <Pfpic src="../../../src/assets/Img/프로필사진.png" />
                <Pfcomment>
                    <Pfcommentul>
                        <br />
                        <li>nickname</li>
                        <br />
                        <li>
                            <Inst>
                                <li>요가</li>
                                <li>필라테스</li>
                            </Inst>
                        </li>
                    </Pfcommentul>
                </Pfcomment>
            </Pf>
            <Info>
                <Infoli>
                    <ul class="infoul">
                        <li>아이디</li>
                        <li>닉네임</li>
                        <li>키</li>
                        <li>몸무게</li>
                    </ul>
                </Infoli>
                <Infodt>
                    <ul class="infodtul">
                        <li>kimm</li>
                        <li>kimmmmm</li>
                        <li>167cm</li>
                        <li>50kg</li>
                    </ul>
                </Infodt>
            </Info>
            <Modifypf>modifypf</Modifypf>
            <Logout onClick={logout}>logout</Logout>

        </>
    )
};

export default Mypage;