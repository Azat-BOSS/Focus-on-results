import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {useDispatch, useSelector, TypedUseSelectorHook} from "react-redux";
import dataSlice from "./reducers/dataSlice";
import cartSlice from "./reducers/cartSlice";
import modalSlice from "./reducers/modalSlice"
import filtrationSlice from "./reducers/filtrationSlice";
import orderSlice from "./reducers/orderSlice";

const rootReducers = combineReducers({
  dataSlice: dataSlice,
  cartSlice: cartSlice,
  modalSlice: modalSlice,
  filtrationSlice: filtrationSlice,
  orderSlice: orderSlice
})

export const store = configureStore({
  reducer: rootReducers
})


export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
