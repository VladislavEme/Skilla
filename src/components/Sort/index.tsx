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
  setIsOpenCalls,
  setIsOpenCallType,
  setIsOpenErrors,
  setIsOpenEstimates,
  setIsOpenSources,
  setIsOpenWorkers,
} from '../../redux/popup/slice';
import { PopupMenu } from '../PopupMenu';
import styles from './Sort.module.scss';
import { SearchCalls } from '../SearchCalls';

export const Sort: FC = () => {
  const {
    isOpenCallType,
    activeCallType,
    isOpenWorkers,
    activeWorkers,
    isOpenCalls,
    activeCalls,
    isOpenSources,
    activeSources,
    isOpenEstimates,
    activeEstimates,
    isOpenErrors,
    activeErrors,
  } = useSelector((state: RootState) => state.popup);

  const popupParams = [
    {
      items: ['Все типы', 'Входящие', 'Исходящие'],
      isOpen: isOpenCallType,
      activeItem: activeCallType,
      changeIsOpen: setIsOpenCallType,
      changeActiveItem: setActiveCallType,
    },
    {
      items: ['Все сотрудники', 'Константин К.', 'Полина З.'],
      isOpen: isOpenWorkers,
      changeIsOpen: setIsOpenWorkers,
      activeItem: activeWorkers,
      changeActiveItem: setActiveWorkers,
    },
    {
      items: ['Все звонки', 'Все клиенты', 'Новые клиенты', 'Все исполнители', 'Через приложение', 'Прочие звонки'],
      isOpen: isOpenCalls,
      changeIsOpen: setIsOpenCalls,
      activeItem: activeCalls,
      changeActiveItem: setActiveCalls,
    },
    {
      items: ['Все источники', 'Rabota.ru', 'Санкт-Петербург', 'Google', 'Yandex'],
      isOpen: isOpenSources,
      changeIsOpen: setIsOpenSources,
      activeItem: activeSources,
      changeActiveItem: setActiveSources,
    },
    {
      items: ['Все ошибки', 'Все ошибки', 'Имя', 'Цена', 'Скидка', 'Предзаказ', 'Благодарность', 'Стоп слова'],
      isOpen: isOpenEstimates,
      changeIsOpen: setIsOpenEstimates,
      activeItem: activeEstimates,
      changeActiveItem: setActiveEstimates,
    },
    {
      items: ['Все оценки', 'Распознать', 'Скрипт не использован', 'Плохо', 'Хорошо', 'Отлично', '1', '2', '3'],
      isOpen: isOpenErrors,
      changeIsOpen: setIsOpenErrors,
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
            isOpen={item.isOpen}
            activeItem={item.activeItem}
            changeIsOpen={item.changeIsOpen}
            changeActiveItem={item.changeActiveItem}
            popupItems={item.items}
          />
        ))}
      </div>
    </div>
  );
};
