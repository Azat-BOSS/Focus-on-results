import React, {FC} from 'react';
import modal from "./modal.module.css"
import {IModal} from "../../utils/interfaces/interface";
import {createPortal} from "react-dom";
import {createSelector} from "@reduxjs/toolkit";
import {RootState, useAppDispatch} from "../../services";
import {useSelector} from "react-redux";
import {handlePopup} from "../../services/reducers/modalSlice";

const Modal: FC<IModal> = ({children}) => {
  const dispatch = useAppDispatch()
  const btnModalSelector = createSelector(
    (state: RootState) => state.modalSlice.isOpen,
    (isOpen) => ({isOpen})
  )

  const {isOpen} = useSelector(btnModalSelector)

  return createPortal (
    <div className={isOpen ? `${modal.modal_active} ${document.body.style.overflow = 'hidden'}` : `${modal.modal} ${  document.body.removeAttribute('style')}`}>
      <div className={isOpen ? modal.modal__overlay_active : modal.modal__overlay} onClick={() => dispatch(handlePopup(false))}></div>
      {children}
    </div>,
    document.getElementById("modal")!
  );
};

export default Modal;
