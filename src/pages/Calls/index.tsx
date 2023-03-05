import { FC } from 'react';
import { Header } from '../../components/Header';
import { Nav } from '../../components/Nav';
import styles from './Calls.module.scss';

export const Calls: FC = () => {
  return (
    <div className={styles.calls}>
      <Nav />
      <Header />
    </div>
  );
};
