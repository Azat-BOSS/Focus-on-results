import {createSlice} from "@reduxjs/toolkit";
import {TDataState} from "../../utils/types/type";

const initialState: TDataState = {
  brands: [],
  clothesPag: [],
}

const dataSlice = createSlice({
  name: "clothes/clothesSlice",
  initialState: initialState,
  reducers: {
    getBrands: (state, action) => {
      state.brands = action.payload
    },
    getPugClothes: (state, action) => {
      state.clothesPag = action.payload
    },

  }
})

export const {getBrands, getPugClothes} = dataSlice.actions
export default dataSlice.reducer