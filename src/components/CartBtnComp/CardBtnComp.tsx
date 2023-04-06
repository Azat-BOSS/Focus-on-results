import React from 'react';
import cart from "../../assets/icons/cart.svg";
import cartS from "./cart.module.css"
import {RootState, useAppSelector} from "../../services";
import {useNavigate} from "react-router-dom";
import {createSelector} from "@reduxjs/toolkit";
const CartBtnComp = () => {
  const navigate = useNavigate()
  const cardsCardSelector = createSelector(
    (state: RootState) => state.cartSlice.clothesCart,
    (clothesCart) => ({clothesCart})
  )

  const {clothesCart} = useAppSelector(cardsCardSelector)

  const goCartPage = () => {
    return navigate("/cart")
  }

  return (
    <div>
      <button className={cartS.cartS__cart} onClick={() => goCartPage()}>
        <img src={cart} alt="cart-icon" className={cartS.cartS__cart__icon}/>
        {clothesCart.length !== 0 ?
          <p className={cartS.cardS__cart__count}>{clothesCart.length}</p>
          : null
        }
      </button>
    </div>
  );
};

export default CartBtnComp;
