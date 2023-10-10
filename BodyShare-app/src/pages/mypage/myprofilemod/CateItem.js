import { useRecoilValue } from "recoil";
import { isDarkAtom } from "recoil/themeRecoil";
import styled from "styled-components";

const SelectedDiv = styled.div``;

const Select = styled.div`
  display: grid;
  grid-template-columns: auto;
`;

const SelectCircle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 23px;
  border-radius: 23px;
  background-color: rgba(85, 111, 255, 0.3);
  text-align: center;
  line-height: 23px;
`;

const SelectP = styled.p`
  font-size: 11px;
  font-weight: bold;
  color: #656565;
`;

const Cover = styled.div`
  background-color: ${props => props.isDarkMode ? "rgb(174 195 251)" : ""};
  border-radius: 23px;
  width: 56px;
  height: 23px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;  /* 말줄임 적용 */
`;

const CateItem = function ({ record }) {
  const isDarkMode = useRecoilValue(isDarkAtom)
  if (!record || typeof record.name === 'undefined') {
    return null; // 'record'가 정의되지 않았거나 'name' 속성이 없는 경우 처리
  }
  return (
    < SelectedDiv >
      <Select>
        <SelectCircle>

          <SelectP>
            <Cover isDarkMode={isDarkMode}>
              {record.name}
            </Cover>
          </SelectP>

        </SelectCircle>
      </Select>
    </SelectedDiv >
  );
};

export default CateItem;