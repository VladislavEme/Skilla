import { FC } from 'react';
import { useSelector } from 'react-redux';
import inciming from '../../assets/img/callsSvg/incoming.svg';
import incimingSkip from '../../assets/img/callsSvg/incomingSkip.svg';
import outgoing from '../../assets/img/callsSvg/outgoing.svg';
import outgoingSkip from '../../assets/img/callsSvg/outgoingSkip.svg';
import { RootState } from '../../redux/store';
import { getDateTable, getTime } from '../../utils/getDate';
import { getDurateTime } from '../../utils/getDurateTime';
import { getFormatPhone } from '../../utils/getFotmatPhone';
import { AudioRecord } from '../AudioRecord';
import { CustomCheckbox } from '../CustomCheckbox';
import styles from './CallItem.module.scss';

interface CallItemProps {
  content: any;
  index: number;
}

export const CallItem: FC<CallItemProps> = ({ content, index }) => {
  const { calls } = useSelector((state: RootState) => state.calls);

  const {
    in_out,
    person_avatar,
    date,
    partner_data,
    source,
    time,
    errors,
    record,
    partnership_id,
    status,
    date_notime,
  } = content;

  const dysplayDate = index !== 0 && date_notime === calls[index - 1].date_notime ? false : true;

  const raisePhone = status === 'Дозвонился' ? true : false;

  const statusIcon =
    raisePhone && in_out
      ? inciming
      : raisePhone && !in_out
      ? outgoing
      : !raisePhone && in_out
      ? incimingSkip
      : outgoingSkip;

  const durate = getDurateTime(time);

  return (
    <>
      <tr>
        {dysplayDate && (
          <td>
            <p className={`${styles.call} ${styles.date_full}`}>{getDateTable(date_notime)}</p>
          </td>
        )}
      </tr>
      <tr className={styles.call}>
        <td className={styles.checkbox}>
          <CustomCheckbox />
        </td>
        <td>
          <img src={statusIcon} />
        </td>
        <td>{getTime(date)}</td>
        <td>{person_avatar ? <img className={styles.avatar} width={32} src={person_avatar} /> : 'No avatar'}</td>
        <td>{getFormatPhone(partner_data.phone)}</td>
        <td className={styles.source}>{source ? source : 'Без источника'}</td>
        <td className={styles.grade}>{errors}</td>
        <td className={styles.record}>
          {record && <AudioRecord idRecord={record} idPartnership={partnership_id} durate={durate} />}
        </td>
        <td className={styles.durate}>{time ? durate : ''}</td>
      </tr>
    </>
  );
};
