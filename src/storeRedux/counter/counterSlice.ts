import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface CounterState {
  count: number
}

const initialState: CounterState = {
  count: 5,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementar: (state) => {
      state.count + 1
    }
  },
})

export const { incrementar } = counterSlice.actions

export default counterSlice.reducer