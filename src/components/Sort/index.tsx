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
import { CALLS, CALL_TYPE, ERRORS, ESTIMATES, SOURCES, WORKERS } from '../../constants/stringConstants';

export const Sort: FC = () => {
  const { activeCallType, activeWorkers, activeCalls, activeSources, activeEstimates, activeErrors } = useSelector(
    (state: RootState) => state.popup
  );

  const popupParams = [
    {
      items: CALL_TYPE,
      activeItem: activeCallType,
      changeActiveItem: setActiveCallType,
    },
    {
      items: WORKERS,
      activeItem: activeWorkers,
      changeActiveItem: setActiveWorkers,
    },
    {
      items: CALLS,
      activeItem: activeCalls,
      changeActiveItem: setActiveCalls,
    },
    {
      items: SOURCES,
      activeItem: activeSources,
      changeActiveItem: setActiveSources,
    },
    {
      items: ESTIMATES,
      activeItem: activeEstimates,
      changeActiveItem: setActiveEstimates,
    },
    {
      items: ERRORS,
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
