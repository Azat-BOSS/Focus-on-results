import React, {FC, useEffect, useState} from 'react';
import ButtonPag from "../../ui/buttonPag/ButtonPag";
import {getPugClothes} from "../../services/reducers/dataSlice";
import {getIndex, getTotalBtn} from "../../utils/helpers/heplers";
import {createSelector} from "@reduxjs/toolkit";
import {RootState, useAppDispatch, useAppSelector} from "../../services";
import pag from "./pagination.module.css"
const Pagination: FC = () => {
  const dispatch = useAppDispatch()
  const [crnPage, setCrnPage] = useState(1)
  const [btnCount, setBtnCount] = useState<number[]>([])

  const filterSelector = createSelector(
    (state: RootState) => state.filtrationSlice.clothesTotal,
    (state: RootState) => state.filtrationSlice.pagValue,
    (clothes, pagValue) => ({clothes, pagValue})
  )

  const {clothes, pagValue} = useAppSelector(filterSelector)
  const changePage = (numPage: number) => setCrnPage(numPage)

  useEffect(() => {
    const resPagData = getIndex(crnPage, Number(pagValue), clothes)
    const getBtn = getTotalBtn(Number(pagValue), clothes.length)

    dispatch(getPugClothes(resPagData.resArr))
    setBtnCount(getBtn)
  }, [dispatch, clothes, crnPage, pagValue])

  return (
    <div className={pag.pag}>
      {
        btnCount.length !== 1 ?
          <>{btnCount?.map((num, index) => (
            <ButtonPag
              key={num}
              index={index}
              content={num}
              crnPage={crnPage}
              onclick={changePage}/>
          ))}</>
        : null
      }
    </div>
  );
};

export default Pagination;
