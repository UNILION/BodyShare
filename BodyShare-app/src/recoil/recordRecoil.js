import { atom, selector } from 'recoil';

export const sportCount = atom({
  key: 'sportCount',
  default: 0,
});

export const foodCount = atom({
  key: 'foodCount',
  default: 0,
});

export const totalSelector = selector({
  key: 'totalSelector',
  get: ({ get }) => {
    const sport = get(sportCount);
    const food = get(foodCount);
    return sport + food;
  },
});
