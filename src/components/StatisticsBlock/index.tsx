import { FC } from 'react';
import { Statistic } from '../Statistic';
import greenBand from '../../assets/img/headerSvg/greenBand.svg';
import redBand from '../../assets/img/headerSvg/redBand.svg';
import yellowBand from '../../assets/img/headerSvg/yellowBand.svg';
import styles from './StatisticsBlock.module.scss';

export const StatisticsBlock: FC = () => {
  return (
    <div className={styles.root}>
      <Statistic title='Новые звонки' meaning='20 из 30 шт' colorText='green' band={greenBand} />
      <Statistic title='Качество разговоров' meaning='40%' colorText='yellow' band={yellowBand} />
      <Statistic title='Конверсия в заказ' meaning='67%' colorText='red' band={redBand} />
    </div>
  );
};
