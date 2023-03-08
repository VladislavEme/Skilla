import { FC } from 'react';
import styles from './PopupItems.module.scss';

interface PopupItemsProps {
  clickItem: any;
  popupItems: string[];
}

export const PopupItems: FC<PopupItemsProps> = ({ clickItem, popupItems }) => {
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
