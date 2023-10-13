import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IScaleState {
  scale: number;
}

const initialState: IScaleState = {
  scale: 1,
}

export const scaleSlice = createSlice({
  name: 'scale',
  initialState,
  reducers: {
    changeScale: (state, action: PayloadAction<{ scale: number }>) => {
      state.scale = action.payload.scale
    },
  },
})

export const { changeScale } = scaleSlice.actions

export default scaleSlice.reducer
