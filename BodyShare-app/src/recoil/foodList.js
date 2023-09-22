import { atom, selector } from 'recoil';
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist()

// 아톰(atom) 정의
export const foodAtom = atom({
  key: 'food',
  default: [], // 초기 상태
  effects_UNSTABLE: [persistAtom]
});

// 셀렉터(selector) 정의
export const foodSelector = selector({
  key: 'foodSelector',
  get: ({ get }) => {
    const foodAtomValue = get(foodAtom); // 아톰 값 가져오기
    // 여기서 원하는 연산 수행
    return foodAtomValue; // 연산 결과 반환
  },
});