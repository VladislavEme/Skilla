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
