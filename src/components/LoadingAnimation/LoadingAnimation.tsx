import { FC } from 'react';
import styles from './LoadingAnimation.module.scss';

export const LoadingAnimation: FC = () => {
  return (
    <svg className={styles.spinner} viewBox='0 0 50 50'>
      <circle className={styles.path} cx='25' cy='25' r='20' fill='none' strokeWidth='3'></circle>
    </svg>
  );
};
