import { FC } from 'react';
import incimingCall from '../../assets/img/callsSvg/incomingCall.svg';
import outgoingCall from '../../assets/img/callsSvg/outgoingCall.svg';
import { getTime } from '../../utils/getDate';
import { getDurateCall } from '../../utils/getDurateCall';
import { getFormatPhone } from '../../utils/getFotmatPhone';
import styles from './CallItem.module.scss';

interface CallItemProps {
  content: any;
}

export const CallItem: FC<CallItemProps> = ({ content }) => {
  const { in_out, person_avatar, date, partner_data, source, time, from_site } = content;

  return (
    <>
      <td>
        <img src={in_out === 1 ? incimingCall : outgoingCall} />
      </td>
      <td>{getTime(date)}</td>
      <td>
        <img width={32} src={person_avatar} />
      </td>
      <td>{getFormatPhone(partner_data.phone)}</td>
      <td className={styles.source}>{source ? source : 'Без источника'}</td>
      <td>not</td>
      <td className={styles.durate}>{getDurateCall(time)}</td>
    </>
  );
};
