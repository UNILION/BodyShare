// RP 상태를 저장할 Recoil 상태를 정의합니다.
import { atom, useRecoilState } from 'recoil';

export const sportListState = atom({
  key: 'sportState', // Recoil 상태의 고유 키
  default: '오늘의 운동 기록을 작성해주세요', // RP 상태의 기본값은 빈 문자열로 설정합니다.
});

export const useSPORTState = () => {
  return useRecoilState(sportListState);
};