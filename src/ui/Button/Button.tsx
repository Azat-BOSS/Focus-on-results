import React, {FC} from 'react';
import btn from "./btn.module.css"
import {IBtn} from "../../utils/interfaces/interface";
const Button: FC<IBtn> = ({text, handleClick, type, bool}) => {
  return (
    <button
      className={!bool ? btn.btn : btn.btn_disabled}
      onClick={handleClick}
      type={type}
      disabled={bool}>
      {text}
    </button>
  );
};

export default Button;
