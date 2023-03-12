import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCalls } from '../../redux/calls/slice';
import { RootState } from '../../redux/store';
import { CallItem } from '../CallItem';
import { TITLE_TABLE } from '../../constants/stringConstants';
import { CustomCheckbox } from '../CustomCheckbox';
import styles from './CallsContent.module.scss';
import { LoadingAnimation } from '../LoadingAnimation/LoadingAnimation';
import { getDatePeriod } from '../../utils/getDate';

export const CallsContent: FC = () => {
  const dispatch = useDispatch();
  const [isLoad, setIsLoad] = useState<boolean>(false);

  const { calls } = useSelector((state: RootState) => state.calls);
  const { activeCallType, activeDate } = useSelector((state: RootState) => state.popup);
  //если есть датаСтарт или ДатаКонец, то передать в эти параметры ''
  const typeCallParams = activeCallType === 2 ? '&in_out=0' : activeCallType === 1 ? '&in_out=1' : '';

  const dateParams = getDatePeriod(activeDate);

  //dateStart = dataStart? `&data_start=датаСтарт` : ''
  //dateEnd = redux
  //передаем в запрос и передаем в зависимости

  useEffect(() => {
    const postData = async (url = `https://api.skilla.ru/mango/getList?limit=50${typeCallParams}${dateParams}`) => {
      setIsLoad(false);
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer testtoken`,
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          return data.results;
        });

      dispatch(fetchCalls(response));
      setIsLoad(true);
    };
    postData();
  }, [activeCallType, activeDate]);

  return (
    <div className={styles.root}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.main}>
            <td className={styles.checkbox}>
              <CustomCheckbox />
            </td>
            {TITLE_TABLE.map((item, i) => (
              <td key={i}>{item}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {!isLoad ? (
            <tr>
              <td className={styles.loading}>
                <LoadingAnimation />
              </td>
            </tr>
          ) : (
            calls.map((item: any) => <CallItem content={item} key={item.id} />)
          )}
        </tbody>
      </table>
    </div>
  );
};
