import { atom, selector } from 'recoil';
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist()

// 아톰(atom) 정의
export const userAtom = atom({
  key: 'userNo',
  default: "", // 초기 상태
  effects_UNSTABLE: [persistAtom]
});

// 셀렉터(selector) 정의
export const userSelector = selector({
  key: 'userSelector',
  get: ({ get }) => {
    const userAtomValue = get(userAtom); // 아톰 값 가져오기
    // 여기서 원하는 연산 수행
    return userAtomValue; // 연산 결과 반환
  },
});

// 아톰(atom) 정의
export const interestAtom = atom({
  key: 'interest',
  default: [], // 초기 상태
  effects_UNSTABLE: [persistAtom]
});

// 셀렉터(selector) 정의
export const interestSelector = selector({
  key: 'interestSelector',
  get: ({ get }) => {
    const interestAtomValue = get(interestAtom); // 아톰 값 가져오기
    // 여기서 원하는 연산 수행
    return interestAtomValue; // 연산 결과 반환
  },
});