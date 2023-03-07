import { FC } from 'react';
import { PopupCallType } from '../PopupCallType';
import styles from './Sort.module.scss';

export const Sort: FC = () => {
  const CALL_TYPE = ['Все типы', 'Входящие', 'Исходящие'];

  return (
    <div className={styles.root}>
      Поиск
      <div className={styles.sort}>
        <PopupCallType />
      </div>
    </div>
  );
};
