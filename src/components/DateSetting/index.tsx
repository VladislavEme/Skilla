import { FC } from 'react';
import { DateFilter } from '../DateFilter';
import styles from './DateSetting.module.scss';

export const DateSetting: FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.balance}>
        Баланс:
        <span className={styles.sum}>&nbsp;272 ₽ </span>
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM18 13.2H13.2V18H10.8V13.2H6V10.8H10.8V6H13.2V10.8H18V13.2Z'
            fill='#005FF8'
          />
        </svg>
      </div>
      <DateFilter />
    </div>
  );
};
