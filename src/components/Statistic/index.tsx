import { FC } from 'react';
import styles from './Statistic.module.scss';

interface StatisticProps {
  title: string;
  meaning: string;
  colorText: 'green' | 'yellow' | 'red';
  band: string;
}
export const Statistic: FC<StatisticProps> = ({ title, colorText, meaning, band }) => {
  return (
    <div className={styles.root}>
      <span className={styles.title}>
        {title}{' '}
        <span className={colorText === 'green' ? styles.green : colorText === 'yellow' ? styles.yellow : styles.red}>
          {meaning}
        </span>
      </span>
      <img src={band} alt={title} />
    </div>
  );
};
