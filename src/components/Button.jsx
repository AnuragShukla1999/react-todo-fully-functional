import React from 'react';
import { getClasses } from '../utils/getClasses.js';

const buttonTypes = {
  primary: 'primary',
  secondary: 'secondary',
};

function Button({ type, variant = 'primary', children, ...rest }) {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={getClasses([
        'bg-blue-500',
        'hover:bg-blue-700',
        'text-white',
        'font-bold',
        'py-2',
        'px-4',
        'rounded',
      ])}
      {...rest}
    >
      {children}
    </button>
  );
}


function SelectButton({ children, id, ...rest }) {
  return (
    <select
      id={id}
      className={getClasses(['bg-white', 'border', 'rounded', 'px-4', 'py-2'])}
      {...rest}
    >
      {children}
    </select>
  );
}

export { SelectButton };
export default Button;