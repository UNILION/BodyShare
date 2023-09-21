import { atom } from 'recoil';

export const sportTimeState = atom({
  key: 'sportTimeState',
  default: {
    hours: '',
    minutes: '',
    seconds: '',
  },
});