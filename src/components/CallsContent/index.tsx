import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCalls } from '../../redux/calls/slice';
import { RootState } from '../../redux/store';

import styles from './CallsContent.module.scss';
import { CallItem } from '../CallItem';

export const CallsContent: FC = () => {
  const dispatch = useDispatch();
  const { calls } = useSelector((state: RootState) => state.calls);

  useEffect(() => {
    const postData = async (url = 'https://api.skilla.ru/mango/getList') => {
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
    };
    postData();
  }, []);

  return (
    <div className={styles.root}>
      <table>
        <thead>
          <tr className={styles.main}>
            <td>Тип</td>
            <td>Время</td>
            <td>Сотрудник</td>
            <td>Звонок</td>
            <td>Источник</td>
            <td>Оценка</td>
            <td>Длительность</td>
          </tr>
        </thead>
        <tbody>
          {calls.map((item: any) => (
            <tr className={styles.call} key={item.id}>
              <CallItem content={item} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
