import { useEffect, useState } from "react";
import styled from "styled-components";

const SportSearchResult = styled.div`
  margin-bottom: 20px;
  justify-content: center;
`;

const ResultButton = styled.button`
  width: 360px;
  //margin-top: 10px;
  background-color: ${(props) => (props.active ? props.hovercolor : 'white')};
  border: none;
  border-radius: 15px;
  padding-top: 25px;
  cursor: pointer;
  transition: background-color 0.2s; 

  &:hover {
    background-color: ${(props) => (props.active ? props.hovercolor : 'white')};
  }
`;

const RP = styled.p`
  font-size: 17px;
  text-align: left;
  margin-bottom: 10px;
`;

const Line = styled.div`
  width: 340px;
  border: 1px solid rgba(135, 135, 135, 0.3);
`;

const SearchListItem = function ( { record, selectedList, changeSelected } ) {
  const [buttonActive, setButtonActive] = useState(false);

  const handleButtonClick = () => {
    if (selectedList.length === 0) {
      // 선택된 항목이 없는 경우, 클릭한 항목을 선택합니다.
      changeSelected([record]);
      setButtonActive(true);
    } else if (selectedList.length === 1) {
      // 이미 선택된 항목이 하나 있는 경우, 다음 두 가지 경우를 고려합니다.
      if (buttonActive) {
        // 이미 선택된 항목을 다시 클릭하면 선택을 해제합니다.
        const temp = [...selectedList].filter((item) => item.no !== record.no);
        changeSelected(temp);
        setButtonActive(false);
      } else {
        // 다른 항목을 클릭하면 새로운 항목을 선택하고, 이전 선택을 해제합니다.
        changeSelected([record]);
        setButtonActive(true);
      }
    }
  };
  

  const detect = function(){
    if(!buttonActive){
      const temp = [...selectedList].filter(item => item.no == record.no );
      if(temp.length != 0){
        setButtonActive(!buttonActive);
      }
    }else if(buttonActive){
      const temp = [...selectedList].filter(item => item.no == record.no );
      if(temp.length == 0){
        setButtonActive(!buttonActive);
      }
    }  
  };

  useEffect(() => {
    detect();
  }, [selectedList]);

  return (
    <SportSearchResult>
      <ResultButton
        active={buttonActive}
        onClick={handleButtonClick}
        hovercolor="rgba(85, 111, 255, 0.7)"
      >
        <RP>{record.name}</RP>
        <Line></Line>
      </ResultButton>
    </SportSearchResult>
  );
};

export default SearchListItem;