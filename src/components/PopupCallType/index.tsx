import { FC, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CALL_TYPE } from '../../constants/stringConstants';
import { setActiveCallType, setIsOpenCallType } from '../../redux/dateSlice';
import { RootState } from '../../redux/store';
import { PopupDate } from '../PopupDate';
import styles from './PopupCallType.module.scss';

export const PopupCallType: FC = () => {
  const dispatch = useDispatch();
  const { isOpenCallType, activeCallType } = useSelector((state: RootState) => state.date);
  const sortRef = useRef<HTMLDivElement>(null);

  const clickTitle = () => {
    dispatch(setIsOpenCallType(!isOpenCallType));
  };

  const clickCallTypeItem = (i: number) => {
    dispatch(setActiveCallType(i));
    dispatch(setIsOpenCallType(false));
  };

  useEffect(() => {
    const clickOutside = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        dispatch(setIsOpenCallType(false));
      }
    };
    document.body.addEventListener('click', clickOutside);
    return () => document.body.removeEventListener('click', clickOutside);
  }, []);

  return (
    <div className={styles.root} ref={sortRef}>
      <div className={styles.title} onClick={() => clickTitle()}>
        <span className={styles.text}>{CALL_TYPE[activeCallType]}</span>
        <svg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M9.90008 0.601167L9.39911 0.100235C9.33236 0.0333416 9.25546 0 9.16853 0C9.08181 0 9.00494 0.0333416 8.93819 0.100235L5.00005 4.03816L1.06209 0.100341C0.995301 0.033447 0.918439 0.000105232 0.831611 0.000105232C0.744747 0.000105232 0.667886 0.033447 0.601132 0.100341L0.100235 0.601308C0.0333416 0.668061 0 0.744922 0 0.831786C0 0.91858 0.0334469 0.995441 0.100235 1.06219L4.76957 5.73164C4.83633 5.79843 4.91322 5.8318 5.00005 5.8318C5.08688 5.8318 5.16364 5.79843 5.23036 5.73164L9.90008 1.06219C9.96683 0.995406 10 0.918545 10 0.831786C10 0.744922 9.96683 0.668061 9.90008 0.601167Z'
            fill='#ADBFDF'
          />
        </svg>
      </div>
      {isOpenCallType && <PopupDate popupItems={CALL_TYPE} clickItem={clickCallTypeItem} />}
    </div>
  );
};
