import { atom, selector } from 'recoil';
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist()

// 아톰(atom) 정의
export const sportsAtom = atom({
  key: 'sports',
  default: [], // 초기 상태
  effects_UNSTABLE: [persistAtom]
});

// 셀렉터(selector) 정의
export const sportsSelector = selector({
  key: 'sportsSelector',
  get: ({ get }) => {
    const sportsAtomValue = get(sportsAtom); // 아톰 값 가져오기
    // 여기서 원하는 연산 수행
    return sportsAtomValue; // 연산 결과 반환
  },
});

//선택한 이름
export const selectedSportNameState = atom({
  key: 'selectedSportName',
  default: '',
});

//선택한 sportsNo
// recoil/selectedSportNo.js
export const selectedSportNoState = atom({
  key: 'selectedSportNoState',
  default: null
});