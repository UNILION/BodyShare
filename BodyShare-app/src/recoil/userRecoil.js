import { atom, selector } from 'recoil';

// 아톰(atom) 정의
export const yourAtom = atom({
  key: 'yourAtom',
  default: [], // 초기 상태
});

// 셀렉터(selector) 정의
export const yourSelector = selector({
  key: 'yourSelector',
  get: ({ get }) => {
    const yourAtomValue = get(yourAtom); // 아톰 값 가져오기
    // 여기서 원하는 연산 수행
    return yourAtomValue; // 연산 결과 반환
  },
});