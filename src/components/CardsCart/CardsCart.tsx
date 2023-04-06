import React, {FC, useCallback} from 'react';
import cards from "./cardscart.module.css"
import CardCart from "../../ui/cardCart/cardCart";
import {createSelector} from "@reduxjs/toolkit";
import {RootState, useAppDispatch, useAppSelector} from "../../services";
import {incrementItems, decrementItems, getSumClothes, getDiffClothes} from "../../services/reducers/cartSlice";
const CardsCart: FC = () => {
  const dispatch = useAppDispatch()
  const cardsCardSelector = createSelector(
    (state: RootState) => state.cartSlice.clothesCart,
    (state: RootState) => state.cartSlice.totalCost,
    (clothesCart, totalCost) => ({clothesCart, totalCost})
  )

  const {clothesCart} = useAppSelector(cardsCardSelector)

  const addCard = useCallback((card: number | any) => {
    dispatch(incrementItems(card))
    dispatch(getSumClothes())
  }, [dispatch])

  const deleteCard = useCallback((card: number | any) => {
   dispatch(decrementItems(card))
   dispatch(getDiffClothes())
  }, [dispatch])

  return (
    <div className={cards.cards}>
      <div className={cards.cards__items}>
        {clothesCart.length === 0 ? <h2 className={cards.cards__title__items}>Корзина товаров пуста</h2>
        :
        <>
          {clothesCart?.map(card => (
            <CardCart
              key={card.id}
              link={card.image}
              title={card.title}
              currency={card.regular_price.currency}
              value={card.regular_price.value}
              increment={addCard}
              decrement={deleteCard}
              id={card.id}
              card={card}
            />
          ))}
        </>
        }
      </div>
    </div>
  );
};

export default CardsCart;
