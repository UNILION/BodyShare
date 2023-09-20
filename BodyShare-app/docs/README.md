# Recoil을 컴포넌트에서 사용하는 방법 예시 코드
import { useRecoilState, useRecoilValue } from 'recoil';
import { yourAtom, yourSelector } from './recoilState'; // Recoil 상태 불러오기

function YourComponent() {
  // useRecoilState를 사용하여 상태 읽기와 변경하기
  const [atomValue, setAtomValue] = useRecoilState(yourAtom);

  // useRecoilValue를 사용하여 상태 읽기 (변경 불가능)
  const selectorValue = useRecoilValue(yourSelector);

  const handleButtonClick = () => {
    // 상태 변경 예시
    setAtomValue(newValue);
  };

  return (
    <div>
      <p>Atom Value: {atomValue}</p>
      <p>Selector Value: {selectorValue}</p>
      <button onClick={handleButtonClick}>Change Atom Value</button>
    </div>
  );
}

export default YourComponent;