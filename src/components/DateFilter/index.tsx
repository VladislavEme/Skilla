import { FC, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DATE_RANGE } from '../../constants/stringConstants';
import { setActiveDate, setIsOpenDate } from '../../redux/popup/slice';
import { RootState } from '../../redux/store';
import { PopupItems } from '../PopupMenu/PopupItems';
import styles from './DateFilter.module.scss';

export const DateFilter: FC = () => {
  const dispatch = useDispatch();
  const { activeDate, isOpenDate } = useSelector((state: RootState) => state.popup);
  const sortRef = useRef<HTMLDivElement>(null);

  const clickFilter = () => {
    dispatch(setIsOpenDate(!isOpenDate));
  };

  const clickButton = (i: number) => {
    dispatch(setActiveDate(activeDate + i));
  };

  const clickDateItem = (i: number) => {
    dispatch(setActiveDate(i));
    dispatch(setIsOpenDate(false));
  };

  useEffect(() => {
    const clickOutside = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        dispatch(setIsOpenDate(false));
      }
    };
    document.body.addEventListener('click', clickOutside);
    return () => document.body.removeEventListener('click', clickOutside);
  }, []);

  return (
    <div className={styles.root} ref={sortRef}>
      <button className={styles.button} onClick={() => clickButton(-1)} disabled={activeDate === 0 ? true : false}>
        <svg width='7' height='10' viewBox='0 0 7 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M6.175 8.825L2.35833 5L6.175 1.175L5 0L0 5L5 10L6.175 8.825Z' fill='#ADBFDF' />
        </svg>
      </button>

      <div className={styles.content} onClick={() => clickFilter()}>
        <svg width='16' height='18' viewBox='0 0 16 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M14.4 1.63636H13.6V0H12V1.63636H4V0H2.4V1.63636H1.6C0.72 1.63636 0 2.37273 0 3.27273V16.3636C0 17.2636 0.72 18 1.6 18H14.4C15.28 18 16 17.2636 16 16.3636V3.27273C16 2.37273 15.28 1.63636 14.4 1.63636ZM14.4 16.3636H1.6V5.72727H14.4V16.3636Z'
            fill='#ADBFDF'
          />
        </svg>
        <span className={styles.range}>{DATE_RANGE[activeDate]}</span>
      </div>

      <button className={styles.button} onClick={() => clickButton(+1)} disabled={activeDate === 3 ? true : false}>
        <svg width='7' height='10' viewBox='0 0 7 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M0.589844 8.825L4.40651 5L0.589844 1.175L1.76484 0L6.76484 5L1.76484 10L0.589844 8.825Z'
            fill='#ADBFDF'
          />
        </svg>
      </button>
      {isOpenDate && <PopupItems popupItems={DATE_RANGE} clickItem={clickDateItem} />}
    </div>
  );
};
