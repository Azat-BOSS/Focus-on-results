import {createSlice} from "@reduxjs/toolkit";
import {TModalState} from "../../utils/types/type";

const initialState: TModalState = {
  isOpen: false,
  isOpenSec: false
}

const modalSlice = createSlice({
  name: "modal/modalSlice",
  initialState: initialState,
  reducers: {
    handlePopup: (state, action) => {
      state.isOpen = action.payload
    },
    handleSecPopup: (state, action) => {
      state.isOpenSec = action.payload
    }
  }
})

export const {handlePopup, handleSecPopup} = modalSlice.actions
export default modalSlice.reducer
