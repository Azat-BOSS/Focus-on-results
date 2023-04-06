import {createSlice} from "@reduxjs/toolkit";
import {TCartState} from "../../utils/types/type";
import {getUniqArr} from "../../utils/helpers/heplers";

const initialState: TCartState = {
  clothes: [],
  clothesCart: [],
  clothesId: null,
  totalCost: 0,
}

const cartSlice  = createSlice({
  name: "cart/cartSlice",
  initialState: initialState,
  reducers: {
    getAllClothes: (state, action) => {
      state.clothes = action.payload
    },
    getClothesCart: (state, action) => {
      state.clothesId = action.payload
      let clothesArrCart = [...state.clothesCart, {...state.clothes.find((card: any) => card.id === state.clothesId), quan: 1}]
      state.clothesCart = getUniqArr(clothesArrCart)
      //@ts-ignore
      state.totalCost = +state.clothesCart.reduce((a, b) => a + b.quan! * b.regular_price.value, 0).toFixed(2)
    },
    incrementItems: (state, action) => {
      const cardIndex = state.clothesCart.findIndex(card => card.id === action.payload.id)
      state.clothesCart[cardIndex].quan! += 1
    },
    decrementItems: (state, action) => {
      const cardIndex = state.clothesCart.findIndex(card => card.id === action.payload.id)
      if(cardIndex >= 0) {
        state.clothesCart[cardIndex].quan! -= 1
      }
      if(state.clothesCart[cardIndex].quan === 0) {
        state.clothesCart = state.clothesCart.filter(card => card.id !== action.payload.id)
      }
    },
    getSumClothes: (state) => {
      // @ts-ignore
      state.totalCost = +state.clothesCart.reduce((a, b) => a + b.quan * b.regular_price.value, 0).toFixed(2)
    },
    getDiffClothes: (state) => {
      // @ts-ignore
      state.totalCost = Math.abs(+state.clothesCart.reduce((a, b) => a - b.quan * b.regular_price.value, 0).toFixed(2))
    }
  }
})

export const {
  getAllClothes,
  getClothesCart,
  incrementItems,
  decrementItems,
  getSumClothes,
  getDiffClothes
} = cartSlice.actions
export default cartSlice.reducer