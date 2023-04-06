import React, {useCallback, FC} from 'react';
import cards from './cards.module.css'

import Card from "../../ui/card/Card";
import {createSelector} from "@reduxjs/toolkit";
import {RootState, useAppSelector, useAppDispatch} from "../../services";
import {TClothe} from "../../utils/types/type";
import {getClothesCart} from "../../services/reducers/cartSlice";

const Cards: FC = () => {
  const dispatch = useAppDispatch()
  const dataSelector = createSelector(
    (state: RootState) => state.dataSlice.clothesPag,
    (state: RootState) => state.filtrationSlice.clothesTotal,
    (clothesPag, clothesTotal) => ({clothesPag, clothesTotal})
  )

  const {clothesPag, clothesTotal} = useAppSelector(dataSelector)

  const addCard = useCallback((card: TClothe) => {
    dispatch(getClothesCart(card.id))
  }, [dispatch])

  return (
    <div className={cards.cards}>
      <div className={cards.cards__container}>
        {
          (clothesTotal.length) === 1 ?
            <>
              {clothesTotal?.map((card: TClothe) => (
              <Card
                key={card.id}
                id={card.id}
                onclick={addCard}
                link={card.image}
                title={card.title}
                size={card.sku}
                currency={card.regular_price.currency}
                value={card.regular_price.value}
                card={card}
              />
            ))}</>
            :
            <>
              {clothesPag?.map((card: TClothe) => (
                <Card
                  key={card.id}
                  id={card.id}
                  onclick={addCard}
                  link={card.image}
                  title={card.title}
                  size={card.sku}
                  currency={card.regular_price.currency}
                  value={card.regular_price.value}
                  card={card}
                />
              ))}
            </>
        }
      </div>
    </div>
  );
};

export default Cards
