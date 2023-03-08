import { DAY, MONTH } from '../constants/stringConstants';

export const getDate = () => {
  const date = new Date();
  const indexDay = date.getDay();
  const dateNumber = date.getDate();
  const indexMonth = date.getMonth();

  return `${DAY[indexDay]}, ${dateNumber} ${MONTH[indexMonth]}`;
};

export const insertZeroNum = (count: number) => {
  return count < 10 ? `0${count}` : count;
};

export const getTime = (time: string) => {
  const dataParse = new Date(time);
  const hoursParse = dataParse.getHours();
  const minutesParse = dataParse.getMinutes();
  const hours = insertZeroNum(hoursParse);
  const minutes = insertZeroNum(minutesParse);

  return `${hours}:${minutes}`;
};
