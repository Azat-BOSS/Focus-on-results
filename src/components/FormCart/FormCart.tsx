import React, {FC, useCallback} from 'react';
import form from "./form.module.css"
import {TextField, FormGroup} from "@mui/material";
import Button from "../../ui/Button/Button";
import {createSelector} from "@reduxjs/toolkit";
import {RootState, useAppDispatch, useAppSelector} from "../../services";
import {handlePopup} from "../../services/reducers/modalSlice";
const FormCart: FC = () => {
  const dispatch = useAppDispatch()
  const cardsCardSelector = createSelector(
    (state: RootState) => state.cartSlice.totalCost,
    (state: RootState) => state.cartSlice.clothesCart,
    (totalCost, clothesCart) => ({totalCost, clothesCart})
  )

  const {totalCost, clothesCart} = useAppSelector(cardsCardSelector)

  const handleButton = useCallback(() => {
    dispatch(handlePopup(true))
  }, [dispatch])

  return (
    <FormGroup className={form.form}>
      <div className={form.form__inputs}>
      <TextField
        inputProps={{style: {fontSize: "15px", width: "250px"}}}
        size={"small"}
        label={"Ваше имя"}
        variant={"standard"}
        InputLabelProps={{style: {fontSize: "15px"}}}
      />
      <TextField
        inputProps={{style: {fontSize: "15px", width: "250px"}}}
        size={"small"}
        label={"Ваша фамилия"}
        variant={"standard"}
        InputLabelProps={{style: {fontSize: "15px"}}}
      />
      <TextField
        inputProps={{style: {fontSize: "15px", width: "250px"}}}
        size={"small"}
        type={"number"}
        label={"Ваш номер телефона"}
        variant={"standard"}
        InputLabelProps={{style: {fontSize: "15px"}}}
      />
      </div>
        <div className={form.form__info}>
        <p className={form.form__cost}><strong>Итоговая стоимость: </strong>{totalCost} USD</p>
        <Button
          type={"submit"}
          text={"Заказать"}
          handleClick={handleButton}
          bool={clothesCart.length === 0}/>
      </div>
    </FormGroup>
  );
};

export default FormCart;
