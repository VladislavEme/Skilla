import { FC } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  title: string;
  img: string;
}

export const Button: FC<ButtonProps> = ({ title, img }) => {
  return (
    <button className={styles.button}>
      <div className={styles.title}>{title}</div>
      <img className={styles.img} src={img} alt={title} />
    </button>
  );
};
