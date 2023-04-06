import React, {FC} from 'react';
import order from "./order.module.css"
import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../../services";
import {useSelector} from "react-redux";

const Order: FC = () => {
  const btnModalSelector = createSelector(
    (state: RootState) => state.modalSlice.isOpen,
    (isOpen) => ({isOpen})
  )

  const {isOpen} = useSelector(btnModalSelector)
  return (
    <div className={isOpen ? order.order_active : order.order}>
      <h5 className={order.order__title}>Ваш заказал начал оформляться</h5>
    </div>
  );
};

export default Order;
