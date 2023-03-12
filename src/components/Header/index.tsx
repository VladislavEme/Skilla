import { FC } from 'react';
import { DateToday } from '../DateToday';
import { StatisticsBlock } from '../StatisticsBlock';
import search from '../../assets/img/headerSvg/search.svg';
import styles from './Header.module.scss';
import { Client } from '../Client';

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <DateToday />
      <StatisticsBlock />
      <img className={styles.icon} src={search} alt='Поиск' />
      <Client />
    </div>
  );
};
