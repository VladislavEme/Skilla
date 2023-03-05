import { FC, useState } from 'react';
import logoSvg from '../../assets/img/logo.svg';
import exclamation from '../../assets/buttons/exclamation.svg';
import plus from '../../assets/buttons/plus.svg';

import { Button } from '../Button';
import { NavList } from '../NavList';
import styles from './Nav.module.scss';

export const Nav: FC = () => {
  return (
    <div className={styles.nav}>
      <img className={styles.logo} src={logoSvg} alt='Skilla logo' />
      <div className={styles.nav__list}>
        <NavList />
      </div>
      <div className={styles.buttons}>
        <Button title='Добавить заказ' img={plus} />
        <Button title='Оплата' img={exclamation} />
      </div>
    </div>
  );
};
