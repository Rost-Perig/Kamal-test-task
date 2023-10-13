import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IPositionState {
  x: number;
  y: number;
}

const initialState: IPositionState = {
  x: 0,
  y: 100,
}

export const positionSlice = createSlice({
  name: 'position',
  initialState,
  reducers: {
    changePosition: (state, action: PayloadAction<{ x: number, y: number }>) => {
      state = action.payload
    },

    changeX: (state, action: PayloadAction<{ x: number }>) => {
      state.x = action.payload.x
    },

    changeY: (state, action: PayloadAction<{ y: number }>) => {
      state.y = action.payload.y
    },
  },
})

export const { changePosition, changeX, changeY } = positionSlice.actions

export default positionSlice.reducer
