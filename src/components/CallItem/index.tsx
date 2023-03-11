import { FC } from 'react';
import incimingCall from '../../assets/img/callsSvg/incomingCall.svg';
import outgoingCall from '../../assets/img/callsSvg/outgoingCall.svg';
import { getTime } from '../../utils/getDate';
import { getDurateTime } from '../../utils/getDurateTime';
import { getFormatPhone } from '../../utils/getFotmatPhone';
import { AudioRecord } from '../AudioRecord';
import { CustomCheckbox } from '../CustomCheckbox';
import styles from './CallItem.module.scss';

interface CallItemProps {
  content: any;
}

export const CallItem: FC<CallItemProps> = ({ content }) => {
  const { in_out, person_avatar, date, partner_data, source, time, errors, record, partnership_id } = content;
  const durate = getDurateTime(time);
  return (
    <tr className={styles.call}>
      <td className={styles.checkbox}>
        <CustomCheckbox />
      </td>
      <td>
        <img src={in_out === 1 ? incimingCall : outgoingCall} />
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
  );
};
