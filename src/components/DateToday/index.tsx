import { FC } from 'react';
import styles from './DateToday.module.scss';

export const DateToday: FC = () => {
  const formatter = new Intl.DateTimeFormat('ru', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  const date = formatter.format(new Date());

  return <div className={styles.date}>{date}</div>;
};
