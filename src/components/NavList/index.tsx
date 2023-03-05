import { FC, useState } from 'react';
import results from '../../assets/img/navSvg/results.svg';
import orders from '../../assets/img/navSvg/orders.svg';
import messages from '../../assets/img/navSvg/messages.svg';
import calls from '../../assets/img/navSvg/calls.svg';
import agents from '../../assets/img/navSvg/agents.svg';
import docs from '../../assets/img/navSvg/docs.svg';
import performers from '../../assets/img/navSvg/performers.svg';
import reports from '../../assets/img/navSvg/reports.svg';
import knowledgeBase from '../../assets/img/navSvg/knowledgeBase.svg';
import settings from '../../assets/img/navSvg/settings.svg';
import styles from './NavItem.module.scss';

export const NavList: FC = () => {
  const navItems = [
    ['Итоги', results],
    ['Заказы', orders],
    ['Сообщения', messages],
    ['Звонки', calls],
    ['Контрагенты', agents],
    ['Документы', docs],
    ['Исполнители', performers],
    ['Отчеты', reports],
    ['База знаний', knowledgeBase],
    ['Наcтройки', settings],
  ];

  const [activeItem, setActiveItem] = useState<number>(3);

  const clickItem = (item: number) => {
    setActiveItem(item);
  };

  return (
    <nav>
      <ul>
        {navItems.map((item, i) => (
          <li
            key={i}
            className={activeItem === i ? `${styles.active} ${styles.item}` : styles.item}
            onClick={() => clickItem(i)}
          >
            <img className={styles.img} src={item[1]} alt={item[0]} />
            {item[0]}
          </li>
        ))}
      </ul>
    </nav>
  );
};
