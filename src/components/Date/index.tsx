import styles from './Date.module.scss';

export const DateDay = () => {
  const formatter = new Intl.DateTimeFormat('ru', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  const date = formatter.format(new Date());

  return <div className={styles.date}>{date}</div>;
};
