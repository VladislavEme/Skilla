import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCalls } from '../../redux/calls/slice';
import { RootState } from '../../redux/store';

import styles from './CallsContent.module.scss';
import { CallItem } from '../CallItem';
import { TITLE_TABLE } from '../../constants/stringConstants';
import { CustomCheckbox } from '../CustomCheckbox';
import { AudioRecord } from '../AudioRecord';

export const CallsContent: FC = () => {
  const dispatch = useDispatch();
  const { calls } = useSelector((state: RootState) => state.calls);

  useEffect(() => {
    const postData = async (url = 'https://api.skilla.ru/mango/getList?limit=1000') => {
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
          {calls.map((item: any) => (
            <CallItem content={item} key={item.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
