import { FC } from 'react';
import { DateDay } from '../Date';
import styles from './Header.module.scss';

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <DateDay />
    </div>
  );
};
