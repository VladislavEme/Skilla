import { insertZeroNum } from './getDate';

export const getDurateTime = (time: number) => {
  const minutesNum = Math.trunc(time / 60);
  const minutes = insertZeroNum(minutesNum);
  const secundsNum = time % 60;
  const secunds = insertZeroNum(secundsNum);

  return `${minutes}:${secunds}`;
};
