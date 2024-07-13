import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface CounterState {
  count: number
  isReady: boolean
}

const initialState: CounterState = {
  count: 5,
  isReady: false
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    initConterState: (state, action: PayloadAction<number>) => {
      if (state.isReady) return

      state.count = action.payload
      state.isReady = true
    },

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

export const { incrementar, decrementar, resetear, initConterState } = counterSlice.actions

export default counterSlice.reducer