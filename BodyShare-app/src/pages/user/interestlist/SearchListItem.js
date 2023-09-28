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
    if(selectedList.length < 3){
      if(buttonActive == false){
        changeSelected([...selectedList, record])
      } else{
        const temp = [...selectedList].filter(item => item.no != record.no );
        changeSelected(temp);
      }
      setButtonActive(!buttonActive);
    }else if(selectedList.length == 3){
      if(buttonActive == true){
        const temp = [...selectedList].filter(item => item.no != record.no );
        changeSelected(temp);
        setButtonActive(!buttonActive);
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