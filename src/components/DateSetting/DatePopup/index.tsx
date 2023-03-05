import { useDispatch } from 'react-redux';
import { dateRange } from '../../../constants/stringConstants';
import { setActiveDate, setIsOpen } from '../../../redux/dateSlice';
import styles from './DatePopup.module.scss';

export const DatePopup = () => {
  const dispatch = useDispatch();
  // const { isOpen } = useSelector((state: RootState) => state.date);

  const clickDateItem = (i: number) => {
    dispatch(setActiveDate(i));
    dispatch(setIsOpen(false));
  };

  return (
    <div className={styles.root}>
      <ul>
        {dateRange.map((item, i) => (
          <li className={styles.item} onClick={() => clickDateItem(i)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
