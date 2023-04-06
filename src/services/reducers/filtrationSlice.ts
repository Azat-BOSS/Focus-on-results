import {createSlice} from "@reduxjs/toolkit";
import {TFiltrationSlice} from "../../utils/types/type";

const initialState: TFiltrationSlice = {
  brandValue: "Все бренды",
  pagValue: "6",
  clothes: [],
  clothesTotal: [],
}

const filtrationSlice = createSlice({
  name: "filtration/filtrationSlice",
  initialState: initialState,
  reducers: {
    getBrandValue: (state, action) => {
      state.brandValue = action.payload
      state.clothesTotal = state.clothes.filter((card: any) => card.title === state.brandValue)
      if(action.payload === "Все бренды") {
        state.clothesTotal = state.clothes
      }
    },
    getClothes: (state, action) => {
      state.clothes = action.payload
      state.clothesTotal = action.payload
    },
    getPagValue: (state, action) => {
      state.pagValue = action.payload
    }
  }
})

export const {getBrandValue, getClothes, getPagValue} = filtrationSlice.actions
export default filtrationSlice.reducer

