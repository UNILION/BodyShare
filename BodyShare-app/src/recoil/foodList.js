// RP 상태를 저장할 Recoil 상태를 정의합니다.
import { atom, useRecoilState } from 'recoil';

export const rpState = atom({
  key: 'rpState', // Recoil 상태의 고유 키
  default: '오늘의 식단을 기록해주세요', // RP 상태의 기본값은 빈 문자열로 설정합니다.
});

// RP 상태를 읽고 업데이트할 커스텀 Recoil Hook을 만듭니다.
export const useRPState = () => {
  return useRecoilState(rpState);
};