import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "recoil/themeRecoil";
import styled from "styled-components";

const SportSearchResult = styled.div`
  margin-left : 8px;
  margin-bottom: 20px;
  justify-content: center;
`;

const ResultButton = styled.button`
  width: 360px;
  background-color: ${(props) => (props.isDarkMode ? (props.active ? props.hovercolor : 'black') : (props.active ? props.hovercolor : 'white'))};
  border: none;
  border-radius: 15px;
  padding-top: 25px;
  cursor: pointer;
  transition: background-color 0.2s; 
  color: ${(props) => (props.isDarkMode ? 'white' : 'black')};

  &:hover {
    background-color:${(props) => (props.isDarkMode ? (props.active ? props.hovercolor : 'black') : (props.active ? props.hovercolor : 'white'))};
  }
`;

const RP = styled.p`
  font-size: 17px;
  text-align: left;
  margin-bottom: 10px;
  color: ${(props) => (props.color ? props.color : 'black')};
`;

const Line = styled.div`
  width: 340px;
  border: ${(props) => (props.isDarkMode ? "1px solid rgba(255, 255, 255, 0.7)": '1px solid rgba(135, 135, 135, 0.3)')};
`;

const Cover = styled.div`
  background-color: white;
  border-radius: 15px;
  width:360px;
`

const SearchListItem = function ({ record, selectedList, changeSelected }) {
  const [buttonActive, setButtonActive] = useState(false);
  const isDarkMode = useRecoilValue(isDarkAtom);

  const handleButtonClick = () => {
    if (selectedList.length == 0) {
      if (buttonActive == false) {
        changeSelected([...selectedList, record])
      } else {
        const temp = [...selectedList].filter(item => item.no != record.no);
        changeSelected(temp);
      }
      setButtonActive(!buttonActive);
    } else if (selectedList.length == 1) {
      if (buttonActive == true) {
        const temp = [...selectedList].filter(item => item.no != record.no);
        changeSelected(temp);
        setButtonActive(!buttonActive);
      }
    }
  };

  const detect = function () {
    if (!buttonActive) {
      const temp = [...selectedList].filter(item => item.no == record.no);
      if (temp.length != 0) {
        setButtonActive(!buttonActive);
      }
    } else if (buttonActive) {
      const temp = [...selectedList].filter(item => item.no == record.no);
      if (temp.length == 0) {
        setButtonActive(!buttonActive);
      }
    }
  };

  useEffect(() => {
    detect();
  }, [selectedList]);

  return (
    <SportSearchResult>
    <Cover>
      <ResultButton
        active={buttonActive}
        onClick={handleButtonClick}
        isDarkMode={isDarkMode}
        hovercolor="rgba(85, 111, 255, 0.7)"
      >
        <RP color={isDarkMode ? "white" : "black"}>{record.name}</RP>
        <Line isDarkMode={isDarkMode} />
      </ResultButton>
        </Cover>
    </SportSearchResult>
  );
};

export default SearchListItem;