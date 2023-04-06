import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const orderThunk = createAsyncThunk(
  "order/orderThunk",
  async (items) => {
    console.log(items)
    const res = await fetch("https://app.aaccent.su/js/confirm.php", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "items": items
      })
    })
    const result = await res.json()
    return result
  }
)

const initialState = {
  res: "",
  success: false
}

const orderSlice = createSlice({
  name: "order/orderSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(orderThunk.pending, (state) => {
        state.success = false
      })
      .addCase(orderThunk.fulfilled, (state, action) => {
        state.res = action.payload
        state.success = true
      })
      .addCase(orderThunk.rejected, (state) => {
        state.success = false
      })
  }
})

export default orderSlice.reducer
