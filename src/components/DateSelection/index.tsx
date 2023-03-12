import { FC, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDateStart, setDateEnd } from '../../redux/date/slice';
import { RootState } from '../../redux/store';
import { getDateFormat } from '../../utils/getDate';
import styles from './DateSelection.module.scss';

export const DateSelection: FC = () => {
  const dispatch = useDispatch();
  const { dateStart, dateEnd } = useSelector((state: RootState) => state.date);
  const inputStartRef = useRef<any>(null);
  const inputEndRef = useRef<any>(null);

  const dateStartstring = dateStart ? getDateFormat(dateStart) : '_ _._ _._ _';
  const dateEndstring = dateEnd ? getDateFormat(dateEnd) : '_ _._ _._ _';

  const clickStartDate = () => {
    dispatch(setDateStart(inputStartRef.current.value));
  };

  const clickEndDate = () => {
    dispatch(setDateEnd(inputEndRef.current.value));
  };

  return (
    <div className={styles.root}>
      <span className={styles.title}>Указать даты</span>
      <div className={styles.date__block}>
        <span className={styles.start}>
          {dateStartstring}
          <input ref={inputStartRef} onInput={clickStartDate} className={styles.input} type='date' />
        </span>

        {' - '}

        <span className={styles.start}>
          {dateEndstring}
          <input ref={inputEndRef} onInput={clickEndDate} className={styles.input} type='date' />
        </span>

        <svg
          className={styles.calendar}
          width='16'
          height='18'
          viewBox='0 0 16 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M14.4 1.63636H13.6V0H12V1.63636H4V0H2.4V1.63636H1.6C0.72 1.63636 0 2.37273 0 3.27273V16.3636C0 17.2636 0.72 18 1.6 18H14.4C15.28 18 16 17.2636 16 16.3636V3.27273C16 2.37273 15.28 1.63636 14.4 1.63636ZM14.4 16.3636H1.6V5.72727H14.4V16.3636Z'
            fill='#ADBFDF'
          />
        </svg>
      </div>
    </div>
  );
};
