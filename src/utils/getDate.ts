export const insertZeroNum = (count: number) => {
  return count < 10 ? `0${count}` : count;
};

export const getTime = (time: string) => {
  const date = new Date(time);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${insertZeroNum(hours)}:${insertZeroNum(minutes)}`;
};

export const getDateStart = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  return `${year}-${insertZeroNum(month + 1)}-${insertZeroNum(day)}`;
};

export const getDatePeriod = (dateIndexActive: number) => {
  const date = new Date();
  switch (dateIndexActive) {
    case 0:
      date.setDate(date.getDate() - 2);
      break;
    case 1:
      date.setDate(date.getDate() - 6);
      break;
    case 2:
      date.setMonth(date.getMonth() - 1);
      break;
    case 3:
      date.setMonth(date.getMonth() - 12);
      break;
  }
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return `&date_start=${year}-${insertZeroNum(month + 1)}-${insertZeroNum(day)}`;
};

export const getDateFormat = (value: string) => {
  const date = new Date(value);
  const year = date.getFullYear().toString();
  const yearFormatted = year.substring(year.length - 2);
  const month = date.getMonth();
  const day = date.getDate();
  return `${insertZeroNum(day)}.${insertZeroNum(month + 1)}.${yearFormatted}`;
};

// &date_end=${getDateStart()}
// console.log(getDateFormat('2023-03-07'));
