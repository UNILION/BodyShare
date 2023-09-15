import styled from "styled-components";
import backButton from "../../assets/Img/back.png"
import checkButton from "../../assets/Img/circletcheck.png"
import delButton from "../../assets/Img/xbutton.png"

const All = styled.div`
  margin-left: 3px;
  margin-right: 3px;
  margin-top: 19px;
`

const Titleul = styled.ul`
  display: flex;
`

const Backbutton = styled.button`
  width: 20px;
  height: 20px;
  background-image: url(${backButton});
  background-size: cover;
  border-radius: 20px;
  border: none;
  cursor: pointer;
`

const Title = styled.p`
  margin-left: 5px;
  font-size: 23px;
  font-style: bold;
`

const Titleo = styled.p`
  margin-top: 7px;
  font-size: 20px;
`

const BannerPic = styled.button`
  margin-top: 7px;
  padding: 10px 20px;
  border: 1px solid #000000;
  border-radius: 15px;
  border-style: dashed;
  cursor: pointer;
  width: 372px;
  height: 60px;
  background-color: #FFFFFF;
  color: #878787;
`

const TitleT = styled.p`
  margin-top: 7px;
  font-size: 20px;
`

const ProfilePic = styled.button`
  margin-top: 7px;
  padding: 10px 20px;
  border: 1px solid #000000;
  border-style: dashed;
  border-radius: 15px;
  cursor: pointer;
  width: 372px;
  height: 60px;
  background-color: #FFFFFF;
  color: #878787;
`

const Idul = styled.ul`
  margin-top: 7px;
  display: flex;
`

const IdTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #000000;
  border: 1px solid rgba(46, 44, 61, 0.3);
  width: 82px;
  height: 46px;
  border-radius: 15px 0px 0px 15px;
`

const Id = styled.div`
  font-size: 20px;
  color: #777777;
  border: 1px solid rgba(46, 44, 61, 0.3);
  width: 284px;
  height: 46px;
  border-radius: 0px 15px 15px 0px;
`

const Nickul = styled.ul`
  margin-top: 7px;
  display: flex;
`

const NickTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #000000;
  border: 1px solid rgba(46, 44, 61, 0.3);
  width: 82px;
  height: 46px;
  border-radius: 15px 0px 0px 15px;
`

const Nick = styled.p`
  font-size: 20px;
  color: #000000;
  border: 1px solid rgba(46, 44, 61, 0.3);
  width: 233px;
  height: 46px;
  border-radius: 0px 15px 15px 0px;
`

const Nickbutton = styled.button`
  background-image: url(${checkButton});
  background-size: cover;
  margin-top: 7px;
  margin-left: 10px;
  width: 34px;
  height: 34px;
  border-radius: 34px;
  border: none;
  cursor: pointer;
`

const Nickwarnig = styled.p`
  margin-top: 5px;
  font-size: 11px;
  color: red;
`

const Pwul = styled.ul`
  margin-top: 7px;
  display: flex;
`

const PwTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #000000;
  border: 1px solid rgba(46, 44, 61, 0.3);
  width: 100px;
  height: 46px;
  border-radius: 15px 0px 0px 15px;
`

const Pw = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #000000;
  border: 1px solid rgba(46, 44, 61, 0.3);
  width: 196px;
  height: 46px;
  border-radius: 0px 15px 15px 0px;
`

const Pwbutton = styled.button`
  margin-top: 7px;
  margin-left: 10px;
  width: 76px;
  height: 34px;
  border: none;
  border-radius: 23px;
  cursor: pointer;
  background-color: #556FFF;
  color: #FFFFFF;
  font-size: 15px;
  cursor: pointer;
`

const Bodyul = styled.ul`
  margin-top: 7px;
  display: flex;

`

const Talltitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #000000;
  border: 1px solid rgba(46, 44, 61, 0.3);
  width: 37px;
  height: 46px;
  border-radius: 15px 0px 0px 15px;
`

const Tsizebox = styled.div`
  display: flex;
  align-items: center;
  color: #000000;
  border: 1px solid rgba(46, 44, 61, 0.3);
  width: 142px;
  height: 46px; 
  display: flex;
`

const Tallinput = styled.input`
  border: 1px solid rgba(46, 44, 61, 0.3);
  border-radius: 23px;
  width: 50px;
  height: 20px;
`

const Tallsize = styled.p`
    font-size: 20px;
    color: #000000;
`

const Weighttitle = styled.div`
  display: flex;
  align-items: center;
  color: #000000;
  border: 1px solid rgba(46, 44, 61, 0.3);
  width: 73px;
  height: 46px;
  font-size: 20px;
`

const Wsizebox = styled.div`
  display: flex;
  align-items: center;
  color: #000000;
  border: 1px solid rgba(46, 44, 61, 0.3);
  width: 114px;
  height: 46px;
  display: flex;
  border-radius: 0px 15px 15px 0px;
`

const Weightinput = styled.input`
  border: 1px solid rgba(46, 44, 61, 0.3);
  border-radius: 23px;
  width: 50px;
  height: 20px;
`

const Weightsize = styled.p`
  font-size: 20px;
    color: #000000;
`

const Bodywarnig = styled.p`
  margin-top: 5px;
  font-size: 11px;
  color: red;
`

const Cateckul = styled.div`
  margin-top: 7px;
  display: flex;
`

const Catetitle = styled.p`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #000000;
`

const Catesearch = styled.button`
  font-size: 15px;
  color: #FFFFFF;
  background-color: #556FFF;
  border-radius: 23px;
  width: 76px;
  height: 31px;
  border: none;
  margin-left: 157px;
  cursor: pointer;
`

const Cateul = styled.div`
  margin-top: 3px;
  display: flex;
`

const Cate = styled.div` 
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px solid ;
  background-color: rgba(85, 111, 255, 0.3);
  border-radius: 23px;
  width: 55px;
  height: 26px;
  font-size: 13px;
  color: #656565;
`

const Catedel = styled.button`
  background-image: url(${delButton});
  background-size: cover;
  border: 0px solid ;
  border-radius: 24.85px;
  width: 24.85px;
  height: 24.85px;
  font-size: 13px;
  text-align: center;
  color: #FFFFFF;
  cursor: pointer;
`

const Catewarnig = styled.p`
  margin-top: 5px;
  font-size: 11px;
  color: red;
`

const Modifyok = styled.button`
  background-color: #556FFF; 
    color: #fff; 
    padding: 10px 20px;
    border: none;
    border-radius: 23px;
    cursor: pointer;
    margin-top: 16px;
    width: 211px;
    height: 45px;
    float: right;
    font-size: 20px;
`

const MyProfileModify = function () {

  return (
    <>
      <All>
      <Titleul>
          <Backbutton></Backbutton>
          <Title>나의 정보 수정</Title>
        </Titleul>
        <Titleo>배너사진</Titleo>
        <BannerPic>변경을 하고싶은 사진을 업로드 해주세요!</BannerPic>
        <TitleT>프로필 사진</TitleT>
        <ProfilePic>변경을 하고싶은 사진을 업로드 해주세요!</ProfilePic>
        <Idul>
          <IdTitle>아이디</IdTitle>
          <Id>kimm</Id>
        </Idul>
        <Nickul>
          <NickTitle>닉네임</NickTitle>
          <Nick>kimmmmm</Nick>
          <Nickbutton></Nickbutton>
        </Nickul>
        <Nickwarnig>중복된 닉네임입니다.</Nickwarnig>
        <Pwul>
          <PwTitle>비밀번호</PwTitle>
          <Pw>********</Pw>
          <Pwbutton>변경</Pwbutton>
        </Pwul>
        <Bodyul>
          <Talltitle>키</Talltitle>
          <Tsizebox>
            <Tallinput></Tallinput>
            <Tallsize>cm</Tallsize>
          </Tsizebox>
          <Weighttitle>몸무게</Weighttitle>
          <Wsizebox>
            <Weightinput></Weightinput>
            <Weightsize>kg</Weightsize>
          </Wsizebox>
        </Bodyul>
        <Bodywarnig>필수로 작성해주세요!</Bodywarnig>
        <Cateckul>
          <Catetitle>나의 관심 카테고리</Catetitle>
          <Catesearch>검색</Catesearch>
        </Cateckul>
        <Cateul>
          <Cate>요가</Cate>
          <Catedel></Catedel>
        </Cateul>
        <Catewarnig>한 개 이상의 카테고리를 선택해주세요!</Catewarnig>
        <Modifyok>프로필 수정완료</Modifyok>
      </All>
    </>
  )
};

export default MyProfileModify;