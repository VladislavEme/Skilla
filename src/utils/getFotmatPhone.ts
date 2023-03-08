export const getFormatPhone = (tel: string) => {
  return `+${tel[0]} (${tel.substring(1, 4)}) ${tel.substring(4, 7)}-${tel.substring(7, 9)}-${tel.substring(9, 11)}`;
};
