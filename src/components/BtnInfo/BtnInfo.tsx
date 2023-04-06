import React, {FC} from 'react';
import btnInfo from "./btninfo.module.css"
import filterIcon from "../../assets/icons/filter.svg"
import {useAppDispatch} from "../../services";
import {handlePopup} from "../../services/reducers/modalSlice";
import CardBtnComp from "../CartBtnComp/CardBtnComp";
const BtnInfo: FC = () => {
  const dispatch = useAppDispatch()
  return (
    <span className={btnInfo.btn__btns}>
      <CardBtnComp/>
      <button className={btnInfo.btn__modal__btn} onClick={() => dispatch(handlePopup(true))}>
        <img src={filterIcon} alt="icon" className={btnInfo.btn__icon__modal}/>
      </button>
    </span>
  );
};

export default BtnInfo;
