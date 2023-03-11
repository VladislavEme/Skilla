import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import {
  setActiveCalls,
  setActiveCallType,
  setActiveErrors,
  setActiveEstimates,
  setActiveSources,
  setActiveWorkers,
} from '../../redux/popup/slice';
import { PopupMenu } from '../PopupMenu';
import styles from './Sort.module.scss';
import { SearchCalls } from '../SearchCalls';

export const Sort: FC = () => {
  const { activeCallType, activeWorkers, activeCalls, activeSources, activeEstimates, activeErrors } = useSelector(
    (state: RootState) => state.popup
  );

  const popupParams = [
    {
      items: ['Все типы', 'Входящие', 'Исходящие'],
      activeItem: activeCallType,
      changeActiveItem: setActiveCallType,
    },
    {
      items: ['Все сотрудники', 'Константин К.', 'Полина З.'],
      activeItem: activeWorkers,
      changeActiveItem: setActiveWorkers,
    },
    {
      items: ['Все звонки', 'Все клиенты', 'Новые клиенты', 'Все исполнители', 'Через приложение', 'Прочие звонки'],
      activeItem: activeCalls,
      changeActiveItem: setActiveCalls,
    },
    {
      items: ['Все источники', 'Rabota.ru', 'Санкт-Петербург', 'Google', 'Yandex'],
      activeItem: activeSources,
      changeActiveItem: setActiveSources,
    },
    {
      items: ['Все ошибки', 'Имя', 'Цена', 'Скидка', 'Предзаказ', 'Благодарность', 'Стоп слова'],
      activeItem: activeEstimates,
      changeActiveItem: setActiveEstimates,
    },
    {
      items: ['Все оценки', 'Распознать', 'Скрипт не использован', 'Плохо', 'Хорошо', 'Отлично', '1', '2', '3'],
      activeItem: activeErrors,
      changeActiveItem: setActiveErrors,
    },
  ];

  return (
    <div className={styles.root}>
      <SearchCalls />
      <div className={styles.sort}>
        {popupParams.map((item, i) => (
          <PopupMenu
            key={i}
            activeItem={item.activeItem}
            changeActiveItem={item.changeActiveItem}
            popupItems={item.items}
          />
        ))}
      </div>
    </div>
  );
};
