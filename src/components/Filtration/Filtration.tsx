import React, {FC} from 'react';
import filt from "./filtr.module.css"
import {createSelector} from "@reduxjs/toolkit";
import {RootState, useAppDispatch} from "../../services";
import {useSelector} from "react-redux";
import {getBrandValue, getPagValue} from "../../services/reducers/filtrationSlice";
import {items} from "../../utils/data/data";
import SelectComp from "../../ui/SelectComp/SelectComp";
import {handlePopup} from "../../services/reducers/modalSlice";
const Filtration: FC = () => {
  const dispatch = useAppDispatch()
  const btnModalSelector = createSelector(
    (state: RootState) => state.modalSlice.isOpen,
    (isOpen) => ({isOpen})
  )

  const dataSelector = createSelector(
    (state: RootState) => state.dataSlice.brands,
    (brands) => ({brands})
  )

  const filterSelector = createSelector(
    (state: RootState) => state.filtrationSlice.brandValue,
    (state: RootState) => state.filtrationSlice.pagValue,
    (brandValue, pagValue) => ({brandValue, pagValue})
  )
  const {isOpen} = useSelector(btnModalSelector)
  const {brands} = useSelector(dataSelector)
  const {brandValue, pagValue} = useSelector(filterSelector)

  return (
    <div className={isOpen ? filt.filtration_active : filt.filtration}>
      <div className={isOpen ? filt.filtration__container_active : filt.filtration__container}>
        <button className={filt.filtration__button__close} onClick={() => dispatch(handlePopup(false))}>X</button>
        <h2 className={filt.filtration__title}>Фильтрация</h2>
        <div className={filt.filtration__info}>
            <span className={filt.filtration__block}>
            <p className={filt.filtration__text}>Отфильтровать по бренду</p>
              <SelectComp
                value={brandValue}
                action={getBrandValue}
                items={brands}
              />
            </span>
          <span className={filt.filtration__block}>
            <p className={filt.filtration__text}>Отфильтровать кол-во товаров</p>
            <SelectComp
              value={pagValue}
              action={getPagValue}
              items={items}
            />
            </span>
        </div>
      </div>
    </div>
  );
};

export default Filtration;
