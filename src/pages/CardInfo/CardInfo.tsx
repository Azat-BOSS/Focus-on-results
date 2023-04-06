import React, {useCallback, useMemo} from 'react';
import card from "./card.module.css"
import {Link, useParams} from "react-router-dom";
import {createSelector} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../../services";
import {TClothe} from "../../utils/types/type";
import Button from "../../ui/Button/Button";
import {getClothesCart} from "../../services/reducers/cartSlice";
import CartBtnComp from "../../components/CartBtnComp/CardBtnComp";
const CardInfo = () => {
  const dispatch = useAppDispatch()
  const {id} = useParams()
  const dataSelector = createSelector(
    (state: RootState) => state.filtrationSlice.clothes,
    (clothes) => ({clothes})
  )
  const {clothes} = useSelector(dataSelector)

  const cardItem = useMemo(() => {
    return clothes.find((card: TClothe) => card.id === Number(id))!
  }, [clothes, id])

  const addCard = useCallback(() => {
    dispatch(getClothesCart(cardItem.id))
  }, [dispatch, cardItem?.id])

  return (
    <div className={card.cardInfo}>
      <div className={card.cardInfo__cart}>
        <Link to={"/"} className={card.cardInfo__link}>Вернуться на главную</Link>
        <CartBtnComp/>
      </div>
      <div className={card.cardInfo__image__block}>
        <img src={cardItem && cardItem!.image} alt="icon" className={card.cardInfo__img}/>
      </div>
      <div className={card.cardInfo__text__info}>
        <h1 className={card.cardInfo__title__info}>{cardItem && cardItem!.title}</h1>
        <ul className={card.cardInfo__ul}>
          <li className={card.cardInfo__li}>Price: <strong>{cardItem && cardItem!.regular_price.value}</strong></li>
          <li className={card.cardInfo__li}>Size: <strong>{cardItem && cardItem!.sku}</strong></li>
          <li className={card.cardInfo__li}>Type: <strong>{cardItem && cardItem!.type}</strong></li>
        </ul>
        <p className={card.cardInfo__info}>{cardItem && cardItem!.text}</p>
        <Button text={"Добавить"} handleClick={addCard}/>
      </div>
    </div>
  );
};

export default CardInfo;
