import { FC } from 'react';
import './CustomCheckbox.scss';

export const CustomCheckbox: FC = () => {
  return (
    <label className='custom-checkbox'>
      <input type='checkbox' value='value-1' />
      <span></span>
    </label>
  );
};
