import { FC } from 'react';
import styles from './Client.module.scss';
import avatar from '../../assets/img/headerSvg/avatar.png';

export const Client: FC = () => {
  return (
    <>
      <div className={styles.client}>
        <span>ИП Сидорова Александра Михайловна</span>
        <svg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M1.41 0.590088L6 5.17009L10.59 0.590088L12 2.00009L6 8.00009L0 2.00009L1.41 0.590088Z'
            fill='#ADBFDF'
          />
        </svg>
      </div>
      <div className={styles.avatar}>
        <img src={avatar} alt='Avatar' />
        <svg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M1.41 0.590088L6 5.17009L10.59 0.590088L12 2.00009L6 8.00009L0 2.00009L1.41 0.590088Z'
            fill='#ADBFDF'
          />
        </svg>
      </div>
    </>
  );
};
