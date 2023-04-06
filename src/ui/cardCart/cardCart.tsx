import React, {FC} from 'react';
import cardStyle from "./cardcart.module.css"
import {ICardCart} from "../../utils/interfaces/interface";
const CardCart: FC<ICardCart> = ({link, title, currency, value, id, increment, decrement, card}) => {
  return (
    <div className={cardStyle.card}>
      <div className={cardStyle.card__block}>
        <span className={cardStyle.card__icon__block}>
         <img src={link} alt="card-icon" className={cardStyle.card__icon}/>
        </span>
        <span className={cardStyle.card__info}>
          <p className={cardStyle.card__title}>{title}</p>
          <p className={cardStyle.card__price}>{value} {currency}</p>
        </span>
      </div>
      <div className={cardStyle.card__bottom__block}>
        <p className={cardStyle.card__count}>{card.id === id && card.quan}</p>
        <div className={cardStyle.card__btn__block}>
          <button className={cardStyle.card__btn} onClick={() => increment(card)}>+</button>
          <button className={cardStyle.card__btn} onClick={() => decrement(card)}>-</button>
        </div>
      </div>
    </div>
  );
};

export default CardCart;
