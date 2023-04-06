import React, {FC} from 'react';
import {IButton} from "../../utils/interfaces/interface";
import btn from "./button.module.css"
const ButtonPag: FC<IButton> = ({content, crnPage, onclick}) => {
  return (
    <button className={crnPage === content ? btn.btn_active : btn.btn}
      onClick={() => onclick(content)}>{content}
    </button>
  );
};

export default ButtonPag;
