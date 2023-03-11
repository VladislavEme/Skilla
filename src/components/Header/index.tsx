import { FC } from 'react';
import { DateDay } from '../Date';
import { StatisticsBlock } from '../StatisticsBlock';
import search from '../../assets/img/headerSvg/search.svg';
import styles from './Header.module.scss';
import { Client } from '../Client';
import { CustomCheckbox } from '../CustomCheckbox';

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <DateDay />
      <StatisticsBlock />
      <img className={styles.icon} src={search} alt='Поиск' />
      <Client />
    </div>
  );
};
