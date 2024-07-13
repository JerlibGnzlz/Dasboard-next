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
      state.count++
    },

    decrementar: (state) => {
      if (state.count === 0) return

      state.count--
    },

    resetear: (state, action: PayloadAction<number>) => {
      if (action.payload < 0) action.payload = 0
    }
  },
})

export const { incrementar, decrementar, resetear } = counterSlice.actions

export default counterSlice.reducer