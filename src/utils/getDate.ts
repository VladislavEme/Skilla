import { day, month } from '../constants/stringConstants';

export const getDate = () => {
  const date = new Date();
  const indexDay = date.getDay();
  const dateNumber = date.getDate();
  const indexMonth = date.getMonth();

  return `${day[indexDay]}, ${dateNumber} ${month[indexMonth]}`;
};
