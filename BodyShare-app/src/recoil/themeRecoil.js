import { atom, selector } from 'recoil';
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist()

// 아톰(atom) 정의
export const isDarkAtom = atom({
  key: 'isDark',
  default: false, // 초기 상태
  effects_UNSTABLE: [persistAtom]
});

// 셀렉터(selector) 정의
export const themeSelector = selector({
  key: 'themeSelector',
  get: ({ get }) => {
    const themeAtomValue = get(isDarkAtom); // 아톰 값 가져오기
    // 여기서 원하는 연산 수행
    return themeAtomValue; // 연산 결과 반환
  },
});