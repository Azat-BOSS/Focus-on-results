import React, {FC} from 'react';
import cardStyle from "./card.module.css"
import {ICard} from "../../utils/interfaces/interface";
import {Link} from "react-router-dom";

const Card: FC<ICard> = ({link, onclick, title, size, currency, value, card}) => {
  return (
    <div className={cardStyle.card}>
        <Link className={cardStyle.card__img__block} to={`/card/${card.id}`}>
          <img src={link} alt={title} className={cardStyle.card__img}/>
        </Link>
      <div className={cardStyle.card__block}>
        <div className={cardStyle.card__info}>
          <p className={cardStyle.card__name}>{title}</p>
          <p className={cardStyle.card__size}>{size}</p>
          <p className={cardStyle.card__price}>{value} {currency}</p>
        </div>
        <button className={cardStyle.card__btn} onClick={() => onclick(card)}>
          +
        </button>
      </div>
    </div>
  );
};

export default Card;
