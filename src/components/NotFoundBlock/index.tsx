import React, { FC } from 'react';
import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock: FC = () => {
  return (
    <tr>
      <td className={styles.root}>Ничего не найдено ☹</td>
    </tr>
  );
};
