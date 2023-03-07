import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { DATE_RANGE } from '../../constants/stringConstants';
import { setActiveDate, setIsOpen } from '../../redux/dateSlice';
import styles from './PopupDate.module.scss';

interface PopupDateProps {
  clickItem: any;
  popupItems: string[];
}

export const PopupDate: FC<PopupDateProps> = ({ clickItem, popupItems }) => {
  // const dispatch = useDispatch();

  // const clickDateItem = (i: number) => {
  //   dispatch(setActiveDate(i));
  //   dispatch(setIsOpen(false));
  // };

  return (
    <div className={styles.root}>
      <ul>
        {popupItems.map((item, i) => (
          <li className={styles.item} key={i} onClick={() => clickItem(i)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
