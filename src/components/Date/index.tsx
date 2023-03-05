import { getDate } from '../../utils/getDate';
import styles from './Date.module.scss';

export const DateDay = () => {
  const date = getDate();
  return <div className={styles.date}>{date}</div>;
};
