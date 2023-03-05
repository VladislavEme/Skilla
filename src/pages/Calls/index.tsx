import { FC } from 'react';
import { DateSetting } from '../../components/DateSetting';
import { Header } from '../../components/Header';
import { Nav } from '../../components/Nav';
import styles from './Calls.module.scss';

export const Calls: FC = () => {
  return (
    <div className={styles.calls}>
      <Nav />
      <div className={styles.content}>
        <Header />
        <DateSetting />
      </div>
    </div>
  );
};
