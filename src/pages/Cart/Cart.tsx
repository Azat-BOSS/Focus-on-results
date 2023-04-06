import React, {FC} from 'react';
import cart from "./cart.module.css"
import {Link} from "react-router-dom";
import CardsCart from "../../components/CardsCart/CardsCart";
import FormCart from "../../components/FormCart/FormCart";
import Modal from "../../components/Modal/Modal";
import Order from "../../components/Order/Order";
const Cart: FC = () => {
  return (
    <div className={cart.cart}>
      <Link to={"/"} className={cart.cart__link}>Вернуться на главную</Link>
      <h1 className={cart.cart__title}>Корзина товаров</h1>
      <div className={cart.cart__container}>
        <CardsCart/>
        <FormCart/>
      </div>
      <Modal>
        <Order/>
      </Modal>
    </div>
  );
};

export default Cart;
